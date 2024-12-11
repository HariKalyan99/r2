import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export const blogStore = createContext({
  postList: [],
  sideBarToggle: "home",
  sideBarToggleFn: () => {},
  addPosts: () => {},
  delPosts: () => {},
  editPosts: () => {},
});

function pureReducerFn(currentState, action) {
  let newPostList = currentState;
  switch (action.type) {
    case "INITIAL_POSTS":
      return newPostList = action.payload.data;
    case "ADD_POSTS":
        return newPostList = [action.payload.data, ...currentState];
    case "DEL_POSTS":
        return newPostList = currentState.filter((x) => x.id !== action.payload.id);
    case "EDIT_POSTS":
      currentState.splice(
        currentState.findIndex((x) => x.id === action.payload.prevId),
        1,
        action.payload.data
      );
      return newPostList = [...currentState];

    default:
      return newPostList;
  }
}

const BlostStoreProvider = ({ children }) => {
  const [sideBarToggle, setSidebarToggle] = useState("home");

  //   const [postList, setPostList] = useState([]);

  const [getNewPost, setNewPost] = useState("");
  const [getDelPost, setDelPost] = useState("");
  const [getEditPost, setEditPost] = useState("");
  const naviagate = useNavigate();

  const [postList, dispatchPostReducerFn] = useReducer(pureReducerFn, []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("http://localhost:8082/posts/all", signal);
        dispatchPostReducerFn({
          type: "INITIAL_POSTS",
          payload: {
            data,
          },
        });
        // setPostList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const postBlogs = async (newPost) => {
      try {
        const { data } = await axios.post("http://localhost:8082/posts/post/add", {
          ...newPost
        });
        dispatchPostReducerFn({
          type: "ADD_POSTS",
          payload: {
            data,
          },
        });
        // setPostList([data, ...postList]);
        sideBarToggleFn("dashboard");
        naviagate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    };

    if (getNewPost.title?.length) {
      postBlogs(getNewPost);
    }
  }, [getNewPost]);

  useEffect(() => {
    const deleteBlogs = async (id) => {
      console.log(id)
      try {
        await axios.delete(`http://localhost:8082/posts/post/remove/${id}`);
        // setPostList(postList.filter((x) => x.id !== id));
        dispatchPostReducerFn({
          type: "DEL_POSTS",
          payload: {
            id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (getDelPost > 0) {
      deleteBlogs(getDelPost);
    }
  }, [getDelPost]);

  useEffect(() => {
    const editBlogs = async ({
      userId,
      title,
      body,
      reactions,
      views,
      prevId,
    }) => {
      try {
        const { data } = await axios.put(
          `http://localhost:8082/posts/post/update/${prevId}`,
          {
            userId,
            title,
            body,
            reactions,
            views,
          }
        );
        // postList.splice(
        //   postList.findIndex((x) => x.id === prevId),
        //   1,
        //   data
        // );

        dispatchPostReducerFn({
          type: "EDIT_POSTS",
          payload: {
            data,
            prevId,
          },
        });
        // setPostList([...postList]); ///////////////////////////////////////////////////////
      } catch (error) {
        console.log(error);
      }
    };

    if (getEditPost.title?.length) {
      editBlogs(getEditPost);
    }
  }, [getEditPost]);

  const sideBarToggleFn = (view) => {
    setSidebarToggle(view);
  };

  const addPosts = (post) => {
    setNewPost(post);
  };

  const delPosts = (id) => {
    setDelPost(id);
  };

  const editPosts = (editedPost) => {
    setEditPost(editedPost);
  };

  return (
    <blogStore.Provider
      value={{
        addPosts,
        delPosts,
        editPosts,
        sideBarToggleFn,
        sideBarToggle,
        postList,
      }}
    >
      {children}
    </blogStore.Provider>
  );
};

export default BlostStoreProvider;
