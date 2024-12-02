import { AspectRatio } from "../ui/aspect-ratio";

export default function Card() {
  return (
    <div className="min-w-[280px] max-w-[400px]">
      <AspectRatio ratio={1 / 1}>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
          className="z-0 rounded-md object-cover"
          alt="Abadango Cluster Princess"
        />
      </AspectRatio>

      <div className="mt-3">
        <h3>Abadango Cluster Princess</h3>
        <p>species</p>
        <p>status</p>
        <p>gender</p>
      </div>
    </div>
  );
}
