import react from "react";
import './Takesurvey.css';
import {useHistory} from 'react-router-dom';




function Takesurvey () {

    const history = useHistory();

    function clickHandler() {
        console.log('in clickHandler! TAKE SURVEY')
        history.push('/feeling');
    }


    return (
        <div className="pageinfo" id="takesurvey" >
            {/* <form className="form"> */}
                <h2>Take Survey</h2>
                <button
                    className="nextbutton"
                    onClick={clickHandler}>
                    Start Survey
                </button>
            {/* </form> */}

        </div>
    )




}

export default Takesurvey;