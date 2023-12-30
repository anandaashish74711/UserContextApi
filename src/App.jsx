import './App.css';
import UserContextProvider from './context/UsercontextProvider';
import Profile from './component/Profile';
import Login from './component/Login';

function App() {
  return (
    <UserContextProvider>
      <h1>React</h1>
      <Profile />
      <Login />
    </UserContextProvider>
  );
}

export default App;
