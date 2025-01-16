<<<<<<< HEAD
import * as React from "react"

import { cn } from "../../lib/utils"
=======
import * as React from "react";
import { cn } from "../lib/utils.js";
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f

const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
<<<<<<< HEAD
))
Table.displayName = "Table"

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"
=======
));
Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
<<<<<<< HEAD
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"
=======
    className={cn("last:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  />
<<<<<<< HEAD
))
TableFooter.displayName = "TableFooter"
=======
));
TableFooter.displayName = "TableFooter";
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
<<<<<<< HEAD
))
TableRow.displayName = "TableRow"
=======
));
TableRow.displayName = "TableRow";
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
=======
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f
      className
    )}
    {...props}
  />
<<<<<<< HEAD
))
TableHead.displayName = "TableHead"
=======
));
TableHead.displayName = "TableHead";
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
<<<<<<< HEAD
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"
=======
    className={cn("p-4 align-middle", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
<<<<<<< HEAD
))
TableCaption.displayName = "TableCaption"
=======
));
TableCaption.displayName = "TableCaption";
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
<<<<<<< HEAD
}

=======
};
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f
