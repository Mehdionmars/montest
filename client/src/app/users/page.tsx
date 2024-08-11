// src/app/users/page.tsx

"use client";

import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/users');
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération des utilisateurs');
        }

        const { docs: users }: { docs: User[] } = await res.json();
        setUsers(users);
      } catch (error) {
        setError('Erreur lors du chargement des utilisateurs');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const AddUserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitting(true);
      setFormError(null);

      try {
        const response = await fetch('http://localhost:3000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
        });

        if (!response.ok) {
          throw new Error('Erreur lors de l\'ajout de l\'utilisateur');
        }

        const newUser = await response.json();
        setUsers((prevUsers) => [...prevUsers, newUser]);

        setName('');
        setEmail('');
      } catch (error) {
        setFormError('Erreur lors de l\'ajout de l\'utilisateur');
      } finally {
        setSubmitting(false);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-gray-700">
            Nom:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700">
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
            />
          </label>
        </div>
        <button 
          type="submit" 
          disabled={submitting} 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {submitting ? 'Ajout en cours...' : 'Ajouter un utilisateur'}
        </button>
        {formError && <p className="text-red-500">{formError}</p>}
      </form>
    );
  };

  if (loading) return <p className="text-center text-gray-500">Chargement...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-medium">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-8">Ajouter un utilisateur</h2>
      <AddUserForm />
    </div>
  );
};

export default UsersPage;