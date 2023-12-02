import { BrowserRouter, Routes, Route } from "react-router-dom";
// navbar
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import NoPage from "./components/pages/NoPage";
// cvapp
import Cvapp from "./components/pages/Cvapp";
import "./App.css";
// edit and update user
import Edituser from "./components/pages/Edituser";
import Updateuser from "./components/Edituser/Update";
import Createuser from "./components/Edituser/Create";
// termsofuse
import Termsofuse from "./components/pages/Termsofuse";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Termsofuse" element={<Termsofuse />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Cvapp" element={<Cvapp />} exact />
          <Route path="Edituser" element={<Edituser />} exact />
          <Route path="Createuser" element={<Createuser />} exact />
          <Route path="Updateuser/:id" element={<Updateuser />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
