"use client";

import React, { useState, useEffect } from "react";
import JobDetails from "./JobDetails";
import { getJobs } from "@/lib/api";
import SearchBar from "./SearchBar";

interface JobCategory {
  id: number;
  name: string;
}

interface SidebarProps {
  jobsCategory: JobCategory[];
}

const Sidebar = ({ jobsCategory }: SidebarProps) => {
  const [selectedCatId, setSelectedCatId] = useState<number | null>(null);
  const [allJobs, setAllJobs] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCat, setActiveCat] = useState("All positions");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true); // Start loading
      try {
        const result = await getJobs(selectedCatId || undefined);
        setAllJobs(result.data || []);
      } catch (error) {
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchJobs();
  }, [selectedCatId]);

  // Filter by search input
  const filteredJobs = allJobs?.filter((job: any) =>
    job?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const buttonStyle = (isActive: boolean) =>
    `py-4 text-start px-6 rounded-lg rounded-l-none transition-all duration-150 hover:bg-white hover:text-primary hover:border-l-[6px] hover:border-l-secondary ${
      isActive ? "bg-white text-primary border-l-[6px] border-l-secondary" : ""
    }`;

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Sidebar */}
      <div className="w-full lg:w-[288px]">
        <aside className="lg:sticky top-2">
          <div className="flex flex-col gap-2">
            <div className="mb-2">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </div>

            {/* All Jobs */}
            <button
              onClick={() => {
                setSelectedCatId(null);
                setActiveCat("All positions");
              }}
              className={buttonStyle(activeCat === "All positions")}
            >
              All Jobs
            </button>

            {/* Category Buttons */}
            {jobsCategory?.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCatId(item.id);
                  setActiveCat(item.name);
                }}
                className={buttonStyle(activeCat === item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <p className="text-base mt-10">
            We are always seeking talented people. In case you cannot find your
            desired position here, please send us your LinkedIn profile and give
            us your contact information. We will be in touch.
          </p>
        </aside>
      </div>

      {loading ? (
        <div className="w-full">
          <p className="text-center text-[18px] md:text-[24px] px-2 text-white flex items-center justify-center gap-1">
            Loading jobs
            <span className="space-x-1 mx-1">
            <span className="wave-dot">.</span>
            <span className="wave-dot delay-1">.</span>
            <span className="wave-dot delay-2">.</span>
            </span>
          </p>
        </div>
      ) : filteredJobs.length > 0 ? (
        <div className="flex flex-col gap-10 w-full">
          {filteredJobs?.map((item: any, key: number) => (
            <JobDetails key={key} positions={item} />
          ))}
        </div>
      ) : (
        <div className="w-full">
          <p className="text-center text-[18px] md:text-[24px] px-2 text-white">
            No jobs found
            {searchTerm
              ? ` matching “${searchTerm}”`
              : selectedCatId
              ? " in this category."
              : "."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
