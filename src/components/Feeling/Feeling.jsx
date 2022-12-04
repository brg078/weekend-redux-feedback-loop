import react from "react";
import './Feeling.css';
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from 'react-redux';



function Feeling () {


    const history = useHistory();
    const [score, setScore] = useState(0);
    const dispatch = useDispatch();


    function clickHandler(){
        if (score == 0){
            alert('Please Enter a Score!')
        } else {
        console.log('in clickHandler! FEELING', score);
        dispatch({
            type: 'GET_FEEDBACK',
            payload: score
        });
        history.push('/understanding');
        }
    }



    return (
        <div className="pageinfo" id="feeling">
            {/* <form className="form"> */}
                <h2>How are you Feeling?</h2>
                {/* <table className="scaletable"> */}
                <p>
                    <input type="radio" name="scale" id="1" value="1" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="1">Very Bad (1)</label>
                    <input type="radio" name="scale" id="2" value="2" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="2">Bad (2)</label>
                    <input type="radio" name="scale" id="3" value="3" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="3">Just Okay (3)</label>
                    <input type="radio" name="scale" id="4" value="4" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="4">Good (4)</label>
                    <input type="radio" name="scale" id="5" value="5" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="5">Great (5)</label>
                </p>



                {/* </table> */}
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