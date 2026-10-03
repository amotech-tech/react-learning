//props
//usestate
import { useState } from "react";
function Movie({  title,genre,rating
}){
  return(
    <div>
      <h2>{title}
      </h2>
      <p>Genre:{genre}
      </p>
      <p>Rating:{rating}/10</p>
    </div>
  );
}
function App(){
  const[movies, setMovies]=useState([
    {title:"inception",genre:"scifi", rating:8},
    {title:"hindu",genre:"bahubar", rating:6},
    {title:"avata",genre:"ava", rating:6}
  ]);

  return(
<div>
  <h1> Movie list</h1>
{movies.map((movie)=>(
  <Movie 
  title={movie.title}
  genre={movie.genre}
    rating={movie.rating}
    />
  ))}
</div>
  );
}




export default App;
