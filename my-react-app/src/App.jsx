//props
function Profile({name, age}){

  return(
<div>
  <h1>name:{name}</h1>
  <p>Age:{age}</p>
</div>
  );
}



function App() {
  return (
      <div>
        <h1>Profile names</h1>
     
      <Profile 
      name="jane"
      age="21"
      />
       <Profile 
      name="kim"
      age="20"
      />
      <Profile 
      name="Amo"
      age="11"
      />
      <Profile 
      name="JOe"
      age="21"
      />
    
    </div>
  );
}

export default App;