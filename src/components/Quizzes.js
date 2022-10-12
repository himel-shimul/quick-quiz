import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Quizzes = () => {
    const quizData = useLoaderData().data;
    const {questions, name} = quizData;
    console.log(quizData);
    return (
        <div className='px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <h1 className='text-3xl font-bold leading-none text-center sm:text-4xl text-lime-500 mt-10 mb-10'>{name}</h1>
            <div className='box-border hover:box-content '>
            {
                questions.map(quiz => <Quiz 
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
            </div>
        </div>
    );
};

export default Quizzes;