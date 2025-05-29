import type { TReview } from "../types/product.type";

type ReviewsProps = {
  reviews: TReview[];
};

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-pink-700">
        Customer Reviews ({reviews.length})
      </h2>
      <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{review.reviewerName}</h3>
              <span className="text-yellow-500 font-bold">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>{idx < review.rating ? "★" : "☆"}</span>
                ))}
              </span>
            </div>
            <p className="text-gray-700 mb-1">{review.comment}</p>
            <p className="text-xs text-gray-400">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
