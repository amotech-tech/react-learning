//props
function Profile(props){

  return(
<div>
  <h1>name:{props.name}</h1>
  <p>Age:{props.age}</p>
</div>
  );
}



function App() {
  return (
      <div>
     
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