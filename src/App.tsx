import { Outlet } from "react-router";
import Navbar from "./components/ui/layouts/Navbar";

const App = () => {
  return (
    <div className="container mx-auto  ">
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default App;