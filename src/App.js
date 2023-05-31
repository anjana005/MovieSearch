import { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import axios from "axios";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((response) => {
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeTheSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const getSearchedMovies = (event) => {
    axios
      .get(SEARCHAPI + search)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);
  return (
    <div className="max-w-[1240px] shadow-xl h-[400px]  mx-auto p-3">
      <input
        type="search"
        value={search}
        onChange={changeTheSearch}
        className="w-full border border-black p-4 rounded text-slate-700"
      ></input>
      {movies.length === 0 ? <div className="text-3xl text-center mt-2">Loading ....</div> : <Result movies={movies} />}
    </div>
  );
}
