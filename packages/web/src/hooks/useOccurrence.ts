import { useContext } from "react";

import { OccurrenceContext } from "@/contexts/OccurrenceContext";

export function useOccurrence() {
  const context = useContext(OccurrenceContext)

  return context
}