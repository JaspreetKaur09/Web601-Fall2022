import React, {useEffect, useState} from 'react';
import {Row, Col, Divider, Typography} from 'antd';
import axios from "axios";
import MyCard from './Components/MyCard';

const {Title} = Typography;

function App() {
  const [blogs,setBlogs] =useState(null);
  const [status, setStatus] = useState(false);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/').then((response)=>{
      setBlogs(response.data)
      setStatus(true)
    }).catch(()=>{
      console.log("API call failed...!")
      setStatus(false)
    })
  },[])
  
  return (
    <div>
        <Row gutter={16} >
          <Col className='gutter-row'>
            USERS'S PROFILE
          </Col>
        </Row>
        <Divider orientation="center">PROFILE</Divider>
        <Row gutter={16} >
          {status && blogs.map((blogObj)=>{
            return <MyCard Key={blogObj.id} title={blogObj.title} content={blogObj.body}/>
          })}
        </Row>


    </div>
    

   
    
   
  );
}

export default App;
