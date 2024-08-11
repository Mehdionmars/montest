export interface Todo {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate?: string;
}

export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch('http://localhost:3000/api/todos');
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  const data = await response.json();
  return data.docs; // assuming Payload CMS returns data in { docs: [...] }
}
