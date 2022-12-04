import react from "react";
import './Comments.css';
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from 'react-redux';



function Comments () {


    const history = useHistory();
    const [score, setScore] = useState('');
    const dispatch = useDispatch();


    function clickHandler() {
        console.log('in clickHandler! COMMENTS',score);
        dispatch({
            type: 'GET_FEEDBACK',
            payload: score
        });
        history.push('/review');
    }





    return (
        <div className="pageinfo" id="comments">
            {/* <form className="pageinfo" id="comments"> */}
                <h2>Please leave a comment about your experience. (Optional)</h2>
                <p>
                    <input
                        className="commentfield"
                        type="text"
                        placeholder="Enter Comments Here"
                        onChange={(event) => setScore(event.target.value)}>
                        
                    </input>
                    {/* ! NEED TO EDIT WRAPAROUND AND MODIFY TEXT FIELD */}
                </p>
                <p><button
                    className="nextbutton"
                    onClick={clickHandler}>
                    Go To Review
                </button></p>
        </div>
    )




}

export default Comments;