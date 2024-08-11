export interface Company {
  id: string;
  name: string;
  description?: string;
  address?: string;
  website?: string;
  image?: {
    url: string; // or whatever the field is called in the media collection
  };
}
