import SetPageTitle from "../../setPageTitle";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Bachelor from "./Bachelor";

export default function Education(){
    SetPageTitle("Education | A.F.M. Noorullah");

    return(
        <div style={{'padding-top':'50px'}}>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <Bachelor/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}