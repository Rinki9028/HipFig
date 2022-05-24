import React, { Component } from 'react'
import Pack from './Pack.json';
class Post extends Component {
  render() {
    return (
      <>
      <div className='posts'>
        { Pack.map( post => {
          return(


<div className="row">
  <div className="col-sm-6">
    <div className="card">
    <div key={post.id} className="post">
            <h4>{post.Start_your_Itinerary}</h4>
            <a href="">{post.City}</a>
            <p>{post.Average}</p>
            <p>{post.Leave_by}</p>
            <p>{post.Open_Hours}</p>
            </div>
    </div>
  </div>
</div>

          )
        }) }
      </div>
      </>
    )
  }
}

export default Post

