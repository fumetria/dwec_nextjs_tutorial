import { Customer } from "@/app/lib/definitions";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { createCustomer } from "@/app/lib/actions";

export default function Form() {
  return (
    <>
      <form action={createCustomer}>
        <div className="grid w-full rounded-md bg-gray-50 p-4 md:p-6">
          <div className="grid mb-4">
            <label htmlFor="name">Customer name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-md border border-gray-200 text-sm"
              placeholder="Customer name"
            />
          </div>
          <div className="grid mb-4">
            <label htmlFor="email">Customer email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-md border border-gray-200 text-sm"
              placeholder="Customer email"
            />
          </div>
          <div className="grid mb-4">
            <label htmlFor="image_url">Customer image</label>
            <input
              type="text"
              id="imgage_url"
              name="image_url"
              className="rounded-md border border-gray-200 text-sm"
              placeholder="Customer image url"
            />
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/dashboard/customers"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
            <Button type="submit">New Customer</Button>
          </div>
        </div>
      </form>
    </>
  );
}
