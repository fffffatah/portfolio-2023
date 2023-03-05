import SetPageTitle from "../../setPageTitle";
import Empty from "../../assets/EmptyImage.png";
import { Image } from "react-bootstrap";

export default function Research(){
    SetPageTitle("Reference(s) | A.F.M. Noorullah");
    return(
        <div>
            <center>
                <div style={{'padding-top':'50px'}}>
                    <Image src={Empty} height="100px" width="200px" fluid></Image>
                </div>
            </center>
        </div>
    );
}