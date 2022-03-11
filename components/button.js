import Link from "next/link";

export default function PrimaryButton({ children, href }) {
  return (
    <Link href={href}>
      <a className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {children}
      </a>
    </Link>
  );
}
