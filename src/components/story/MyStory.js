import SetPageTitle from "../../setPageTitle";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Stories from "../../storage/mystory/data.json";

export default function MyStory(){
    SetPageTitle("About | A.F.M. Noorullah");
    return(
        <div>
            <Container>
                <Row xs={1} md={2}>
                    {
                        Stories.stories.length?(
                            Stories.stories.map((story)=>{
                                return(
                                    <>
                                        <Col><Image src={story.image} height="500px" width="600px" fluid/></Col>
                                        <Col>
                                            <div style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}}>
                                                <h1 style={{'padding-top':'50px'}}><b>{story.title}</b></h1>
                                            </div>
                                            <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                                                <p style={{'padding-top':'5px'}}><b>{story.story}</b></p>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })
                        ):""
                    }
                </Row>
            </Container>
        </div>
    );
}