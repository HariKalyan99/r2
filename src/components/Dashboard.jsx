import React, { useContext, useState } from 'react'
import PostCard from './PostCard'
import { blogStore } from '../store/BlogStore'

const Dashboard = () => {
    const {postList, sideBarToggle} = useContext(blogStore)
  return (
   <>
   {sideBarToggle === 
    "dashboard" && <div className="album py-5 bg-body-tertiary">
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"  >
        {postList.map((post, ind) => <PostCard key={ind} post={post} />)}
      </div>
    </div>
  </div>}
   </>
  )
}

export default Dashboard
