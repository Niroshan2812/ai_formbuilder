import React from "react";

function FormUI({ jsonForm }) {
  return (
    <div className="border p-5 md:w-[600px]">
      <h2 className="font-bold text-center text-2xl text-sky-700">{jsonForm?.formTitle}</h2>
      <h2 className="text-sm text-gray-400 text-center">{jsonForm?.formSubheading}</h2>

      {jsonForm?.formFields?.length > 0 ? (
        jsonForm.formFields.map((field, index) => (
          <div key={index}>
            {field.fieldType === 'select' ? (
              <div className="my-5">
                <label className="text-lg flex gap-4 my-2">{field.label}</label>
                <select className="select select-bordered w-full max-w-xs" name={field.fieldName}>
                  <option disabled selected>{field.placeholder}</option>
                  {field.options?.map((item, idx) => (
                    <option key={idx} value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>
            ) : (
              <div key={index} className="my-5">
                <label className="text-lg flex gap-4 my-2">{field.label}</label>
                <input
                  type={field.fieldType}
                  placeholder={field.placeholder}
                  name={field.fieldName}
                  className="input input-bordered border-black bg-input border-collapse w-full max-w-2xl max-h-max"
                />
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No form fields available</p>
      )}
    </div>
  );
}

export default FormUI;
