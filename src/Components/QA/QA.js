import React from 'react';
import './QA.css'

const QA = ({ Question, Answer }) => {
    return (
        <div className='QuestionAnswer'>
            <h3>{Question}</h3>
            <p>{Answer}</p>
        </div>
    );
};

export default QA;