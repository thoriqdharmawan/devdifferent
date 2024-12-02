import { GET_CHARACTERS_BY_ID } from "@/apollo/graphql/queries/characters";
import EmptyState from "@/components/custom/EmptyState";
import ItmSection from "@/components/custom/ItemSection";
import LoadingSpinner from "@/components/custom/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { removeDuplicates } from "@/helpers";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { ResponseDataSingle } from "@/interfaces";
import { Character, CharacterDetail } from "@/interfaces/characters";
import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { Check, ChevronLeft, Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function DetailCharacter() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { storedValue, setValue } = useLocalStorage<Character[]>(
    "character",
    [],
  );

  const { loading, data } = useQuery<ResponseDataSingle<CharacterDetail>>(
    GET_CHARACTERS_BY_ID,
    {
      skip: !id,
      variables: {
        id,
      },
    },
  );

  const isSelected = storedValue.some((c) => c.id === data?.data?.id);

  const toggleCharacter = (isSelected: boolean, character: Character) => {
    if (isSelected) {
      setValue(storedValue.filter((c) => c.id !== character.id));
      return;
    }

    setValue(removeDuplicates([...storedValue, character]));
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <ChevronLeft
          className="cursor-pointer"
          onClick={() => navigate({ pathname: "/" })}
        />

        <h1 className="text-3xl font-bold">Detail Characters</h1>
      </div>

      {loading && <LoadingSpinner />}

      {!loading && !data?.data && <EmptyState />}

      {!loading && data && (
        <div
          className={cn("mt-6 rounded-md p-4", {
            "outline outline-1": isSelected,
          })}
        >
          <div className="flex gap-4">
            <img
              src={data?.data?.image}
              alt={data?.data?.name}
              className="h-full max-h-72 w-full max-w-72 rounded-md object-cover"
            />

            <div className="flex flex-col justify-between px-6 py-3">
              <div>
                <h2 className="text-2xl font-bold">{data?.data?.name}</h2>

                <p>
                  {data?.data?.status} - {data?.data?.species}
                </p>

                <div className="mt-3 flex flex-col gap-3">
                  <ItmSection
                    label="Last known location:"
                    value={[
                      data?.data?.location.name,
                      data?.data?.location.dimension,
                    ]
                      .filter((a) => a)
                      .join(" - ")}
                  />

                  <ItmSection
                    label="First seen in:"
                    value={[data?.data?.origin.name, data?.data?.origin.type]
                      .filter((a) => a)
                      .join(" - ")}
                  />
                </div>
              </div>

              <Button onClick={() => toggleCharacter(isSelected, data?.data)}>
                {isSelected ? <Check /> : <Plus />}
                {isSelected ? "Remove from Selection" : "Add to Selection"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {!loading && data?.data && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Episodes</h2>

          <div className="mt-3">
            {data?.data?.episode?.map((episode) => (
              <div className="cursor-default rounded-md px-6 py-3 hover:bg-slate-100 hover:dark:text-black">
                <p className="text-md font-bold">{episode.name}</p>
                <p>
                  {episode.episode} - {episode.air_date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
