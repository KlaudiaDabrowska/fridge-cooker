import { SearchInput } from "../components/SearchInput";
import { MainTemplate } from "../templates/MainTemplate";

export default function Home() {
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
