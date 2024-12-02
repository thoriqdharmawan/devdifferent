import { GET_CHARACTERS } from "@/apollo/graphql/queries/characters";
import CharacterChard from "@/components/custom/CharacterCard";
import Dropdown from "@/components/custom/Dropdown";
import { SPECIES_OPTIONS, STATUS_OPTIONS } from "@/constants";
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

  const { loading, data } = useQuery<ReturnDataMany<Character>>(
    GET_CHARACTERS,
    {
      variables: {
        page: 1,
        name: filter.name,
        species: filter.species,
        status: filter.status,
      },
    },
  );

  console.log(filter);

  const handleChangeFilter = (field: string, value: string) => {
    setFilter((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Characters</h1>

      <div>
        <div className="mt-6 flex flex-col items-center gap-4 md:flex-row">
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
      </div>

      <div className="mt-8 flex flex-row flex-wrap gap-x-3 gap-y-6">
        {!loading &&
          data?.data.results?.map((character) => (
            <CharacterChard key={character.id} character={character} />
          ))}
      </div>
    </div>
  );
}
