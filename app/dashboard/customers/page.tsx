import { fetchAllCustomersData } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { CreateCustomer } from "@/app/ui/customers/buttons";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page() {
  const filteredCustomers = await fetchAllCustomersData();
  return (
    <div className="w-full">
      <div>
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Customers
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <CreateCustomer />
      </div>
      <Suspense>
        <CustomersTable customers={filteredCustomers} />
      </Suspense>
    </div>
  );
}
