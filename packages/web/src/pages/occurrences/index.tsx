import { useOccurrence } from "@/hooks/useOccurrence";

import { Header } from "@/components/Header";
import { Container } from "@/styles/pages/home";

export default function Occurences() {
  const { occurrences } = useOccurrence()

  return (
    <Container>
      <Header />

      {occurrences.map(occurrence => (
        <h1 key={occurrence.id}>{occurrence.description}</h1>
      ))}
    </Container>
  )
}