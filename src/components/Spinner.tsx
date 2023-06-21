import React from "react";
import classNames from "classnames";

interface Props {
  className?: string;
}

const Spinner: React.FC<Props> = ({ className }) => {
  return (
    <div className="mt-8">
      <div
        className={classNames(
          "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite",
          className
        )}
      />
    </div>
  );
};

export default Spinner;
