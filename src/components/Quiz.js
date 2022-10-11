import React, { useState } from 'react';

const Quiz = ({quiz}) => {
    const {question, correctAnswer, options} = quiz;
    const [correct, setCorrect] = useState();
    // console.log(quiz);
    const clickop = (singleOption) =>{
        console.log(singleOption);
        if(singleOption === correctAnswer){
            alert('right')
        }
        else{
            alert('wrong')
        }
        setCorrect(singleOption)
    }
    return (
        <div>
            <h1>question: {question}</h1>
            <br />
            
            {
                <p>{correct}</p>
            }
            {
              correctAnswer.length === 3 ? <p>3 jon k diba </p> : <p> ok buy</p>
            }
            <br />
            <h1>answer: {correctAnswer}</h1>
            <div class="grid grid-cols-2 gap-4 w-50 border">
                {
                    options.map(singleOption => <div onClick={() =>clickop(singleOption)}>{singleOption}</div>)
                }
                </div>
        </div>
    );
};

export default Quiz;