import React from 'react'
import NavBar from './NavBar'
import { useLocation } from 'react-router-dom';

const TestForm = () => {
    const location = useLocation();
    const { questions } = location.state;
    console.log("questions=",questions);

  return (
    <>
    
    <div>
            <h1>Test Form</h1>
         
                <div>
                    {questions?.map((question, index) => (
                        <div key={index}>
                            <p>{question?.Question}</p>
                            {/* Render other question details and options here */}
                        </div>
                    ))}
                </div>
    
        </div>
    </>
  
  )
}

export default TestForm