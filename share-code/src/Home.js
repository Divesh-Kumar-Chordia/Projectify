import React from 'react'
import "./Home.css";
import SaveIcon from '@material-ui/icons/Save';
function Home() {
  return (
    <div className="home">

    <textarea className="code_area w-full h-full px-6 py-4 outline-none bg-light-grey font-bold resize-none" placeholder="> type your code here .." contentEditable="true">

    </textarea>
    <button className="save flex absolute top-0 right-0 p-4"><SaveIcon/></button>
    </div>
  )
}

export default Home;

