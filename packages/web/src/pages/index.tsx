'use client'

import { useMemo } from "react";
import { useTheme } from "styled-components";
import dynamic from 'next/dynamic'
import Head from "next/head";

import { useOccurrence } from "@/hooks/useOccurrence";

import { Container, Content, SectionKPI } from "@/styles/pages/home";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Wrapper } from "@/components/Wrapper";
import { ChartKPI } from "@/components/ChartKPI";

const DynamicCombinedChart = dynamic(
  () => import('@/components/CombinedChart').then((map) => map.CombinedChart),
  {
    ssr: false,
  },
)

const DynamicBarKPIChart = dynamic(
  () => import('@/components/BarKPIChart').then((map) => map.BarKPIChart),
  {
    ssr: false,
  },
)

const DynamicMap = dynamic(
  () => import('@/components/Map').then((map) => map.Map),
  {
    ssr: false,
  },
)

export default function Home() {
  const { occurrences } = useOccurrence()
  const theme = useTheme()

  const lastOccurrences = useMemo(() => {
    return occurrences.sort((a, b) => {
      if (a.date > b.date) {
        return 1
      } else if(a.date < b.date) {
        return -1
      }
      return 0
    }).filter((_, index) => index < 5)
  }, [occurrences])

  const occurrencesLineChart = useMemo(() => {
    const occurrencesMap = occurrences.map(({ date, type }) => ({ 
      type, 
      date 
    }))

    const occurrencesMapCounts = occurrencesMap.reduce((acc, { type }) => {
      return acc.set(type, (acc.get(type) || 0) + 1)
    }, new Map())

    const occurrenceReturn = [...occurrencesMapCounts].map(([type, total]) => ({ 
      type, 
      total 
    }))

    return occurrenceReturn
  }, [occurrences])

  const totalOfOccurrences = useMemo(() => {
   let total = occurrences.length
   let open = 
    occurrences.reduce((acc, item) => {
      if (item.status === 'Aberta') {
        return acc += 1
      }
      return acc
    }, 0)

    let current =  occurrences.reduce((acc, item) => {
      if (item.status === 'Andamento') {
        return acc += 1
      }
      return acc
    }, 0)

    let canceled =  occurrences.reduce((acc, item) => {
      if (item.status === 'Canceladas') {
        return acc += 1
      }
      return acc
    }, 0)

    let closed =  occurrences.reduce((acc, item) => {
      if (item.status === 'Concluídas') {
        return acc += 1
      }
      return acc
    }, 0)

    

    return {
      total, open, current, canceled, closed
    }
  }, [occurrences])

  
  return (
    <>
      <Head>
        <title>CSIS Dashboard</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <Sidebar lastOccurrences={lastOccurrences} />

          <Wrapper>
            <SectionKPI>
              <ChartKPI color={theme.COLORS.BLUE_DARK} title="Ocorrências"totals={totalOfOccurrences.total}>
                <DynamicBarKPIChart dataChart={occurrencesLineChart} />
              </ChartKPI>
              
              <ChartKPI color={theme.COLORS.INFO} title="Abertas"totals={totalOfOccurrences.open}>
                <DynamicBarKPIChart dataChart={occurrencesLineChart} /> 
              </ChartKPI>

              <ChartKPI color={theme.COLORS.ATTENTION} title="Andamento"totals={totalOfOccurrences.current}>
                <DynamicBarKPIChart dataChart={occurrencesLineChart} /> 
              </ChartKPI>

              <ChartKPI color={theme.COLORS.DANGER} title="Canceladas"totals={totalOfOccurrences.canceled}>
                <DynamicBarKPIChart dataChart={occurrencesLineChart} /> 
              </ChartKPI>

              <ChartKPI color={theme.COLORS.SUCCESS}  title="Concluídas"totals={totalOfOccurrences.closed}>
                <DynamicBarKPIChart dataChart={occurrencesLineChart} /> 
              </ChartKPI>
            </SectionKPI> 

            {occurrencesLineChart && <DynamicCombinedChart dataChart={occurrencesLineChart} />}
            
            <DynamicMap />
          
          </Wrapper>
        </Content>
      </Container>
    </>
  )
}
