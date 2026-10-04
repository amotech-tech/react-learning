function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }

  return <h1>Please log in.</h1>;
}

export default App;
