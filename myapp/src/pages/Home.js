import React,{useEffect, useState} from "react";
import {Row,Col, Button, Divider,Typography} from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyCard from "../Components/MyCard";

export default function Home(props){

    const navigate = useNavigate()
    const {Title} = Typography;

    const handleClick =()=>{
        console.log("Something Happened");
        props.logout();
        navigate("/login");
    };

    useEffect(()=>{
        console.log(props.status);
        if(props.status){
          console.log("Authentication successful")
        }
        else{
         navigate("/login");
        }
    },[]);

    const [blogs,setBlogs] =useState(null);
    const [status, setStatus] = useState(false);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
          setBlogs(response.data)
          setStatus(true)
        }).catch(()=>{
          console.log("API call failed...!")
          setStatus(false)
        })
      },[])

    return(
        <>
        <Row>
            <Col xl={24}>
            <h1>Home</h1>
            </Col>
        </Row>
        <Row>
            <Col>
            <Button type="primary" onClick={handleClick}>Logout</Button>
            </Col>
        </Row>
        <div>
        <Row gutter={16} >
          <Col className='gutter-row'>
            USERS'S PROFILE
          </Col>
        </Row>
        <Divider orientation="center">PROFILE</Divider>
        <Row gutter={16} >
          {status && blogs.map((blogObj)=>{
            return <MyCard Key={blogObj.id} name={blogObj.name} username={blogObj.username} email={blogObj.email} phone={blogObj.phone} website={blogObj.website}/>
          })}
        </Row>


    </div>
    

   
    

        </>
        
    );
}