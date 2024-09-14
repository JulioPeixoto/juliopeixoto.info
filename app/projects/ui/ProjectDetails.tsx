import React from "react";

export const ProjectDetails = ({
  describe,
  stack,
}: {
  describe: string[];
  stack: React.ElementType[];
}) => {
  return (
    <div>
      <div className="text-sm mb-2">
        {describe.map((paragraph, idx) => (
          <p key={idx} className="mt-2">
            {paragraph}
          </p>
        ))}
      </div>
      <span className="text-slate-500 font-semibold ">Technologies used</span>
      <div className="flex space-x-3 mt-0.5">
        {stack.map((IconComponent, idx) => (
          <IconComponent key={idx} size={30} />
        ))}
      </div>
    </div>
  );
};
