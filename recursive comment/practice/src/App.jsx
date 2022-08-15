
import {commentData} from "./data"
import { commentDatas } from "./data2"
import './App.css'
import Folder from './components/Folder'
import Folder2 from "./components/Folder2"

function App() {


  return (
    <div className="App">
      
      <Folder commentData={commentData}/>
      <Folder2 commentDatas={commentDatas}/>
    </div>
  )
}

export default App
