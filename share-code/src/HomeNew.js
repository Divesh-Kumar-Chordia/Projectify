import axios from 'axios';
import React from 'react'
import {useEffect,useState,useCallback} from 'react';
import { useParams } from 'react-router-dom';
import "./Home.css";







function HomeNew() {
 
    const [users,setData]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8800/:id')
        .then(res=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch(err=>{console.log(err);})
    },[]);
    
return (
    <div className='form home'>
    {
     users.map(users => {
        <textarea
    className="code_area w-full h-full px-6 py-4 outline-none bg-light-grey font-bold resize-none"
        value={users.data}
        />
        })
    }
    </div>
)}

export default HomeNew;