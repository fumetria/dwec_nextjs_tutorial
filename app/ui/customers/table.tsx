import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { FormattedCustomersTable } from "@/app/lib/definitions";
import {
  DeleteCustomer,
  ShowCustomerInvoices,
  UpdateCustomer,
} from "../customers/buttons";

export default async function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 dark:bg-slate-800 p-2 md:pt-0">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md bg-white dark:bg-slate-900 p-4"
                  >
                    <div className="flex items-center justify-between border-b dark:border-slate-800 pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={customer.image_url}
                              className="rounded-full"
                              alt={`${customer.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{customer.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-slate-50">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{customer.total_invoices} invoices</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 dark:bg-slate-800 text-left text-sm font-normal">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-5 text-center font-medium dark:text-slate-50 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-5 text-center font-medium dark:text-slate-50"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-5 text-center font-medium dark:text-slate-50"
                    >
                      Total Invoices
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-5 text-center font-medium dark:text-slate-50"
                    >
                      Total Pending
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-5 text-center font-medium dark:text-slate-50"
                    >
                      Total Paid
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-5 text-center font-medium dark:text-slate-50"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-slate-800 text-gray-900 dark:text-slate-50">
                  {customers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="group [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black dark:bg-slate-900 dark:text-slate-50  sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-slate-900 dark:text-slate-50">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap text-center bg-white px-4 py-5 text-sm dark:bg-slate-900 dark:text-slate-50">
                        {customer.total_invoices}
                      </td>
                      <td className="whitespace-nowrap text-center bg-white px-4 py-5 text-sm dark:bg-slate-900 dark:text-slate-50">
                        {customer.total_pending}
                      </td>
                      <td className="whitespace-nowrap text-center bg-white px-4 py-5 text-sm  dark:bg-slate-900 dark:text-slate-50">
                        {customer.total_paid}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-slate-900 dark:text-slate-50">
                        <div className="flex justify-center gap-2">
                          <ShowCustomerInvoices name={customer.name} />
                          <UpdateCustomer id={customer.id} />
                          <DeleteCustomer id={customer.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
