export default function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="p-3 bg-pink-50 rounded-lg shadow-sm hover:shadow-md transition cursor-default">
      <p className="text-xs text-pink-600 font-semibold mb-1">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
