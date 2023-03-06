import SetPageTitle from "../../setPageTitle";
import { Card, Nav, Container, Row, Col } from "react-bootstrap";
import Exps from "../../storage/experience/data.json";
import { Image } from "react-bootstrap";

export default function Experience(){
    SetPageTitle("Experience | A.F.M. Noorullah");
    return(
        <>
            <div style={{'padding-top':'50px'}}>
                <Container>
                    <Row xs={1} md={2}>
                        {
                            Exps.experience.length?(
                                Exps.experience.map((experience)=>{
                                    return(
                                        <Col style={{'padding-top':'15px'}}>
                                            <Card>
                                                <Card.Header as="h5">{experience.designation}</Card.Header>
                                                <Card.Body>
                                                    <Nav.Link href={experience.url} target="_blank">
                                                <Card.Title style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}}><Image src={experience.logo} height="25px" width="25px" fluid/>{experience.organization}</Card.Title>
                                                <div style={{'font-family':'Segoe UI'},{'color':'grey'},{'font-style':'italic'}}>
                                                    {experience.duration}
                                                </div><br/>
                                                </Nav.Link>
                                                <Card.Text>
                                                    <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                                                        {experience.details}
                                                    </div>
                                                </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            ):''
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
}