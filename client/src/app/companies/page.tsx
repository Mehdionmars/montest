import { CompaniesTable } from '@/app/companies/CompaniesTable';
import { fetchCompanies } from '@/state/apii';

export default async function Page({ searchParams }: { searchParams: { offset: string } }) {
  const offset = parseInt(searchParams.offset, 10) || 0;
  const { companies, totalCompanies } = await fetchCompanies(offset);

  return (
    <div>
      <CompaniesTable
        companies={companies}
        offset={offset}
        totalCompanies={totalCompanies}
      />
    </div>
  );
}
