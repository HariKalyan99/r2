import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import {v4 as uuid} from 'uuid';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState("home");

  const [postList, setPostList] = useState([]);


  const [getNewPost, setNewPost] = useState("");
  const [getDelPost, setDelPost] = useState("");
  const [getEditPost, setEditPost] = useState("");

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


  useEffect(() => {
    const postBlogs = async(newPost) => {
      try {
        const {data} = await axios.post("http://localhost:8081/posts", {
          ...newPost, id: uuid()
        });
        setPostList([data, ...postList])
        sidebarToggleFn("dashboard");
      } catch (error) {
        console.log(error);
      }
    }

    if(getNewPost.title?.length){
      postBlogs(getNewPost);
    }
   
  }, [getNewPost])


  useEffect(() => {
    const deleteBlogs = async(id) => {
      try {
        await axios.delete(`http://localhost:8081/posts/${id}`);
        setPostList(postList.filter(x => x.id !== id));
      } catch (error) {
        console.log(error);
      }
    }

    if(getDelPost?.length){
      deleteBlogs(getDelPost);
    }
   
  }, [getDelPost])



  useEffect(() => {
    const editBlogs = async({userId, title, body, reactions, tags, views, prevId}) => {
      try {
        const {data} = await axios.put(`http://localhost:8081/posts/${prevId}`, {
          userId, title, body, reactions, tags, views
        });
        postList.splice(postList.findIndex(x => x.id === prevId), 1, data);
        setPostList([ ...postList]); ///////////////////////////////////////////////////////
      } catch (error) {
        console.log(error);
      }
    }

    if(getEditPost.title?.length){
      editBlogs(getEditPost);
    }
   
  }, [getEditPost])
  
  const sidebarToggleFn = (view) => {
    setSidebarToggle(view);
  }

  const addPosts = (post) => {
    setNewPost(post);
  }

  const delPosts = (id) => {
    setDelPost(id);
  }

  const editPosts = (editedPost) => {
    // setDelPost(id);
    // console.log(editedPost);
    setEditPost(editedPost)
  }

  return (
    <div>
      <Navigation />
      <div className="d-flex w-100">
        <Sidebar sidebarToggleFn={sidebarToggleFn} sidebarToggle={sidebarToggle} />
        {sidebarToggle === 
        "home" ? <CreatePost addPosts={addPosts}/> :
        <Dashboard delPosts={delPosts} editPosts={editPosts} postList={postList}/>}
      </div>
    </div>
  );
}

export default App;
