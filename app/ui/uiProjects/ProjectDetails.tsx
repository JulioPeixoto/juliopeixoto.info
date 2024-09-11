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
      <div className="text-sm">
        {describe.map((paragraph, idx) => (
          <p key={idx} className="mb-2 text-lg">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex space-x-3 mt-4">
        {stack.map((IconComponent, idx) => (
          <IconComponent key={idx} size={34} />
        ))}
      </div>
    </div>
  );
};
