"use client";

import { JobsData } from "@/types";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

const JobDetails = ({ positions }: JobsData ) => {
  const t = useTranslations("JobsPage.JobDetails");

  const [showMore, setShowMore] = useState(false);
  const [height, setHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  // ✅ Locale-aware fields
  const title = positions?.title;
  const jobDescription = positions?.job_description;
  const qualifications = positions?.qualifications;
  const responsibility = positions?.responsibility;

  // ✅ Sanitize HTML
  const cleanHtml1 = DOMPurify.sanitize(jobDescription || "");
  const cleanHtml2 = DOMPurify.sanitize(qualifications || "");
  const cleanHtml3 = DOMPurify.sanitize(responsibility || "");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMore && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [showMore]);

  if (isLoading) {
    return (
      <div className="py-6 px-8 rounded-lg border text-center bg-gradient-to-r from-primary to-[#590997] text-white">
        <p className="text-center text-[18px] md:text-[24px] px-2 text-white">
          {t("loadingDetails")}
          <span className="space-x-1 mx-1">
            <span className="wave-dot">.</span>
            <span className="wave-dot delay-1">.</span>
            <span className="wave-dot delay-2">.</span>
          </span>
        </p>
      </div>
    );
  }

  // ✅ Locale-aware short description
  const plainTextDescription = jobDescription?.replace(/<[^>]+>/g, "") || "";
  const shortDescription =
    plainTextDescription.slice(0, 150) +
    (plainTextDescription.length > 150 ? "..." : "");

  return (
    <div className="py-6 px-8 rounded-lg border bg-gradient-to-r from-primary to-[#590997] flex flex-col gap-6 relative transition-all duration-150">
      {/* Title */}
      <h1 className="text-[28px] capitalize font-medium">{title}</h1>

      {/* Employment Status */}
      <div className="flex items-center gap-4">
        {positions?.employment_status
          ?.split(",")
          ?.map((status: string, index: number) => (
            <div
              key={index}
              className="bg-white border border-secondary rounded-full text-primary py-[2px] px-3"
            >
              {status.trim()}
            </div>
          ))}
      </div>

      {/* Truncated Description */}
      {jobDescription && !showMore && (
        <p className="text-white">{shortDescription}</p>
      )}

      {/* Expanded Section */}
      <div
        style={{ maxHeight: `${height}px` }}
        className="transition-all duration-300 overflow-hidden"
      >
        <div ref={contentRef} className="text-[#eeeeee] flex flex-col pt-4">
          {jobDescription && (
            <div className="border-b py-4 space-y-3">
              <h2 className="font-semibold text-xl text-secondary">
                {t("jobDescription")}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: cleanHtml1 }} />
            </div>
          )}
          {qualifications && (
            <div className="border-b py-4 space-y-3">
              <h2 className="font-semibold text-xl text-secondary">
                {t("qualifications")}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: cleanHtml2 }} />
            </div>
          )}
          {responsibility && (
            <div className="py-4 space-y-3">
              <h2 className="font-semibold text-xl text-secondary">
                {t("responsibilities")}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: cleanHtml3 }} />
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="place-self-end flex items-center gap-2">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-fit px-4 md:px-7 bg-transparent border border-secondary rounded-xl py-3 mt-2 transition-all duration-150 hover:bg-white/10"
        >
          {showMore ? t("showLess") : t("showMore")}
        </button>
        <Link href={"#applyForm"} className="main-button px-4 md:px-7 py-4 w-fit">
          {t("applyNow")}
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
