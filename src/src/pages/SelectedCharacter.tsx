import CharacterChard from "@/components/custom/CharacterCard";
import EmptyState from "@/components/custom/EmptyState";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { Character } from "@/interfaces/characters";

export default function SelectedCharacter() {
  const { setValue, storedValue } = useLocalStorage<Character[]>(
    "character",
    [],
  );

  const toggleCharacter = (character: Character) => {
    setValue(storedValue.filter((c) => c.id !== character.id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Selected Characters</h1>

      {storedValue?.length === 0 && <EmptyState />}

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {storedValue?.map((character) => {
          return (
            <CharacterChard
              key={character.id}
              character={character}
              isSelected
              onToggleLocalStorage={() => toggleCharacter(character)}
            />
          );
        })}
      </div>
    </div>
  );
}
