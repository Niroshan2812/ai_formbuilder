import React from "react";

function FormUI({ jsonForm }) {
  return (
    <div className="border p-5">
      <h2 className="font-bold text-center text-2xl text-sky-700">{jsonForm?.formTitle}</h2>
      <h2 className="text-sm text-gray-400 text-center">{jsonForm?.formSubheading}</h2>

      {jsonForm?.formFields?.length > 0 ? (
        jsonForm.formFields.map((field, index) => (
          <div key={index}>
            <input
              type={field.fieldType}
              placeholder={field.placeholder}
              name={field.fieldName}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        ))
      ) : (
        <p>No form fields available</p>
      )}
    </div>
  );
}

export default FormUI;
