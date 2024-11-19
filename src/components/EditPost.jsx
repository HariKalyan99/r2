import React, { useState } from 'react'

const EditPost = ({displayEdit, post, editPosts}) => {
    const [getUserId, setUserId] = useState(post.userId);
    const [getTitle, setTitle] = useState(post.title);
    const [getBody, setBody] = useState(post.body);
    const [getTags, setTags] = useState(post.tags.join("#"));
    const [getLikes, setLikes] = useState(post.reactions.likes);
    const [getDisLikes, setDisLikes] = useState(post.reactions.dislikes);
    const [getViews, setViews] = useState(post.views);

   
    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = Number(getUserId);
        const title = getTitle;
        const body = getBody;
        const tags = getTags.split("#");
        const likes = getLikes;
        const dislikes = getDisLikes;
        const views = getViews;

        editPosts({userId, title, body, tags, reactions: {likes, dislikes}, views, prevId: post.id});
        displayEdit()
    }

    return (
        <form className='d-flex justify-content-between align-items-center w-100 flex-column h-100' onSubmit={(e) => handleSubmit(e)}>
    
            <label htmlFor="userId">UserId</label>
            <input type="text" placeholder='enter userId' id='userId' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}} value={getUserId} onChange={(e) => setUserId(e.target.value)}/>
    
            <label htmlFor="title">Title</label>
            <input type="text" placeholder='enter title' id='title' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}} value={getTitle} onChange={(e) => setTitle(e.target.value)}/>
    
            <label htmlFor="body">Body</label>
            <textarea cols={40} rows={4} placeholder='enter body' id='body' style={{borderRadius: '2px', border: "1px solid black", padding: "1rem"}} value={getBody} onChange={(e) => setBody(e.target.value)}/>
    
            
            <label htmlFor="likes">Likes</label>
            <input type="number" placeholder='enter likes' id='likes' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}} value={getLikes} onChange={(e) => setLikes(e.target.value)} />
    
            <label htmlFor="dislikes">Dislikes</label>
            <input type="number" placeholder='enter dislikes' id='dislikes' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}} value={getDisLikes} onChange={(e) => setDisLikes(e.target.value)}/>
            
    
            <label htmlFor="tags">Tags</label>
            <input type="text" placeholder='enter # before a tag' id='tags' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}} value={getTags} onChange={(e) => setTags(e.target.value)} />
    
            <label htmlFor="views">Views</label>
            <input type="number" placeholder='how many views should your post have' id='views' style={{width: "400px", height: "3rem", borderRadius: '2px', border: "1px solid black", padding: "1rem"}} value={getViews} onChange={(e) => setViews(e.target.value)}/>
            
            <button type='submit' className='btn btn-success w-100'>Edit Post</button>
            <button type='button' className='btn btn-warning' onClick={() => displayEdit()}>Don't Edit</button>
        </form>
      )
}

export default EditPost
