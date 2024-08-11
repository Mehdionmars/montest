import { CollectionConfig } from "payload/types"

const Uploads: CollectionConfig = {
  slug: 'uploads',
    upload: {
        staticURL: '/uploads',
        staticDir: '/uploads',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
            }
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],    
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'uploads',
        },
    ],
};

export default Uploads;