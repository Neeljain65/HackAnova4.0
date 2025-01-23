
import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "23rd January 2025",
      content: (
        <div>
          <p
            className="text-neutral-200 ">
           Registration Commences
          </p>
          
        </div>
      ),
    },
    {
      title: "17th February 2025",
      content: (
        <div>
          
          <p
            className="text-neutral-200 ">
           Online Idea Submission</p>
          
        </div>
      ),
    },
    {
      title: "18th February 2025",
      content: (
        <div>
          <p
            className="text-neutral-200 ">
            Shortlisted Teams Announced
          </p>

          </div>   
      ),
    },
    {
      title: "21st February 2025",
      content: (
        <div>
          <p
            className="text-neutral-200 ">
            Final Round of Competition
          </p>

          </div>   
      ),
    },
  ];
  return (
    <div id="timeline" className=" w-full bg-black   dark:bg-dot-slate-400/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      <Timeline data={data} />
      </p>
    </div>
  );
}
