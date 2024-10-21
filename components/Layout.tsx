"use client";
import { useState } from "react";
import { Personal } from "./Forms/Personal";
import { Experience } from "./Forms/Experience";
import { Education } from "./Forms/Education";

const Layout = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col gap-8">
      <div className="container w-fit p-4">
        {/* Tabs */}
        <div className="mt-4 flex justify-between flex-auto w-full">
          <button
            onClick={() => setActiveTab("personal")}
            className={`tab-btn ${activeTab === "personal" && "active-tab"}`}
          >
            Personal
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`tab-btn ${activeTab === "experience" && "active-tab"}`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`tab-btn ${activeTab === "education" && "active-tab"}`}
          >
            Education
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content mt-4">
          {activeTab === "personal" && <Personal />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "education" && <Education />}
        </div>
      </div>
      <div id="blank-space" className="m-20 p-24">
        This is the blank space
      </div>
    </div>
  );
};

export default Layout;
