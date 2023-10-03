import { ReactNode } from 'react'
import { Container } from './styles'

type Props = {
  children?: ReactNode
}

export function Wrapper({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}