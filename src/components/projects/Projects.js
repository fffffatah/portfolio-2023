import SetPageTitle from "../../setPageTitle";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import MyProjects from "../../storage/projects/data.json"

export default function Projects(){
    SetPageTitle("Projects | A.F.M. Noorullah");
    const [open, setOpen] = useState(false);
    return(
        <div style={{'padding-top':'30px'}}>
            <Container>
                <Row xs={1} md={2}>
                    {
                        MyProjects.projects.length?(
                            MyProjects.projects.map((project)=>{
                                return(
                                        <Col>
                                        <div style={{'padding-top':'20px'}}>
                                            <Card>
                                                <Nav.Link><Card.Header onClick={() => setOpen(!open)} aria-expanded={open} as="h5"><div style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}}><b>{project.title}</b></div></Card.Header></Nav.Link>
                                                <Collapse in={open}>
                                                    <Card.Body>
                                                        <Card.Text style={{'padding-left':'15px'}}>
                                                            <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                                                                {project.description}
                                                            </div>
                                                        </Card.Text>
                                                        <Card.Footer className="card text-right"><Button variant="primary" href={project.source} target="_blank">Source Code</Button></Card.Footer>
                                                    </Card.Body>
                                                </Collapse>
                                            </Card>
                                        </div>
                                        </Col>
                                )
                            })
                        ):""
                    }
                </Row>
            </Container>
        </div>
    );
}