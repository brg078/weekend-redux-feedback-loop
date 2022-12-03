import react from "react";
import './Comments.css';
import {useHistory} from 'react-router-dom';




function Comments () {


    const history = useHistory();


    function clickHandler() {
        console.log('in clickHandler! COMMENTS');
        history.push('/');
    }


    return (
        <div className="pageinfo" id="comments">
            {/* <form className="pageinfo" id="comments"> */}
                <h2>Please leave a comment.</h2>
                <button
                    className="nextbutton"
                    onClick={clickHandler}>
                    Submit Feedback
                </button>
            {/* </form> */}

        </div>
    )




}

export default Comments;