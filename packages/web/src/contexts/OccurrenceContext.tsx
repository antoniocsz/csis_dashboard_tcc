import { ReactNode, createContext, useState, useEffect } from "react";

import { OccurrenceDTO } from "@/dtos/OccurrenceDTO";
import { occurrenceMock } from "@/data/mock";

type DataContext = {
  occurrences: OccurrenceDTO[]
}

type DataProvider = {
  children: ReactNode
}

const OccurrenceContext =  createContext<DataContext>({} as DataContext)

function OccurrenceProvider({ children }: DataProvider) {
  const [occurrences, setOccurrences] = useState<OccurrenceDTO[]>(occurrenceMock)

  useEffect(() => {
    setOccurrences(occurrenceMock)
  }, [occurrenceMock])

  return (
    <OccurrenceContext.Provider value={{ occurrences }}>
      {children}
    </OccurrenceContext.Provider>
  )
}

export { OccurrenceContext, OccurrenceProvider}