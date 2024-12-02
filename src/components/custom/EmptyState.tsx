export default function EmptyState() {
  return (
    <div className="flex items-center justify-center p-32 px-4 text-center">
      <div>
        <div className="mb-4 text-4xl text-gray-400">😞</div>
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          No Data Available
        </h2>
        <p className="text-gray-600">
          It seems like there is nothing to display at the moment. Please check
          back later or try again.
        </p>
      </div>
    </div>
  );
}
