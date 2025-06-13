"use client";

import React, { useState } from "react";
import {
  IconShare3,
  IconMoodSmile,
  IconPencil,
  IconVideo,
  IconStar,
  IconMask,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Props and Component for FormField
type FormFieldProps = {
  label: string;
  type: "date" | "time" | "select";
  options?: string[];
};

const FormField: React.FC<FormFieldProps> = ({ label, type, options }) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      {type === "date" || type === "time" ? (
        <Input type={type} />
      ) : type === "select" && options ? (
        <Select>
          <SelectTrigger>
            <SelectValue placeholder={`Select ${label}`} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : null}
    </div>
  );
};

const Custom: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"default" | "custom" | "advanced">("default");
  const [selectedForm, setSelectedForm] = useState<"One Time" | "Recurring" | "Project">("One Time");

  return (
    <div className="h-full flex flex-col pt-[53px] overflow-hidden">
      {/* Tabs Header */}
      <div className="flex w-full">
        {[
          { label: "Default Time Lapse", value: "default" },
          { label: "Custom Time Lapse", value: "custom" },
          { label: "Advanced Time Lapse", value: "advanced" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value as typeof activeTab)}
            className={`w-1/3 py-3 text-sm font-semibold border-r border-yellow-500 last:border-r-0 transition-colors ${
              activeTab === tab.value
                ? "bg-yellow-500 text-black"
                : "bg-yellow-200 text-gray-600 hover:bg-yellow-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === "default" && (
          <div className="flex h-full">
            {/* Sidebar Icons */}
            <aside className="w-14 sm:w-16 flex-shrink-0 flex flex-col items-center py-4 gap-3 border-r border-gray-200 bg-white">
              {[IconMoodSmile, IconPencil, IconVideo, IconStar, IconMask].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </aside>

            {/* Video Preview */}
            <div className="relative w-full h-full">
              <video
                controls
                className="w-full h-full object-cover"
                src="/Images/video.mp4"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-fuchsia-400 flex items-center justify-center text-white cursor-pointer shadow-lg">
                  <IconShare3 size={20} />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "custom" && (
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
        )}

        {activeTab === "advanced" && (
          <div className="flex flex-col sm:flex-row justify-start items-start w-full gap-6 px-4 pt-4">
            {/* Sub-tabs */}
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

            <div className="w-full max-w-4xl">
              {selectedForm === "One Time" && (
                <div className="border rounded-lg p-6 shadow-md bg-white space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="Select Start Date" type="date" />
                    <FormField label="Select End Date" type="date" />
                    <FormField label="Select Start Time" type="time" />
                    <FormField label="Select End Time" type="time" />
                    <FormField label="Camera" type="select" options={["Cam1", "Cam2", "Cam3"]} />
                    <FormField label="Speed" type="select" options={["Slow", "Normal", "Fast"]} />
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2">
                      Submit
                    </Button>
                    <Button variant="outline" className="border-yellow-400 text-yellow-500 hover:bg-yellow-100 font-semibold px-6 py-2">
                      Clear
                    </Button>
                  </div>
                </div>
              )}

              {selectedForm === "Recurring" && (
                <div className="border rounded-lg p-6 shadow-md bg-white space-y-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Frequency</Label>
                    <RadioGroup defaultValue="daily" className="flex gap-4">
                      {["daily", "weekly", "monthly"].map((freq) => (
                        <div key={freq} className="flex items-center space-x-2">
                          <RadioGroupItem value={freq} id={freq} />
                          <Label htmlFor={freq} className="capitalize">{freq}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="Select Start Time" type="time" />
                    <FormField label="Select End Time" type="time" />
                    <FormField label="Time Lapse Speed" type="select" options={["Slow", "Normal", "Fast"]} />
                    <FormField label="Time Lapse Quality" type="select" options={["720p", "1024p", "1440p"]} />
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2">
                      Submit
                    </Button>
                    <Button variant="outline" className="border-yellow-400 text-yellow-500 hover:bg-yellow-100 font-semibold px-6 py-2">
                      Clear
                    </Button>
                  </div>
                </div>
              )}

              {selectedForm === "Project" && (
                <div className="border rounded-lg p-6 shadow-md bg-white space-y-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Camera Options</Label>
                    <RadioGroup defaultValue="Cam 1" className="flex flex-wrap gap-4">
                      {["Cam 1", "Cam 2", "Cam 3", "Cam 4"].map((cam) => (
                        <div key={cam} className="flex items-center space-x-2">
                          <RadioGroupItem value={cam} id={cam} />
                          <Label htmlFor={cam}>{cam}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="Select Start Date" type="date" />
                    <FormField label="Select End Date" type="date" />
                    <FormField label="Select Start Time" type="time" />
                    <FormField label="Select End Time" type="time" />
                    <FormField label="Time Lapse Speed" type="select" options={["Slow", "Normal", "Fast"]} />
                    <FormField label="Time Lapse Quality" type="select" options={["720p", "1024p", "1440p"]} />
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2">
                      Submit
                    </Button>
                    <Button variant="outline" className="border-yellow-400 text-yellow-500 hover:bg-yellow-100 font-semibold px-6 py-2">
                      Clear
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Custom;
