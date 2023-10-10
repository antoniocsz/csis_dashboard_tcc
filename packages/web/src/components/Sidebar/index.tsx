import { ReactNode } from 'react'
import Link from 'next/link'

import { OccurrenceDTO } from '@/dtos/OccurrenceDTO'

import { 
  Container, 
  Title, 
  ItemContainer, 
  ItemTitle, 
  ItemSubtitle, 
  ItemContainerHorizontal, 
  ItemContainerVertical, 
  DataText 
} from './styles'

import { getDescribeDate } from '@/utils/get_describe_date'
import { getDescribeTime } from '@/utils/get_describe_time'

type Props = {
  lastOccurrences: OccurrenceDTO[]
  children?: ReactNode
}


export function Sidebar({ lastOccurrences, children }: Props) {
  return (
    <Container>
      <Title>Últimas Ocorrências</Title>

      {lastOccurrences.map((occurrence) => (
        <Link href={`/occurrences/${occurrence.id}`} key={occurrence.id} passHref legacyBehavior>
          <ItemContainer>
            <ItemTitle>{occurrence.type}</ItemTitle>
              
            <ItemContainerHorizontal>
              <ItemSubtitle type={occurrence.priority}>{occurrence.priority}</ItemSubtitle>

              <ItemContainerVertical>
                <DataText>{getDescribeDate(occurrence.date)}</DataText>
                <DataText>{getDescribeTime(occurrence.date)}</DataText>
              </ItemContainerVertical>
            </ItemContainerHorizontal>
          </ItemContainer>
        </Link>
      ))}

    </Container>
  )
}