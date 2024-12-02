import type { Character } from "@/interfaces/characters";
import { AspectRatio } from "../ui/aspect-ratio";

interface Props {
  character: Character;
}

export default function CharacterChard(props: Props) {
  const { name, gender, image, species, status } = props.character || {};

  return (
    <div className="min-w-[280px] max-w-[400px] overflow-hidden rounded-lg bg-white">
      <AspectRatio ratio={1 / 1} className="w-full">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </AspectRatio>

      <div className="mt-3">
        <h3 className="truncate text-xl font-bold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-600">{species}</p>
        <p className="mt-1 text-sm text-gray-600">{status}</p>
        <p className="mt-1 text-sm text-gray-600">{gender}</p>
      </div>
    </div>
  );
}
