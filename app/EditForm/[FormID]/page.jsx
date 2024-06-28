"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../configs/index";
import { FsonFoms } from "../../../configs/schema";
import { and, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import FormUI from '../_components/FormUI'
import { index } from "drizzle-orm/mysql-core";
import { Toaster, toast } from 'sonner';


function EditForm({ params }) {
  //for get an user -> createdBy value
  const { user } = useUser();
  //store details
  const [jsonForm, setjsonForm] = useState([]);

  //get back to previous window 
  const router = useRouter();

  //Edit Form Update
  const [updateTigger,setUpdateTrigger] = useState();
  
  //store jsonformID
  const[record,setRecord] = useState();

  //to get form id and get an idea what tyoe of style need to add

  useEffect(() => {
    user && GetFormData();
  }, [user]);

  const GetFormData = async () => {
    try {
      const result = await db
        .select()
        .from(FsonFoms)
        .where(
          and(
            eq(FsonFoms.id, params?.FormID),
            eq(FsonFoms.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );

      if (result.length > 0) {
        const rawData = result[0].jsonform;

        // Cleane Json String
        const clenedData = rawData.replace(/```json|```/g, "").trim();
        console.log("Cleaned JSON:", clenedData);
        setRecord(result[0]);
        setjsonForm(JSON.parse(clenedData));
      } else {
        console.error("No data found");
      }
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  useEffect(()=>{
    if(updateTigger){
      setjsonForm(jsonForm);
     
      updateJSONForminDB();
    }
   
  },[updateTigger])
    // for update edit field valiue and place holder value 
    const onFieldUpdate=(value, index) =>{
    
     jsonForm.formFields[index].label = value.label;
     jsonForm.formFields[index].placeholder = value.placeholder;
      setUpdateTrigger(Date.now())
    }

    const updateJSONForminDB = async()=>{
      const result = await db.update(FsonFoms)
      .set({
        
        jsonform:jsonForm
      }).where(and(eq(FsonFoms.id,record.id ),
      eq(FsonFoms.createdBy,user?.primaryEmailAddress.emailAddress)));
      //console.log('RESULT IS :     - ',result);
    }
// for delete data from db
const deleteField=(indexToRemove)=>{
  const result = jsonForm.formFields.filter((item,index)=>index != indexToRemove);
  jsonForm.formFields=result;
  setUpdateTrigger(Date.now());
}

  return (
    <dev className="p-10">
<h2 className="flex gap-2 items-center my-5 cursor-pointer hover:font-bold"
onClick={()=> router.back()}
>
<ArrowLeft/> Back
</h2>

      <dev className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <dev className="p-5 border rounded-lg shadow-md">
            Controller
            
        </dev>
        <dev className="md:col-span-2 border rounded-lg p-5 h-screen flex items-center justify-center">
            <FormUI jsonForm = {jsonForm}
            onFieldUpdate={onFieldUpdate}
            deleteField ={(index)=> deleteField(index)}
            />
            
        </dev>
      </dev>
    </dev>
  );
}

export default EditForm;
