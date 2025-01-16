// Importing required libraries and components
import * as React from "react"; // React library for building UI components
import * as DialogPrimitive from "@radix-ui/react-dialog"; // Radix UI for building accessible dialog components
import { X } from "lucide-react"; // Icon library for UI elements

// Utility function to conditionally join class names
import { cn } from "../lib/utils.js"; 

// Root dialog component
const Dialog = DialogPrimitive.Root; 

// Trigger for opening the dialog
const DialogTrigger = DialogPrimitive.Trigger; 

// Portal for rendering the dialog in the DOM
const DialogPortal = ({ className, ...props }) => (
  <DialogPrimitive.Portal className={cn(className)} {...props} />
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

// Overlay component for the dialog background
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-40 font-bold bg-background/50 backdrop-blur-sm", // Styles for a blurred semi-transparent background
      "data-[state=open]:animate-in data-[state=closed]:animate-out", // Animation for opening and closing
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", // Fade-in and fade-out animations
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

// Content component for the dialog's main content
const DialogContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      {/* Overlay for the background */}
      <DialogOverlay />
      {/* Content container */}
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg", // Centered content
          "translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background", // Styling for positioning and appearance
          "p-6 shadow-lg duration-200 sm:rounded-lg md:w-full", // Padding, shadows, and responsive design
          "data-[state=open]:animate-in data-[state=closed]:animate-out", // Opening and closing animations
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", // Fade animations
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", // Zoom-in and zoom-out effects
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]", // Sliding animations
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", 
          className
        )}
        {...props}
      >
        {children} {/* Dialog content goes here */}
        {/* Close button */}
        <DialogPrimitive.Close
          className={cn(
            "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background", // Styling for positioning and appearance
            "transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring", // Hover and focus effects
            "focus:ring-offset-2 disabled:pointer-events-none", // Accessibility improvements
            "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" // State-based styles
          )}
        >
          <X className="h-4 w-4" /> {/* Close icon */}
          <span className="sr-only">Close</span> {/* Accessible label for screen readers */}
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

// Header component for the dialog
const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left", // Styling for text alignment and spacing
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

// Footer component for the dialog
const DialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", // Styling for footer buttons
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

// Title component for the dialog
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight", // Styling for title font and spacing
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

// Description component for the dialog
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // Styling for description text
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// Exporting all components for external use
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
