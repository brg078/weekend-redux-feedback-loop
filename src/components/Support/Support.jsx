import react from "react";
import './Support.css';
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from 'react-redux';




function Support () {


    const history = useHistory();
    const [score, setScore] = useState(0);
    const dispatch = useDispatch();


    function clickHandler(){
        if (score == 0){
            alert('Please Enter a Score!')
        } else {
        console.log('in clickHandler! SUPPORT',score);
        dispatch({
            type: 'GET_FEEDBACK',
            payload: score
        });
        history.push('/comments');
        }
    }


    return (
        <div className="pageinfo" id="support">
            {/* <form className="form"> */}
                <h2>How supported do you feel?</h2>
                <p>
                    <input type="radio" name="scale" id="1" value="1" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="1">Unsupported (1)</label>
                    <input type="radio" name="scale" id="2" value="2" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="2">A Little Support (2)</label>
                    <input type="radio" name="scale" id="3" value="3" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="3">Some Support (3)</label>
                    <input type="radio" name="scale" id="4" value="4" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="4">Quite Supported (4)</label>
                    <input type="radio" name="scale" id="5" value="5" onChange={(event) => setScore(event.target.value)}></input>
                    <label for="5">Fully Supported (5)</label>
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

export default Support;