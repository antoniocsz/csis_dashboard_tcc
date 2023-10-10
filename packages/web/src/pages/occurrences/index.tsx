import { useMemo, useState } from "react";
import { useOccurrence } from "@/hooks/useOccurrence";

import { getDescribeDate } from "@/utils/get_describe_date";

import { Header } from "@/components/Header";
import { Container } from "@/styles/pages/home";
import { 
  FilterSection, 
  OccurrenceItemContainer, 
  OccurrenceItemDescribeContainer, 
  OccurrenceItemTitleContainer 
} from "@/styles/pages/occurrences";
import Link from "next/link";
import Head from "next/head";

export default function Occurences() {
  const { occurrences } = useOccurrence()
  const [search, setSearch] = useState('')

  let occurrencesFiltered = useMemo(() => {
    return search.length > 0 ? occurrences.filter(occurrence => {
      return occurrence.description.trim().toLowerCase().includes(search.trim().toLowerCase()) 
        || occurrence.priority.trim().toLowerCase().includes(search.trim().toLowerCase()) 
        || occurrence.status.trim().toLowerCase().includes(search.trim().toLowerCase()) 
    }) : occurrences
  }, [search, occurrences]) 
  

  return (
    <>
      <Head>
        <title>CSIS Dashboard</title>
      </Head>

      <Container>
        <Header />
        
        <FilterSection>
          <div className="formGroup">
            <label htmlFor="">Palavra Chave</label>
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>

          <div>
            <div className="formGroup">
              <label htmlFor="">Câmera</label>
              <input disabled type="text" />
            </div>

            <div className="formGroup">
              <label htmlFor="">Data</label>
              <input disabled type="date" />
            </div>
          </div>

        </FilterSection>

        {occurrencesFiltered.map(occurrence => (
          <OccurrenceItemContainer key={occurrence.id}>
            <OccurrenceItemTitleContainer>
              <span>{occurrence.type}</span>
              <Link href={`/occurrences/${occurrence.id}`}>expandir</Link>
            </OccurrenceItemTitleContainer>

            <OccurrenceItemDescribeContainer>
              <p>{occurrence.description}</p>
              <span>{getDescribeDate(occurrence.date)}</span>
            </OccurrenceItemDescribeContainer>
          </OccurrenceItemContainer>
        ))}
      </Container>
    </>
  )
}