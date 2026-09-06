import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#070A11] text-white px-4 text-center">
      <h1 className="text-6xl font-black text-[#FF7300] mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md text-sm">
        The page you are looking for might have been moved or does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[#FF7300] text-white font-semibold text-sm hover:brightness-110 transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}
