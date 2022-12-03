import react from "react";
import './Support.css';
import {useHistory} from 'react-router-dom';




function Support () {


    const history = useHistory();

    function clickHandler(){
        console.log('in clickHandler! SUPPORT');
        history.push('/comments');
    }


    return (
        <div className="pageinfo" id="support">
            {/* <form className="form"> */}
                <h2>How supported do you feel?</h2>
                <button
                    className="nextbutton"
                    onClick={clickHandler}>
                    Next Question
                </button>
            {/* </form> */}

        </div>
    )




}

export default Support;