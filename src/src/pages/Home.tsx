import Card from "@/components/custom/Card";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-semibold underline">
        Welcome to the Home Page
      </h1>

      <div className="flex flex-row flex-wrap gap-x-3 gap-y-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
