import SetPageTitle from "../../setPageTitle";
import { Card, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Skillsets from "../../storage/skills/data.json"
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default function Skills(){
    SetPageTitle("Skills | A.F.M. Noorullah");
    const [open, setOpen] = useState(false);

    return(
        <div style={{'padding-top':'5px'}}>
            {
                Skillsets.skills.length?(
                    Skillsets.skills.map((skill)=>{
                        return(
                            <div style={{'padding-top':'50px'}}>
                            <Container>
                                <Row xs={1} md={1}>
                                    <Col>
                                        <Card>
                                        <Nav.Link><Card.Header onClick={() => setOpen(!open)} aria-expanded={open} as="h5"><div style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}}><b>{skill.title}</b></div></Card.Header></Nav.Link>
                                            <Collapse in={open}>
                                                <Card.Body>
                                                <Row xs={1} md={4}>
                                                    {
                                                        skill.tools.length?(
                                                            skill.tools.map((tool)=>{
                                                                return(
                                                                    <Col>
                                                                        <Card>
                                                                        <Card.Header as="h5"><div style={{'font-family':'Segoe UI'},{'color':'grey'}}>{tool.name}</div></Card.Header>
                                                                            <Card.Body>
                                                                                <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                                                                                    {tool.description}
                                                                                </div>
                                                                            </Card.Body>
                                                                        </Card>
                                                                    </Col>
                                                                )
                                                            })
                                                        ):""
                                                    }
                                                </Row>
                                                </Card.Body>
                                            </Collapse>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                            </div>
                        )
                    })
                ):""
            }
        </div>
    );
}