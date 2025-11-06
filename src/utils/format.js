
import { format } from "date-fns";

export const formatDate = (date = new Date()) => format(date, "dd-MM-yyyy");

export const heightToMeters = (heightCm) => {
  if (!heightCm || heightCm === "unknown") return "unknown";
  const m = Number(heightCm) / 100;
  return `${m.toFixed(2)} m`;
};

export const massToKg = (mass) => {
  if (!mass || mass === "unknown") return "unknown";
  // Some masses have commas or 'unknown'
  return `${parseFloat(mass.toString().replace(/,/g, ""))} kg`;
};
