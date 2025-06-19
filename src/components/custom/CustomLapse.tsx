"use client";

import FormField from "../FormField";
import { Button } from "@/components/ui/button";

export const CustomLapse = () => (
     <div className="flex items-center justify-center w-full h-full p-4">
  <div className="w-full max-w-3xl border rounded-lg p-6 shadow-md bg-white space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <FormField label="Select Start Date" type="date" />
      <FormField label="Select End Date" type="date" />
      <FormField label="Select Camera" type="select" options={["Cam1", "Cam2", "Cam3"]} />
      <FormField label="Select Speed" type="select" options={["Slow", "Normal", "Fast"]} />
    </div>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6">
        Submit
      </Button>
      <Button variant="outline" className="border-yellow-400 text-yellow-500 hover:bg-yellow-100 font-semibold px-6">
        Clear
      </Button>
    </div>
  </div>
  </div>
);
