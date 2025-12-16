import { fetchAllCustomersData } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page() {
  const filteredCustomers = await fetchAllCustomersData();
  return (
    <div className="w-full">
      <CustomersTable customers={filteredCustomers} />
    </div>
  );
}
