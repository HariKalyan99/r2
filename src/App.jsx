import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import axios from "axios";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState("home");

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    const fetchPosts = async() => {
      try {
        const {data} = await axios.get("http://localhost:8081/posts", signal);
        setPostList(data); 
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();

    return () => {
      controller.abort();
    }
  }, [])
  
  const sidebarToggleFn = (view) => {
    setSidebarToggle(view);
  }

  return (
    <div>
      <Navigation />
      <div className="d-flex w-100">
        <Sidebar sidebarToggleFn={sidebarToggleFn} sidebarToggle={sidebarToggle} />
        {sidebarToggle === 
        "home" ? <CreatePost /> :
        <Dashboard postList={postList}/>}
      </div>
    </div>
  );
}

export default App;
