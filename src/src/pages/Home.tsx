import { GET_CHARACTERS } from "@/apollo/graphql/queries/characters";
import CharacterChard from "@/components/custom/CharacterCard";
import { ReturnDataMany } from "@/interfaces";
import type { Character } from "@/interfaces/characters";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { loading, data } = useQuery<ReturnDataMany<Character>>(
    GET_CHARACTERS,
    {
      variables: {
        page: 1,
      },
    },
  );

  return (
    <div>
      <h1 className="text-3xl font-bold">Characters</h1>

      <div className="mt-8 flex flex-row flex-wrap gap-x-3 gap-y-6">
        {!loading &&
          data?.data.results?.map((character) => (
            <CharacterChard key={character.id} character={character} />
          ))}
      </div>
    </div>
  );
}
