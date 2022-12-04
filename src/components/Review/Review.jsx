import './Review.css';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function Review(){

    const feedback = useSelector(store => store.feedbackReducer);
    const history = useHistory();
    const dispatch = useDispatch();




    function dataToServer(){
        console.log('in dataToServer!',feedback);
        axios({
            method: 'POST',
            url: `/feedback`,
            data: feedback
            })
            .then((response) => { 
                dispatch({
                    type: 'DELETE_FEEDBACK'
                });
                alert('Thanks for your submission!')
                
                history.push('/');
            })
            .catch((error) => {
            console.log('error on POST: ', error)
        })


    }

    return(
        <div>
            <h4>All ratings are on a scale of 1 to 5, with 5 being the best.</h4>
            <p>-</p>
            <h4>How are you Feeling?: ( 1 - 5 )</h4>
            <p>{feedback[0]}</p>
            <h4>How well are you understanding the material? ( 1 - 5 ):</h4>
            <p>{feedback[1]}</p>
            <h4>How are you Feeling? ( 1 - 5 ):</h4>
            <p>{feedback[2]}</p>
            <h4>Comments (Optional):</h4>
            <p>{feedback[3]}</p>
            <p><button
                className="nextbutton"
                onClick={dataToServer}>
                Submit Feedback
            </button></p>
        </div>
    )










}

export default Review;