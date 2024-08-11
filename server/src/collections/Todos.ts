import { CollectionConfig } from 'payload/types';

const Todos: CollectionConfig = {
  slug: 'todos', // L'identifiant unique de la collection
  labels: {
    singular: 'Todo',
    plural: 'Todos',
  },
  admin: {
    useAsTitle: 'title', // Utiliser le champ 'title' comme titre dans l'interface admin
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Statut',
      options: [
        {
          label: 'À faire',
          value: 'pending',
        },
        {
          label: 'En cours',
          value: 'in-progress',
        },
        {
          label: 'Terminé',
          value: 'completed',
        },
      ],
      defaultValue: 'pending', // Le statut par défaut est "À faire"
      required: true,
    },
    {
      name: 'dueDate',
      type: 'date',
      label: 'Date d\'échéance',
    },
  ],
};

export default Todos;
