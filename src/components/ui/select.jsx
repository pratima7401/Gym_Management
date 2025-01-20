import React from 'react';
import { cn } from "../lib/utils";

const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        "block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
});
Select.displayName = "Select";

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <option
      ref={ref}
      className={cn("py-1 px-2", className)}
      {...props}
    >
      {children}
    </option>
  );
});
SelectItem.displayName = "SelectItem";

const SelectTrigger = ({ className, children, ...props }) => {
  return (
    <button
      type="button"
      className={cn("text-left w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
};
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = ({ children, className, ...props }) => {
  return (
    <div className={cn("absolute bg-white shadow-md rounded-md mt-2", className)} {...props}>
      {children}
    </div>
  );
};
SelectContent.displayName = "SelectContent";

// Define SelectValue component
const SelectValue = ({ children, className, ...props }) => {
  return (
    <span
      className={cn("text-left", className)}
      {...props}
    >
      {children}
    </span>
  );
};
SelectValue.displayName = "SelectValue";

export { Select, SelectItem, SelectTrigger, SelectContent, SelectValue };
