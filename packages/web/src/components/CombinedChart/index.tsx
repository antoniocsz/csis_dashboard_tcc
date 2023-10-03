import { 
  BarChart, 
  Bar, 
  Legend, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';

import { Container, Title } from './styles';

type Props = {
  dataChart: any
}

export function CombinedChart({ dataChart }: Props) {
  return (
    <Container>
      <Title>Total de Ocorrências por Tipo e Data</Title>
      
      <BarChart width={600} height={300} data={dataChart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Bar dataKey="total" />
        <Legend />
        <XAxis dataKey="type" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </Container>
  )
}