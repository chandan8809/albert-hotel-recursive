import React from 'react'

const Folder2 = ({commentDatas}) => {
  return (
      <>
    <div>{commentDatas.text}</div>
    <div style={{marginLeft:"20px"}}>
        {commentDatas.comment.map((comm)=><div><Folder2 commentDatas={comm}/></div>)}
    </div>
    </>
    
  )
}

export default Folder2