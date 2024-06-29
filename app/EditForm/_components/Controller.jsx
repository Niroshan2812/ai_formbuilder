
import React, { useState } from "react";

function Controller(){

    


  return (
    <div>
      <h2>Select Themes</h2>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <select
          className="select select-secondary w-full max-w-xs"
        

          
        >   
          <option disabled selected>
            Select Prefer theme
          </option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
    </div>
  );
}
export default Controller;
