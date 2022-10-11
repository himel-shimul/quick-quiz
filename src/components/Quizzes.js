import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Quizzes = () => {
    const quizData = useLoaderData().data;
    const {questions} = quizData;
    // console.log(quizData);
    return (
        <div>
            {
                questions.map(quiz => <Quiz 
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizzes;