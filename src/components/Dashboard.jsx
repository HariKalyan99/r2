import React from 'react'
import PostCard from './PostCard'

const Dashboard = ({postList}) => {
  return (
    <div className="album py-5 bg-body-tertiary">
    <div className="container-fluid">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {postList.map((post, ind) => <PostCard key={ind} post={post}/>)}
      </div>
    </div>
  </div>
  )
}

export default Dashboard
