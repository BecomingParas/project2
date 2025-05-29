export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-extrabold text-pink-600 cursor-pointer">
          ShopEasy
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold"></ul>
        <div className="hidden md:block">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
}
