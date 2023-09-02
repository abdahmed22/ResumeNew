import Nav from "../../Component/Navigation/Navigate"
import{Link} from 'react-router-dom'
import "./Resume.css"
import InformaionTemplate from "./Information"


function Resume()
{
return(
    <div className="Resume">
        <Nav pagetype='resume' />
        <InformaionTemplate/>
    </div>
)
}
export default Resume