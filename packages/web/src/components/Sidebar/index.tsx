import { ReactNode } from 'react'
import dayjs from 'dayjs'

import { OccurrenceDTO } from '@/dtos/OccurrenceDTO'

import { Container, Title, ItemContainer, ItemTitle, ItemSubtitle, ItemContainerHorizontal, ItemContainerVertical, DataText } from './styles'
import Link from 'next/link'

type Props = {
  lastOccurrences: OccurrenceDTO[]
  children?: ReactNode
}

function getDescribeDate(date: Date) {
  return dayjs(date).format('DD/MM/YYYY')
}

function getDescribeTime(date: Date) {
  return dayjs(date).format('HH:mm[h]')
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