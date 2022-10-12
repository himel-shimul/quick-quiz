import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'

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

    const clickEye = (correctAnswer) =>{
        toast.info(`Answer: ${correctAnswer}`, { autoClose: 1000 })
    }

    return (
        <div className='relative border rounded-xl mx-16 my-6 p-6 cursor-pointer '>
            <div className='py-2 '>
                
                <h1 className='w-5/6 p-3 inline mx-8 text-2xl px-8 font-bold leading-none text-center sm:text-2xl'> {question}</h1>
                <EyeIcon className="h-6 absolute top-3 right-3 text-lime-500 inline float-right" onClick={() => clickEye(correctAnswer)}/>
            </div>
            <div class="grid grid-cols-2 gap-4 w-50">
                {
                    options.map(singleOption => <div className='border-solid rounded-xl border-2 border-lime-500 hover:bg-lime-200 text-base px-4 py-4 font-bold' onClick={() =>handleClick(singleOption)}> <input type="radio" value={(singleOption)} name="quiz" /> {singleOption}</div>)
                }
                </div>
        </div>
    );
};

export default Quiz;