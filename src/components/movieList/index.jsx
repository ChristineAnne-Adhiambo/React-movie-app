import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageContainer from "../../atoms";
import { getMovies } from "../../utilities/utilities";
import Search from "../SearchBar";
import './style.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ searchPerfomed,setSearchPerformed] = useState(false);
  const [error, setError] = useState(null);


useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        setLoading(false);
        setError("Failed to fetch movies.");
      }
    };
    fetchMovies();
  }, []);

  const handleSearchFunction = async (searchValue) => {
    if (!searchValue.trim()) {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData.results);
        setError(null);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        setError("Failed to fetch movies.");
      }
    } else {
      try {
        const response = await fetch(
          `${BASE_URL}/3/search/movie?query=${searchValue}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Search failed.");
        }
        const result = await response.json();
        setMovies(result.results);
        setError(null);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        setError("Failed to fetch movies.");
      }
    }
    setSearchPerformed(true);
  };










if (loading) {
    return <h1>Loading....</h1>;
  }
return (
    <div >
        <Search onSearch={handleSearchFunction}/>
     
      {error && <p>{error}</p>}
      <div className="container">
        {handleSearchFunction && movies.length === 0 ? (
          <p>No search results found</p>
        ) : (
          movies.map((item) => (
            <Link to={`/MovieDetails/${item.id}`} key={item.id}>
              <ImageContainer props={item} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default MovieList;







