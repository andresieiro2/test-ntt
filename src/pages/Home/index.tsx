import Header from "../../components/Header";
import LoaderOverlay from "../../components/Loader";
import MovieCard from "../../components/MovieCard";
import SearchBar from "../../components/SearchBar";
import TitleBar from "../../components/TitleBar";

const Home = () => {
  return (
    <>
      <LoaderOverlay />
      <Header />
      <TitleBar />
      <SearchBar />
      <MovieCard />
    </>
  );
};

export default Home;
