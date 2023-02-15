import { SearchInput } from "../components/SearchInput";
import { useQuery } from "@apollo/client";
import { GET_ALL_RECIPES } from "../graphql/query/recipes";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_RECIPES);

  return (
    <div className="container-fluid px-0">
      <Navbar />
      <Header />
      {/* <SearchInput /> */}
    </div>
  );
}
