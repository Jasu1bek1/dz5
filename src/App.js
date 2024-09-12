import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./List";
import UserDetails from "./Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
