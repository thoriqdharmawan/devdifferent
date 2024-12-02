import type { Character } from "@/interfaces/characters";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Props {
  character: Character;
  isSelected?: boolean;
  onToggleLocalStorage: () => void;
}

export default function CharacterChard(props: Props) {
  const { onToggleLocalStorage, isSelected } = props;
  const { id, name, gender, image, species, status } = props.character || {};

  return (
    <div
      className={cn(
        "min-w-[280px] max-w-[400px] overflow-hidden rounded-md bg-white p-2",
        {
          "outline outline-1": isSelected,
        },
      )}
    >
      <AspectRatio ratio={1 / 1} className="w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>

      <div className="mt-3">
        <Link to={`/character/${id}`}>
          <h3 className="cursor-pointer truncate text-xl font-bold text-gray-900 hover:underline">
            {name}
          </h3>
        </Link>
        <div className="flex gap-2">
          <p className="mt-1 text-sm text-gray-600">{species}</p>
          <p className="mt-1 text-sm text-gray-600">{status}</p>
          <p className="mt-1 text-sm text-gray-600">{gender}</p>
        </div>
      </div>

      <Button
        onClick={onToggleLocalStorage}
        className="ml-auto mt-1 block rounded-full"
      >
        {isSelected ? <Check /> : <Plus />}
      </Button>
    </div>
  );
}
