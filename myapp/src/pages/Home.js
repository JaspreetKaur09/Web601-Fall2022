import {Row,Col, Button} from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props){

    const navigate = useNavigate()

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

        </>
        
    );
}