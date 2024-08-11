'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/app/(components)/ui/button'; // Import the Button component
import Image from 'next/image'; // Import the Image component
import { Company } from '@/state/company'; // Import the Company type

interface CompaniesTableProps {
  companies: Company[];
  offset: number;
  totalCompanies: number;
}

export function CompaniesTable({ companies, offset, totalCompanies }: CompaniesTableProps) {
  const router = useRouter();
  const companiesPerPage = 5;

  const prevPage = () => {
    if (offset > 0) {
      router.push(`/?offset=${offset - companiesPerPage}`);
    }
  };

  const nextPage = () => {
    if (offset + companiesPerPage < totalCompanies) {
      router.push(`/?offset=${offset + companiesPerPage}`);
    }
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Companies</h2>
          <p className="text-sm text-gray-500">Manage your companies and view their details.</p>
        </div>
        <div className="p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {companies.map((company) => (
                <tr key={company.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.website}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {company.image ? (
                      <Image
                        src={company.image.url}
                        alt={company.name}
                        width={64} // Adjust width as needed
                        height={64} // Adjust height as needed
                        className="object-cover"
                      />
                    ) : (
                      'No image'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t flex justify-between items-center">
          <div className="text-xs text-gray-500">
            Showing{' '}
            <strong>
              {Math.min(offset, totalCompanies)}-{Math.min(offset + companiesPerPage, totalCompanies)}
            </strong>{' '}
            of <strong>{totalCompanies}</strong> companies
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={prevPage}
              variant="outline"
              size="sm"
              disabled={offset === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Prev
            </Button>
            <Button
              onClick={nextPage}
              variant="outline"
              size="sm"
              disabled={offset + companiesPerPage >= totalCompanies}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
