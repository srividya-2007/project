import { Routes, Route } from "react-router-dom";
import SignIn from "./signin.jsx";
import SignUp from "./signup.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
