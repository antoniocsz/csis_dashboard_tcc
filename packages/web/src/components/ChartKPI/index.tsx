import { ReactNode } from 'react'

import { Container, HorizontalContainer, Subtitle, Title } from './styles'

type Props = {
  title: string
  totals: number
  children?: ReactNode
  color?: string
}

export function ChartKPI({ color = '#FFF',title, totals, children }: Props) {
  return (
    <Container color={color}>
      <HorizontalContainer>
        <Title>{title}</Title>
        <Subtitle>{totals}</Subtitle>  
      </HorizontalContainer>

      <HorizontalContainer>
        {children}
      </HorizontalContainer>
    </Container>
  )
}