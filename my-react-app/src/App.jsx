function Login() {
  return <h2>Login Page</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;