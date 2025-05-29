import type { TProduct } from "../types/product.type";
import InfoCard from "./InfoCard";
import Reviews from "./Review";

type ProductDetailProps = {
  product: TProduct;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Images */}
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg w-full object-contain h-[300px] md:h-[400px]"
          />
          <div className="flex gap-3 mt-3 overflow-x-auto">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.title} ${i}`}
                className="w-20 h-20 object-cover rounded-lg border hover:scale-105 transition-transform cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-pink-700">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-2xl font-extrabold text-pink-600">
                ${product.price.toFixed(2)}
              </div>
              <div className="line-through text-gray-400">
                $
                {(
                  product.price +
                  (product.price * product.discountPercentage) / 100
                ).toFixed(2)}
              </div>
              <div className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full">
                {product.availabilityStatus}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Product Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-6">
              <InfoCard title="Brand" value={product.brand} />
              <InfoCard title="Category" value={product.category} />
              <InfoCard title="Stock" value={product.stock.toString()} />
              <InfoCard
                title="Rating"
                value={`${product.rating.toFixed(1)} / 5`}
              />
              <InfoCard title="Warranty" value={product.warrantyInformation} />
              <InfoCard title="Shipping" value={product.shippingInformation} />
              <InfoCard title="Return Policy" value={product.returnPolicy} />
              <InfoCard
                title="Min Order Qty"
                value={product.minimumOrderQuantity.toString()}
              />
              <InfoCard
                title="Dimensions"
                value={`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`}
              />
              <InfoCard title="Weight" value={`${product.weight} g`} />
            </div>

            {/* SKU, Barcode & QR */}
            <div className="flex flex-wrap items-center gap-8 mb-6">
              <div>
                <p className="text-xs font-semibold text-gray-500">SKU</p>
                <p className="font-semibold">{product.sku}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">Barcode</p>
                <p className="font-semibold">{product.meta.barcode}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">QR Code</p>
                <a
                  href={product.meta.qrCode}
                  target="_blank"
                  className="text-pink-600 underline"
                >
                  View QR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Reviews reviews={product.reviews} />
    </>
  );
}
