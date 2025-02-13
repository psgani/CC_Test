import React from 'react'
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../App.css";
import axios from 'axios';
import Navbar from './Navbar.js';


const Home_page = () =>{
    const[countq, setcountq] = useState('');
    const[counta, setcounta] = useState('');
    const[countb, setcountb] = useState('');
    const[countu, setcountu] = useState('');
    
    const getCount =async(req,res)=>{
        try{
            // const config = {
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   };
        
            const res = await axios.get("https://cc-test-three.vercel.app/api/count/questioncount");
            // console.log(res.data.count);
            setcountq(res.data.count);
        }
        catch (error) {
            console.error('Error submitting question:', error);
          }
    }
    const getCounta =async(req,res)=>{
        try{
            // const config = {
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   };
        
            const res = await axios.get("https://cc-test-three.vercel.app/api/count/answerscount");
            // console.log(res.data.counta);
            setcounta(res.data.counta);
        }
        catch (error) {
            console.error('Error submitting question:', error);
          }
    }
    const getCountb =async(req,res)=>{
        try{
            // const config = {
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   };
        
            const res = await axios.get("https://cc-test-three.vercel.app/api/count/blogscount");
            // console.log(res.data.countb);
            setcountb(res.data.countb);
        }
        catch (error) {
            console.error('Error submitting question:', error);
          }
    }

    const getCountu =async(req,res)=>{
        try{
            // const config = {
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   };
        
            const res = await axios.get("https://cc-test-three.vercel.app/api/count/userscount");
            // console.log(res.data.countu);
            setcountu(res.data.countu);
        }
        catch (error) {
            console.error('Error submitting question:', error);
          }
    }
    useEffect(()=>{
        getCount();
        getCounta();
        getCountb();
        getCountu();
    },[getCount,getCounta,getCountb, getCountu]);
return(
    <>
        <div className="Home_screen">
        <Navbar/>
        <div className="firstpage">
            <div className="text_front">
            <div className="translucent-box">
                  <p>Are you confused in choosing a path for your future??</p>
                  <p>Take Suggestions from experts who have already gone through the difficult times of choosing career!!</p>
              </div>
              <div className="Ask_a_question">
                {localStorage.getItem("token")?<Link to="/ask"><button className="chat-button" ><span>GET STARTED </span></button></Link>:<Link to="/login"><button className="chat-button" ><span>GET STARTED </span></button></Link>}
                
              </div>
              <div className="reports">
                <h3>No.of Users Registered: {countu}</h3>
                <h3>No.of Questions asked: {countq}</h3>
                <h3>No.of Responses recorded: {counta}</h3>
                <h3>No.of Blogs recorded: {countb}</h3>
              </div>
            </div>
        </div>
        
        </div>
    </>
)
}
export default Home_page