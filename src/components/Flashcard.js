import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Flashcard = ({id, question,answer,title, createdBy}) =>{
      const [flip, setFlip] = useState(false);
    return (
       
        <ReactCardFlip isFlipped={flip} 
            flipDirection="horizontal">
            <div style={{
                width: '300px',
                height: '200px',
                fontFamily: 'poppins',
                background: '#d9d9d9',
                fontSize: '22px',
                color: 'Black',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                {question}
                <br />
                <br />
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: 'white',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip(!flip)}>
                    Answer</button>
            </div>
            <div style={{
                width: '300px',
                height: '200px',
                background: '#d7fbda',
                fontSize: '40px',
                color: 'black',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                   {answer}
                <br />
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#d7fbda',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip(!flip)}>
                    Back</button>
            </div>
        </ReactCardFlip>
      );
}

export default Flashcard;