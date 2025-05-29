type SidebarProps = {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
  filteredProducts: { id: number; title: string; thumbnail: string }[];
  selectedProductId: number | null;
  onSelectProduct: (id: number) => void;
};

export default function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  filteredProducts,
  selectedProductId,
  onSelectProduct,
}: SidebarProps) {
  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow p-4 sticky top-20 h-fit">
      <h2 className="text-xl font-bold mb-4 text-pink-600">Categories</h2>
      <ul className="space-y-3">
        <li
          className={`cursor-pointer px-3 py-2 rounded hover:bg-pink-100 transition ${
            !selectedCategory ? "bg-pink-200 font-semibold" : "text-gray-700"
          }`}
          onClick={() => onSelectCategory(null)}
        >
          All Products
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`cursor-pointer px-3 py-2 rounded hover:bg-pink-100 transition ${
              selectedCategory === cat
                ? "bg-pink-200 font-semibold"
                : "text-gray-700"
            } capitalize`}
          >
            {cat}
          </li>
        ))}
      </ul>

      {filteredProducts.length > 0 && (
        <>
          <h3 className="mt-8 text-lg font-semibold text-pink-600">Products</h3>
          <ul className="mt-3 max-h-96 overflow-y-auto space-y-2">
            {filteredProducts.map((p) => (
              <li
                key={p.id}
                onClick={() => onSelectProduct(p.id)}
                className={`cursor-pointer rounded p-2 flex items-center gap-3 hover:bg-pink-50 transition ${
                  selectedProductId === p.id
                    ? "bg-pink-100 font-semibold"
                    : "text-gray-700"
                }`}
              >
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <span className="truncate">{p.title}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
}
