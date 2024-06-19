import React from "react";
import CreateForm from "./_components/CreateForm";

function Dashboard() {
  return (
    <dev className="p-10">
      <dev className="flex justify-between ">
        <h2 className="font-bold text-2xl	">The main context</h2>
      </dev>

      <dev className="mt-10 ml-3 mr-4 ">
        <CreateForm />
      </dev>
    </dev>
  );
}

export default Dashboard;
