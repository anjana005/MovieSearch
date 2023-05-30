import { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import axios from "axios";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function App() {
  const [movies, setMovies] = useState([1, 2, 3]);
  const [search, setSearch] = useState("");
  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((response) => {
        console.log(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (search === "") {
      getAllMovies()
    } else {
     // getSearchedMovies();
    }
  }, [search]);
  return (
    <div className="max-w-[1240px] shadow-xl h-full mx-auto p-3">
      <input
        type="search"
        className="w-full border border-black p-4 rounded text-slate-400"
      ></input>
      <Result movies={movies} />
    </div>
  );
}
