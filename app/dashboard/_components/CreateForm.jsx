"use client";

import React, { useState } from "react";
import { AiChatSession } from '../../../configs/AiModel'

const PROMPT = "Based on the following description, generate a form in JSON format. The JSON should include:\n\
- formTitle: The title of the form\n\
- formSubheading: The subheading of the form\n\
- formFields: An array of form fields, where each field has:\n\
  - fieldName: The name of the field\n\
  - placeholder: The placeholder text for the field\n\
  - label: The label for the field\n\
  - fieldType: The type of the field (e.g., text, number, email)\n\
  - required: A boolean indicating if the field is required\n\n\
The response should be in JSON format only. Do not ask for additional information. Use the provided description to generate the form.\n\n\
Description: ";

function CreateForm() {
  const [userInput, setUserInput] = useState("");

  const onCreateForm = async () => {
    console.log(userInput);

    const result = await AiChatSession.sendMessage("Description:"+userInput+PROMPT);
    console.log(result.response.text());
  };

  const handleClear = () => {
    setUserInput("");
    //console.log("Click clear button")
  };

  const handleChanges = (event) => {
    setUserInput(event.target.value);
    //console.log("Text area change");
  };

  return (
    <div>
      <div className="ml-7">+ Create New Form</div>
      <div>
        <label htmlFor="OrderNotes" className="sr-only">
          Create Form
        </label>

        <div
          className="rounded-lg border border-gray-50 shadow-sm
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
              onClick={onCreateForm}
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
