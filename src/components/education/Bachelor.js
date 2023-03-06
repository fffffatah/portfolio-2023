import { Container, ListGroup, Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import Educations from "../../storage/education/data.json";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Grade from "../../storage/downloads/GRADE.pdf";

export default function Bachelor(){
    //MAIN MODAL
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    function handleShow() {
        setShow(true);
    }

    return(
        <div>
            <Card>
                <Card.Header as="h5">Bachelor's</Card.Header>
                    <Card.Body>
                        <Nav.Link href="https://www.aiub.edu" target="_blank">
                            <Card.Title style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}}>{Educations.education[0].institution}</Card.Title>
                        </Nav.Link>
                            <Card.Text>
                                <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                                    {Educations.education[0].degree} ({Educations.education[0].year})<br/>
                                    CGPA: {Educations.education[0].CGPA}<br/><br/>
                                    {Educations.education[0].achievements[0].name}
                                </div>
                            </Card.Text>
                    </Card.Body>
                    <Card.Footer className="card text-right">
                        <Button variant="primary" onClick={() => handleShow()}>Details</Button>
                    </Card.Footer>
            </Card>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Courses (Total Credits: {Educations.education[0].credits})
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
                    <Row xs={1} md={2}>
                        {
                            Educations.education[0].semesters.length?(
                                Educations.education[0].semesters.map((semester)=>{
                                    return(
                                        <Col style={{'padding-top':'15px'}}>
                                            <Card>
                                                <Card.Header as="h5">{semester.session}</Card.Header>
                                                    <Card.Body>
                                                        <ListGroup variant="flush">
                                                        {
                                                            semester.courses.length?(
                                                                semester.courses.map((course)=>{
                                                                    return(
                                                                        <ListGroup.Item>
                                                                            <Nav.Link onClick={() => setOpen(!open)} aria-expanded={open} variant="outline-primary" size="lg">{course.name}</Nav.Link>
                                                                            <Collapse in={open}>
                                                                                <div style={{'padding-left':'15px'}}>
                                                                                   <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                                                                                        {course.description}<br/><br/>
                                                                                        Credit: {course.credt}<br/>
                                                                                        Result: {course.result}
                                                                                   </div>
                                                                                </div>
                                                                            </Collapse>
                                                                        </ListGroup.Item>
                                                                    )
                                                                })
                                                            ):''
                                                        }
                                                        </ListGroup>
                                                    </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            ):''
                        }
                    </Row>
                </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Nav.Link href={Grade} download style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}}>
                        Download Grade Report
                    </Nav.Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}