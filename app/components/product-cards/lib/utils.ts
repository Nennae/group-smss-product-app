import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

function twMerge(arg0: string) {
    throw new Error("Function not implemented.");
}
