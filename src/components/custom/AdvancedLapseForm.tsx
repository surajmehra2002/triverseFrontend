"use client";
import { useState } from "react";
import CameraOptions from "./CameraOptions";
import RecurringOptions from "./RecurringOptions";
import FormField from "../FormField";
import { Button } from "@/components/ui/button";

const AdvancedLapseForm = () => {
  const [selectedForm, setSelectedForm] = useState<"One Time" | "Recurring" | "Project">("One Time");

  const renderForm = () => {
    switch (selectedForm) {
      case "One Time":
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Select Start Date" type="date" />
              <FormField label="Select End Date" type="date" />
              <FormField label="Select Start Time" type="time" />
              <FormField label="Select End Time" type="time" />
              <FormField label="Camera" type="select" options={["Cam1", "Cam2", "Cam3"]} />
              <FormField label="Speed" type="select" options={["Slow", "Normal", "Fast"]} />
            </div>
          </>
        );
      case "Recurring":
        return (
          <>
            <RecurringOptions />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Select Start Time" type="time" />
              <FormField label="Select End Time" type="time" />
              <FormField label="Time Lapse Speed" type="select" options={["Slow", "Normal", "Fast"]} />
              <FormField label="Time Lapse Quality" type="select" options={["720p", "1024p", "1440p"]} />
            </div>
          </>
        );
      case "Project":
        return (
          <>
            <CameraOptions />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Select Start Date" type="date" />
              <FormField label="Select End Date" type="date" />
              <FormField label="Select Start Time" type="time" />
              <FormField label="Select End Time" type="time" />
              <FormField label="Time Lapse Speed" type="select" options={["Slow", "Normal", "Fast"]} />
              <FormField label="Time Lapse Quality" type="select" options={["720p", "1024p", "1440p"]} />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-start items-start w-full gap-6 px-4 pt-4">
      <div className="border rounded-lg shadow px-6 py-4 space-y-2 w-full sm:w-60 sticky top-4 bg-white">
        {["One Time", "Recurring", "Project"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedForm(type as typeof selectedForm)}
            className={`w-full border-b py-2 font-medium text-sm hover:bg-gray-100 ${
              selectedForm === type ? "bg-yellow-100" : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="w-full max-w-4xl border rounded-lg p-6 shadow-md bg-white space-y-6">
        {renderForm()}
        <div className="flex justify-center gap-4">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2">
            Submit
          </Button>
          <Button variant="outline" className="border-yellow-400 text-yellow-500 hover:bg-yellow-100 font-semibold px-6 py-2">
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedLapseForm;
