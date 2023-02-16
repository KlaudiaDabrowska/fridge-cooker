import { SearchInput } from "../components/SearchInput";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="container-fluid px-0">
      <Navbar />
      <Header />
      <SearchInput />
    </div>
  );
}
