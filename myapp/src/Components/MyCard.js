import {Card, Col} from "antd";

export default function MyCard(props){
    return(
        <Col className="gutter-row" xs={24} xl={8}>
        <Card title={props.title} style={{ width: 300 }}>
        <p>{props.content}</p>
      </Card>
        </Col>

    )
}