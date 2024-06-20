"use client";

import React, { useState } from "react";
import {AiChatSession} from '../../../configs/AiModel'

const PROMPT = "On the basis of description please give form in JSON forma with form title, form subhedding, with form having Form feild, form name, paceholder name , and form lable, fiels type, field required in JSON format ";

async function CreateForm() {
  const [userInput, setUserInput] = useState("");

  const onCreateForm = () => {
    //console.log(userInput)

  };
  const handleClear = ()=> {
    setUserInput("");
    //console.log("Click clear button")
  };


  const handleChanges = (event0)=>{
    setUserInput(event0.target.value);
    //console.log("Text area chahc");
  };


  const result = await AiChatSession.sendMessage("Description: "+ userInput + PROMPT)

  return (
    <div>
      <dev className="ml-7">+ Create New Form</dev>
      <div>
        <label htmlFor="OrderNotes" className="sr-only">
          Create Form
        </label>

        <div
          className=" rounded-lg border border-gray-50 shadow-sm
     focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 flex ml-40 
     mr-40 mt-5"
        >
          <textarea
            id="OrderNotes"
            className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows="4"
            placeholder="Tell some thing about your form "
            value={userInput}
            onChange={handleChanges}
            //onChange={(enent) => setUserInput(enent.target.value)}
          ></textarea>

          <div className="flex items-center justify-end gap-2 bg-white p-3">
            <button
              type="button"
              onClick={handleClear}
              className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700
               hover:text-gray-600"
            >
              Clear
            </button>

            <button
              type="button"
              onClick={() => onCreateForm()}
              className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium
               text-white hover:bg-indigo-700"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
