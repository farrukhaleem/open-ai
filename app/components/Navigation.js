import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="hover:text-gray-400">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/terms-and-conditions" className="hover:text-gray-400">
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </nav>
  );
}
