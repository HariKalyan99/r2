import React, { useState } from "react";
import EditPost from "./EditPost";

const PostCard = ({ post, delPosts, editPosts }) => {


    const [showEdit, setShowEdit] = useState(false);
    const displayEdit = () => {
        setShowEdit(!showEdit);
    }

    
  return (
    <div className="col" style={{ height: "800px" }}>
        {showEdit === true ?  <EditPost editPosts={editPosts} displayEdit={displayEdit} post={post}/> : <div className="card shadow-sm h-100 bg-dark" >
        <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
          </svg>{" "}
          {post.views}
        </span>
        <img
          src="https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png"
          alt="blog_pic"
        />
        <div className="card-body d-flex justify-content-between flex-column h-100">
          <span className="card-text text-light fs-3 fw-bold">{post.title}</span>
          <p className="card-text text-light">{post.body.slice(0, 200)}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              {post.tags.map((tag, ind) => (
                <button
                  key={ind}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  {tag}
                </button>
              ))}
            </div>
            <small className="text-light">User ID: {post.userId}</small>
            <small className="text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-hand-thumbs-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>{" "}
              {post.reactions.likes}
            </small>

            <small className="text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-hand-thumbs-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>{" "}
              {post.reactions.dislikes}
            </small>
          </div>

          <button type="button" className="btn btn-warning" onClick={() => displayEdit()}>
            Edit
          </button>
          <button type="button" className="btn btn-danger" onClick={() => delPosts(post.id)}>
            Delete
          </button>
        </div>
      </div>}
      
    </div>
  );
};

export default PostCard;
