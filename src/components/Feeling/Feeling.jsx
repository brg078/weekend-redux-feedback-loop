import react from "react";
import './Feeling.css';
import {useHistory} from 'react-router-dom';




function Feeling () {


    const history = useHistory();


    function clickHandler(){
        console.log('in clickHandler! FEELING');
        history.push('/understanding');
    }


    return (
        <div className="pageinfo" id="feeling">
            {/* <form className="form"> */}
                <h2>How are you Feeling?</h2>
                <button
                    className="nextbutton"
                    onClick={clickHandler}>

                    Next Question
                </button>
            {/* </form> */}

        </div>
    )




}

export default Feeling;