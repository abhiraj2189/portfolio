export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#050816]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-blue-500">
          Abhiraj
        </h1>

        <div className="flex gap-8 text-white">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

      </div>
    </nav>
  );
}