import React from "react";
import { useQuery } from '@apollo/client';

import { FLASHCARD_QUERY } from "../api";
import Flashcard from "./Flashcard";

const FlashcardList = () =>{
      const { data } = useQuery(FLASHCARD_QUERY);
    return(
        <>

        
<div class="grid grid-cols-4 gap-4">
  <div>

  </div>

  <div>

    {/* flip card */}

    


    {/* end */}
  {data && 
        <div className="container mx-auto text-gray-900  font-sans p-2 antialiased">
          <div className="flex flex-wrap -mx-4">
            { 
            (
              data.flashcards.map(({ id, answer, question, title }) => (
                <Flashcard
                  key={id}
                  answer={answer}
                  question={question}
                  title={title}
                />
              ))
            ) 
            }
          </div>
        </div>
        }
  </div>
</div>
        
      </>
    )
    console.log(data)
}

export default FlashcardList;
