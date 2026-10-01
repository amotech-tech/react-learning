//props
//usestate
import { useState } from "react";
function App(){
  const[title, setTitle]=useState("");
  const[genre, setGenre]=useState("");
  const[rating, setRating]=useState("");

  function handleAddMovie(){
  console.log(title);
    console.log(genre);
      console.log(rating);
}

  return(
<div>
  <h1> Movie App</h1>
  <input type="text" placeholder="Movie title" value={title} onChange={(e)=>setTitle(e.target.value)}/><br>
  </br>
  <input type="text" placeholder="genre" value={genre} onChange={(e)=>setGenre(e.target.value)}/>
  <br></br>
  <input type="number" placeholder="rating" value={rating} onChange={(e)=>setRating(e.target.value)}/><br></br>
  <button onClick={handleAddMovie}>
    Add movie
  </button>
</div>
  );
}




export default App;
