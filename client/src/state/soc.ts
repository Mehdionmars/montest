export interface Companie {
    id: string;
    name: string;
    description?: string;
    address?: string;
    website?: string;
  }
  
  export async function fetchCompanies(): Promise<Companie[]> {
    const response = await fetch('http://localhost:3000/api/companies');
    if (!response.ok) {
      throw new Error('Failed to fetch companies');
    }
    const data = await response.json();
    return data.docs; // assuming Payload CMS returns data in { docs: [...] }
  }
  