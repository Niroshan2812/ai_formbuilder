import React from "react";

function FormUI({ jsonForm }) {
  return (
    <div className="border p-5">
      <h2 className="font-bold text-center text-2xl text-sky-700">{jsonForm?.formTitle}</h2>
      <h2 className="text-sm text-gray-400 text-center">{jsonForm?.formSubheading}</h2>
    </div>
  );
}

export default FormUI;
