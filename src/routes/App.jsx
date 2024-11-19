import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import BlostStoreProvider from "../store/BlogStore";
import { Outlet } from "react-router-dom";



function App() {
  
  return (
    <BlostStoreProvider>
      <Navigation />
      <div className="d-flex w-100">
        <Sidebar />
        <Outlet />
      </div>
    </BlostStoreProvider>
  );
}

export default App;
