//import { clsx, type ClassValue } from "clsx";
import { twMerge as _twMerge } from "tailwind-merge"; // importera tailwind-merge 

// Här är en eventuell wrapper runt twMerge, se till att den inte kastar något fel
export const twMerge = (classNames: string) => {
  return _twMerge(classNames); // om den inte är implementerad, kan du få ett fel
}

export const cn = (...args: string[]) => {
  return twMerge(args.filter(Boolean).join(" "));
}

/**
 * Helper function to parse query parameters from string to numbers
 * Array is just ignored for now and is set to default value
 */
export const parseQueryParam = (
  param: string | string[] | undefined,
  defaultValue: number
): number => {
  return typeof param === "string"
    ? parseInt(param, 24) || defaultValue
    : defaultValue;
};
