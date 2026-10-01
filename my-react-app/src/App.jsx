//props
//usestate
import { useState } from "react";
function Profile({name, age}){
  const[personage, setPersonAge]=useState(age);

  return(
<div>
  <h1>name:{name}</h1>
  <p>Age:{personage}</p>
  <button onClick={()=>setPersonAge(personage+1)}>
    Increase Age</button>
 <button onClick={()=>setPersonAge(personage -1)}>
    decrease Age</button>
</div>
  );
}



function App() {
  return (
      <div>
        <h1>Profile names</h1>
     
      <Profile 
      name="jane"
      age={21}
      />
       <Profile 
      name="kim"
      age={20}
      />
      <Profile 
      name="Amo"
      age={11}
      />
      <Profile 
      name="JOe"
      age= {21}
      />
    
    </div>
  );
}

export default App;
