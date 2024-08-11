// collections/companies.ts
import { CollectionConfig } from 'payload/types';

const Companies: CollectionConfig = {
  slug: 'companies',
  labels: {
    singular: 'Companie',
    plural: 'Companies',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom de la companie',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Adresse',
    },
    {
      name: 'website',
      type: 'text',
      label: 'Site web',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image de la companie',
      relationTo: 'media', // Assurez-vous que 'media' est la collection où les images sont stockées
      admin: {
        position: 'sidebar',
      },
    },
  ],
};

export default Companies;
