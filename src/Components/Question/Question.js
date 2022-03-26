import React from 'react';
import'./Question.css'
const Question = () => {
    return (
        <div className='container mt-3'>
            <div className='row g-4'>
                <div className='col-md-6'>
                   <div className='question-container'>
                         <h3>What is the differences between props and state?</h3>
                         <p>Props and state are two main properties of reactJs. Both are used to display data from different Components. But there are some difference both havs.Props is mainly used for transferring data from component to component whereas state is used for holds information about components. Props is not alterable it means that we cannot modify the object after it is created. On the Contarary, state in alterable it means that we can modify the object after it is created</p>
                   </div>
                </div>
                <div className='col-md-6'>
                <div className='question-container'>
                         <h3>How useState works in ReactJs?</h3>
                         <p>There are many types of hook react have,useState is one of them.It is mainly used to change the state of an variable. useState is mainly has two element first one is initial state and other is a function.It is build in function to use it We need to import it from react.We can handle variable or different types of value's state by using useState through clicking on button.</p>
                   </div>

                </div>
            </div>
        </div>
    );
};

export default Question;