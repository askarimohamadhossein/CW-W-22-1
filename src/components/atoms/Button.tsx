import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  classname?: string;
}

export const Button: React.FC<IButtonProps> = ({
  name,
  classname,
  ...props
}) => {
  return (
    <div>
      <button
        className={classname ?? "btn btn-soft btn-primary w-40"}
        {...props}
      >
        {name}
      </button>
    </div>
  );
};
