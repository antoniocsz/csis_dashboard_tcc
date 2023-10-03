import { BarChart, Bar, Tooltip } from 'recharts';

type Props = {
  dataChart: any
}

export function BarKPIChart({dataChart}: Props) {
  return (
    <BarChart width={150} height={100} data={dataChart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Bar dataKey="total" fill="#c4c4c4" />
      <Tooltip  />
    </BarChart>
  )
}