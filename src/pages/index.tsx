import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductDetail from "../components/ProductDetail";
import { useGetAllProducts } from "../api/product.query";
import { Menu } from "lucide-react"; // Or use any icon

export default function EcommercePage() {
  const { data: productsData, isLoading, error } = useGetAllProducts();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [sidebarOpen, setSidebarOpen] = useState(false); // Toggle sidebar

  if (isLoading) {
    return (
      <div className="text-center p-10 text-pink-600 font-bold">
        Loading products...
      </div>
    );
  }

  if (error || !productsData) {
    return (
      <div className="text-center p-10 text-red-600 font-bold">
        Failed to load products.
      </div>
    );
  }

  const categories = Array.from(
    new Set(productsData.map((p) => p.category.toLowerCase()))
  );
  const filteredProducts = selectedCategory
    ? productsData.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : productsData;
  const selectedProduct = selectedProductId
    ? productsData.find((p) => p.id === selectedProductId)
    : null;

  return (
    <>
      <Navbar />

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-between items-center px-4 mt-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-pink-600 text-white px-3 py-2 rounded shadow-md"
        >
          <Menu className="inline-block mr-2" />
          Categories
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex flex-col md:flex-row gap-8">
        {/* Sidebar - hidden or shown based on toggle */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md p-4`}
        >
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setSelectedProductId(null);
              setSidebarOpen(false); // close on mobile after select
            }}
            filteredProducts={filteredProducts.map(
              ({ id, title, thumbnail }) => ({
                id,
                title,
                thumbnail,
              })
            )}
            selectedProductId={selectedProductId}
            onSelectProduct={(id) => {
              setSelectedProductId(id);
              setSidebarOpen(false); // close on mobile after select
            }}
          />
        </div>

        {/* Main content */}
        <main className="flex-1 bg-white rounded-lg shadow-lg p-6 min-h-[600px]">
          {selectedProduct ? (
            <ProductDetail product={selectedProduct} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProductId(product.id)}
                  className="cursor-pointer border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-1">
                    {product.title}
                  </h3>
                  <p className="text-pink-600 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
