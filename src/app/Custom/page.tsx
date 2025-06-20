"use client";
import React, { useState } from "react";
import TabsHeader from "@/components/custom/TabsHeader";
import DefaultLapse from "@/components/custom/DefaultLapse";
import { CustomLapse } from "@/components/custom/CustomLapse";
import AdvancedLapse from "@/components/custom/AdvancedLapseForm"; // if created

const Custom = () => {
  const [activeTab, setActiveTab] = useState<"default" | "custom" | "advanced">("default");

  return (
    <div className="h-full flex flex-col pt-[53px] overflow-hidden">
      <TabsHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">
        {activeTab === "default" && <DefaultLapse />}
        {activeTab === "custom" && <CustomLapse />}
        {activeTab === "advanced" && <AdvancedLapse />}
      </div>
    </div>
  );
};

export default Custom;
