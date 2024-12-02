export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-32">
      <div className="animate-spin-fast h-16 w-16 rounded-full border-4 border-t-4 border-solid border-gray-400"></div>
    </div>
  );
}
