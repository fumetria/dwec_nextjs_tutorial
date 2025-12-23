import Link from "next/link";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export function CreateCustomer() {
  return (
    <Link
      href="/dashboard/customers/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-cyan-500 dark:text-slate-50 dark:hover:bg-cyan-400 dark:focus-visible:outline-cyan-600"
    >
      <span className="hidden md:block">New Customer</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded p-2 hover:bg-gray-100 border border-gray-50 shadow hover:border-gray-100 dark:bg-slate-800 dark:hover:bg-cyan-400 dark:hover:text-slate-500 dark:border-slate-500"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCustomer({ id }: { id: string }) {
  return (
    <>
      <form action="">
        <button className="rounded-md p-2 hover:bg-gray-100 border border-gray-50 shadow hover:border-gray-100 dark:bg-slate-800 dark:hover:bg-cyan-400 dark:hover:text-slate-500 dark:border-slate-500">
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}

export function ShowCustomerInvoices({ name }: { name: string }) {
  return (
    <Link
      href={`/dashboard/invoices?query=${name}`}
      className="rounded p-2 hover:bg-gray-100 border border-gray-50 shadow hover:border-gray-100 dark:bg-slate-800 dark:hover:bg-cyan-400 dark:hover:text-slate-500 dark:border-slate-500"
      title={`Show invoices from ${name}`}
    >
      <DocumentMagnifyingGlassIcon className="w-5" />
    </Link>
  );
}
