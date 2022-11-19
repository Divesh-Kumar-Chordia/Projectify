import axios from 'axios';
import React from 'react'
import {useEffect,useState} from 'react';
import "./Home.css";
import { useParams } from 'react-router-dom';






function HomeNew() {
 
    const [users,setData]=useState([]);
    const params =useParams();
    const uniqueCode=params.uniqueCode;
    useEffect(()=>{
        axios.get(`http://localhost:8800/${uniqueCode}`)
        .then(res=>{
            console.log(res.data.data);
            setData(res.data.data);
        })
        .catch(err=>{console.log(err);})
    },[]);
    function changeHandler(props){
        setData(props.target.value);

    }
   
return (
    <div className='form home'>
    

    {
    users &&<textarea
    className="code_area w-full h-full px-6 py-4 outline-none bg-light-grey font-bold resize-none"
    defaultValue={users} onChange={changeHandler}/ >
    
    }
    </div>
)}

export default HomeNew;