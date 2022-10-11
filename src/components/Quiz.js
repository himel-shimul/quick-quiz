import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Quiz = ({quiz}) => {
    const {question, correctAnswer, options} = quiz;
    const [correct, setCorrect] = useState();
    // console.log(quiz);
    const handleClick = (singleOption) =>{
        console.log(singleOption);
        if(singleOption === correctAnswer){
            toast.info('Correct!', { autoClose: 1000 })
        }
        else{
            toast.warning('Wrong! Try Again', { autoClose: 1000 })
        }
        setCorrect(singleOption)
    }
    return (
        <div>
            <h1>question: {question}</h1>
            <br />
            <br />
            <h1>answer: {correctAnswer}</h1>
            <div class="grid grid-cols-2 gap-4 w-50 border">
                {
                    options.map(singleOption => <div onClick={() =>handleClick(singleOption)}> <input type="radio" value={(singleOption)} name="quiz" /> {singleOption}</div>)
                }
                </div>
        </div>
    );
};

export default Quiz;