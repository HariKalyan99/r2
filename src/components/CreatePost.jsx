import React, { useContext, useRef } from "react";
import { blogStore } from "../store/BlogStore";

const CreatePost = () => {
  const userIdRef = useRef("");
  const titleRef = useRef("");
  const bodyRef = useRef("");
  const reactionsRef = useRef("");
  const viewsRef = useRef("");

  const { sideBarToggle, addPosts } = useContext(blogStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = Number(userIdRef.current.value);
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const reactions = Number(reactionsRef.current.value);
    const views = Number(viewsRef.current.value);

    addPosts({
      userId,
      title,
      body,
      reactions,
      views,
    });
  };

  return (
    <>
      {sideBarToggle === "home" && (
        <form
          className="d-flex justify-content-center align-items-center w-100 flex-column"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="userId">UserId</label>
          <input
            type="number"
            placeholder="enter userId"
            id="userId"
            style={{
              width: "400px",
              height: "3rem",
              borderRadius: "2px",
              border: "1px solid black",
              padding: "1rem",
            }}
            ref={userIdRef}
          />

          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="enter title"
            id="title"
            style={{
              width: "400px",
              height: "3rem",
              borderRadius: "2px",
              border: "1px solid black",
              padding: "1rem",
            }}
            ref={titleRef}
          />

          <label htmlFor="body">Body</label>
          <textarea
            cols={40}
            rows={4}
            placeholder="enter body"
            id="body"
            style={{
              borderRadius: "2px",
              border: "1px solid black",
              padding: "1rem",
            }}
            ref={bodyRef}
          />

          <label htmlFor="reactions">Reactions</label>
          <input
            type="number"
            placeholder="enter reactions"
            id="reactions"
            style={{
              width: "400px",
              height: "3rem",
              borderRadius: "2px",
              border: "1px solid black",
              padding: "1rem",
            }}
            ref={reactionsRef}
          />


          <label htmlFor="views">Views</label>
          <input
            type="number"
            placeholder="how many views should your post have"
            id="views"
            style={{
              width: "400px",
              height: "3rem",
              borderRadius: "2px",
              border: "1px solid black",
              padding: "1rem",
            }}
            ref={viewsRef}
          />

          <button type="submit" className="btn btn-success m-5">
            Create Post
          </button>
        </form>
      )}
    </>
  );
};

export default CreatePost;
