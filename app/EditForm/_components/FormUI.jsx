import React from "react";
import FieldEdit from "./FieldEdit";




function FormUI({ jsonForm,onFieldUpdate ,deleteField}) {



  return (
    <div className="border p-5 md:w-[800px] md:h-[800px] overflow-auto " >
      <h2 className="font-bold text-center text-2xl text-sky-700">
        {jsonForm?.formTitle}
      </h2>
      <h2 className="text-sm text-gray-400 text-center">
        {jsonForm?.formSubheading}
      </h2>

      {jsonForm?.formFields?.length > 0 ? (
        jsonForm.formFields.map((field, index) => (
          <div key={index} className="flex items-center gap-2">
            {field.fieldType === "select" ? (
              <div className="my-3 w-full">
                <label className="text-lg flex gap-4 my-2">{field.label}</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name={field.fieldName}
                >
                  <option disabled selected>
                    {field.placeholder}
                  </option>
                  {field.options?.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : field.fieldType == "radio" ? (
              <div className="my-3 w-full">
                <label className="text-lg flex gap-4 my-2">{field.label}</label>
                {field.options?.map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={field.fieldName}
                      value={item.value}
                      className="radio"
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            ) : field.type == "checkbox" ? (
              <dev className="my-3 w-full">
                <label className="text-xs text-gray-500">{field.label}</label>
                {field?.options ? (
                  field?.options?.map((item, index) => (
                    <div>
                      <checkbox />
                      <h2>{item.label}</h2>
                    </div>
                  ))
                ) : (
                  <div className="flex gap-3">
                    <checkbox />
                    <h2>{field.label}</h2>
                  </div>
                )}
              </dev>
            ) : (
              <div key={index} className="my-3 w-full">
                <label className="text-lg flex gap-2 my-2">{field.label}</label>
                <input
                  type={field.fieldType}
                  placeholder={field.placeholder}
                  name={field.fieldName}
                  className="input input-bordered bg-input  border-collapse w-full max-w-2xl max-h-max"
                />
              </div>
            )}

            <div>
              <FieldEdit defaultValue = {field}
              ontimeupdate={(value)=>onFieldUpdate(value,index)}
              deleteField={()=>deleteField(index)}
              />
            </div>
          </div>
        ))
      ) : (
        <p>No form fields available</p>
      )}
    </div>
  );
}

export default FormUI;
