import { GET_CHARACTERS } from "@/apollo/graphql/queries/characters";
import CharacterChard from "@/components/custom/CharacterCard";
import Dropdown from "@/components/custom/Dropdown";
import EmptyState from "@/components/custom/EmptyState";
import LoadingSpinner from "@/components/custom/LoadingSpinner";
import { Input } from "@/components/ui/input";
import { SPECIES_OPTIONS, STATUS_OPTIONS } from "@/constants";
import { removeDuplicates } from "@/helpers";
// import { getFromLocalStorage, setToLocalStorage } from "@/helpers";
import useDebounce from "@/hooks/use-debounce";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { ReturnDataMany } from "@/interfaces";
import type { Character, CharacterFilters } from "@/interfaces/characters";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const DEFAULT_FILTER = {
  name: "",
  species: "",
  status: "",
};

export default function Home() {
  const [filter, setFilter] = useState<CharacterFilters>(DEFAULT_FILTER);
  const debouncedName = useDebounce<string>(filter.name, 300);

  const { setValue, storedValue } = useLocalStorage<Character[]>(
    "character",
    [],
  );

  const { loading, data } = useQuery<ReturnDataMany<Character>>(
    GET_CHARACTERS,
    {
      variables: {
        page: 1,
        name: debouncedName,
        species: filter.species,
        status: filter.status,
      },
    },
  );

  const handleChangeFilter = (field: string, value: string) => {
    setFilter((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCharacter = (character: Character) => {
    const isRemove = storedValue.some((c) => c.id === character.id);

    if (isRemove) {
      setValue(storedValue.filter((c) => c.id !== character.id));
      return;
    }

    setValue(removeDuplicates([...storedValue, character]));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Characters</h1>

      <div className="mt-6 flex w-full flex-col items-end justify-between gap-4 md:flex-row">
        <div className="flex w-full flex-col items-center gap-4 md:flex-row">
          <Dropdown
            label="Species"
            value={filter.species}
            onValueChange={(value) => handleChangeFilter("species", value)}
            options={SPECIES_OPTIONS}
            placeholder="Choose Species"
          />
          <Dropdown
            label="Status"
            value={filter.status}
            onValueChange={(value) => handleChangeFilter("status", value)}
            options={STATUS_OPTIONS}
            placeholder="Choose Status"
          />
        </div>

        <div className="flex w-full flex-col gap-2 md:max-w-64 lg:w-full">
          <p className="text-sm text-gray-600">Search Data</p>
          <Input
            value={filter.name}
            onChange={(e) => handleChangeFilter("name", e.target.value)}
            className="w-full"
            placeholder="Search..."
          />
        </div>
      </div>

      {loading && <LoadingSpinner />}

      {!loading && data?.data.results.length === 0 && <EmptyState />}

      <div className="mt-8 flex flex-row flex-wrap justify-between gap-x-3 gap-y-9">
        {!loading &&
          data?.data.results?.map((character) => {
            const isInLocalStorage = storedValue.some(
              (c) => c.id === character.id,
            );

            return (
              <CharacterChard
                key={character.id}
                character={character}
                isInLocalStorage={isInLocalStorage}
                onToggleLocalStorage={() => toggleCharacter(character)}
              />
            );
          })}
      </div>
    </div>
  );
}
