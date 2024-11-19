import React, { useRef } from 'react'


const CreatePost = () => {

    const {userIdRef} = useRef("");
    const {titleRef} = useRef("");
    const {bodyRef} = useRef("");
    const {likesRef} = useRef("");
    const {disLikesRef} = useRef("");
    const {tagsRef} = useRef("");



  return (
    <form className='d-flex justify-content-center align-items-center w-100 flex-column'>

        <label htmlFor="userId">Userid</label>
        <input type="text" placeholder='enter userId' id='userId' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}}/>

        <label htmlFor="title">Title</label>
        <input type="text" placeholder='enter title' id='title' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}}/>

        <label htmlFor="body">Body</label>
        <textarea cols={40} rows={4} placeholder='enter body' id='body' style={{borderRadius: '2px', border: "1px solid black", padding: "1rem"}}/>

        
        <label htmlFor="likes">Likes</label>
        <input type="number" placeholder='enter likes' id='likes' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}}/>

        <label htmlFor="dislikes">Dislikes</label>
        <input type="number" placeholder='enter dislikes' id='dislikes' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}}/>
        

        <label htmlFor="tags">Tags</label>
        <input type="text" placeholder='enter # before a tag' id='tags' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}}/>

        <label htmlFor="views">Views</label>
        <input type="number" placeholder='how many views should your post have' id='views' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}}/>
        
    </form>
  )
}

export default CreatePost
