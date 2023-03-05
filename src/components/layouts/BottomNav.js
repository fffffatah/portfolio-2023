import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Github from "../../assets/Github.png";
import Linkedin from "../../assets/Linkedin.png";
import Email from "../../assets/Email.png"
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { NavItem } from "react-bootstrap";


export default function BottomNav(){
    return(
        <footer style={{"position":"relative"},{"padding-top":"60px"}}>
            <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Row xs={1} md={1}>
                    <Col>
                        <Nav.Link style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}} href="https://github.com/fffffatah" target="_blank"><Image src={Github} height="20px" width="20px" fluid/> Github</Nav.Link>
                        <Nav.Link style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}} href="https://linkedin.com/in/afmnoorullah" target="_blank"><Image src={Linkedin} height="20px" width="20px" fluid/> Linkedin</Nav.Link>   
                    </Col>
                </Row>
                <div className="justify-content-end">
                    <NavItem>
                        <Nav.Link style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}} href="mailto: ab.fatahmn@hotmail.com"><Image src={Email} height="25px" width="25px" fluid/> ab.fatahmn@hotmail.com</Nav.Link>
                    </NavItem>
                </div>
            </Container>
            </Navbar>
        </footer>
    );
}