import { BarChart, Bar, Cell, Tooltip } from 'recharts';

type Props = {
  dataChart: any
}

const colors: any = {
  'Incêndio' : 'rgba(255,255,255)',
  'Vandalismo' : 'rgba(255,0,255)',
  'Alagamento' : 'rgba(1,1,255)',
  'Veículo Irregular' : 'rgba(255,200,255)',
  'Furto': 'rgba(1,255,255)',
}

export function BarKPIChart({ dataChart }: Props) {
  return (
    <BarChart width={150} height={60} data={dataChart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Bar dataKey="total">
        {dataChart.map((entry: any, index: number) => (
          <Cell 
            key={`cell-${index}`} 
            fill={colors[entry.type]} 
          />
        ))}
      </Bar>
      
      <Tooltip 
        formatter={(value, _, props) => {
          return [value, props.payload.type]
        }}
      />
    </BarChart>
  )
}