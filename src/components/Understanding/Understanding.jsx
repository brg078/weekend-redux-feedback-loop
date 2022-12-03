import react from "react";
import './Understanding.css';
import {useHistory} from 'react-router-dom';




function Understanding () {


    const history = useHistory();


    function clickHandler(){
        console.log('in clickHandler! UNDERSTANDING');
        history.push('/support');
    }


    return (
        <div className="pageinfo" id="understanding">
            {/* <form className="form"> */}
                <h2>How well are you understanding the material?</h2>
                <button
                    className="nextbutton"
                    onClick={clickHandler}>
                    Next Question
                </button>
            {/* </form> */}

        </div>
    )




}

export default Understanding;