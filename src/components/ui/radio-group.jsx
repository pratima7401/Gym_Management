import React from 'react';
import { cn } from "../lib/utils";

const RadioGroup = React.forwardRef(({ className, onChange, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("grid gap-2", className)}
      {...props}
    />
  );
});
RadioGroup.displayName = "RadioGroup";

const RadioGroupItem = React.forwardRef(({ className, children, onChange, ...props }, ref) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        ref={ref}
        className={cn(
          "w-4 h-4 text-primary border-gray-300 focus:ring-2 focus:ring-primary",
          className
        )}
        {...props}
        onChange={onChange} // Pass onChange here
      />
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
        {children}
      </span>
    </label>
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
