import { navLinks } from "../../constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-500">
          Abhiraj
        </a>

        {/* Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}