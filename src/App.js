import React from "react";
import MovieList from "./components/movieList";
import Details from "./components/movieDetails";
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
function App() {
  return (
    <div>
<Router>
        {/* <MovieList/> */}
        <Routes>
        <Route path='/movieDetails/:viewId'  element={<Details/>} />
          <Route path="*" element={<Navigate to="/MovieList/"/>} />
          <Route path ='/MovieList' element={<MovieList/>}/>
         
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
