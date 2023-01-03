import { SearchInput } from "../components/SearchInput";
import { MainTemplate } from "../templates/MainTemplate";
import { useQuery } from "@apollo/client";
import { GET_ALL_RECIPES } from "../graphql/query/recipes";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_RECIPES);

  return (
    <MainTemplate>
      <>
        <h2 className="text-center fs-5 pt-5 mb-4">
          Find some recipe with our fridge cooker
        </h2>
        <SearchInput />
      </>
    </MainTemplate>
  );
}
