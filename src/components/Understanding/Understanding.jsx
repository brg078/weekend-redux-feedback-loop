import react from "react";
import './Understanding.css';
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from 'react-redux';




function Understanding () {


    const history = useHistory();
    const [score, setScore] = useState(0);
    const dispatch = useDispatch();


    function clickHandler(){
        if (score == 0){
            alert('Please Enter a Score!')
        } else {
        console.log('in clickHandler! UNDERSTANDING', score);
        dispatch({
            type: 'GET_FEEDBACK',
            payload: score
        });
        history.push('/support');
        }
    }




    return (
        <div className="pageinfo" id="understanding">
            {/* <form className="form"> */}
                <h2>How well are you understanding the material?</h2>
                <p>
                    <input type="radio" name="scale" id="1" value="1" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="1">Not At All (1)</label>
                    <input type="radio" name="scale" id="2" value="2" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="2">A Little (2)</label>
                    <input type="radio" name="scale" id="3" value="3" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="3">Some Of It (3)</label>
                    <input type="radio" name="scale" id="4" value="4" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="4">Most Of It (4)</label>
                    <input type="radio" name="scale" id="5" value="5" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="2">Full Comprehension (5)</label>
                </p>
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