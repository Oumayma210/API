import './App.css';
// import UserList from './components/UserList';
import Routes from './Router/Routes';

function App() {
  return (
    <div className="App">
      <h1 style={{color:'brown', justifyContent:'center'}}>List of users</h1>
      {/* <UserList/> */}
      <Routes/>
    </div>
  );
}

export default App;
