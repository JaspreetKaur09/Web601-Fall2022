import React, {useState} from "react";
import {Button, Card, Col, Typography} from "antd";

const {Paragraph} = Typography;

export default function MyCard(props){
  const [ellipsis, setEllipsis] = useState(true)
    return(
        <Col className="gutter-row" xs={24} sm={12} xl={6}>
          <div style={{marginBottom:"10px", marginTop:"10px", paddingLeft:"10px", paddingRight:"10px"}}>
        <Card  hoverable name={props.name}>
          <Paragraph ellipsis={ellipsis ?{row:5,expandable:true, symbol:'more'}:false}>
           <strong>
           Name: {props.name} &nbsp;
            {props.username}
            </strong> <br/>
            Email: {props.email}<br/>
            Phone:{props.phone}<br/>
            Website: {props.website}
            </Paragraph>

          <Button type="primary" shape="round" onClick={()=>{setEllipsis(!ellipsis)}}>Read</Button>
      </Card>
      </div>
        </Col>

    )
}