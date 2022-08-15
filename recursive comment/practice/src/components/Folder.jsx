import React from 'react'

const Folder = ({commentData}) => {
  return (
    <div>
        <span >
            {commentData.text}
            <br />
        </span>
        {console.log(commentData.comments)}
        <div style={{margin:"10px",border:"1px solid"}}>
            {commentData.comments.map(comm=>{
                return <Folder commentData={comm}/>
            })}
        </div>

    </div>
  )
}

export default Folder