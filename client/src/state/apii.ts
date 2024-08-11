import { Company } from "./company";

const PAYLOAD_API_URL = 'http://localhost:3000/api/companies'; // Update this URL if necessary

export async function fetchCompanies(offset: number): Promise<{ companies: Company[], totalCompanies: number }> {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}?offset=${offset}`);
    if (!response.ok) {
      throw new Error('Failed to fetch companies');
    }
    const data = await response.json();
    return {
      companies: data.companies || [],
      totalCompanies: data.totalCompanies || 0,
    };
  } catch (error) {
    console.error('Error fetching companies:', error);
    return { companies: [], totalCompanies: 0 };
  }
}
