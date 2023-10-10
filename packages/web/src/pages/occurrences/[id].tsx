'use client'

import Head from "next/head";

// import dynamic from 'next/dynamic'

import { useOccurrence } from "@/hooks/useOccurrence";

import { getDescribeDate } from "@/utils/get_describe_date";
import { getDescribeTime } from "@/utils/get_describe_time";

import { Header } from "@/components/Header";
import { Container } from "@/styles/pages/home";
import { BackButton, HorizontalContainer } from "@/styles/pages/occurrenceItem";

// const DynamicMap = dynamic(
//   () => import('@/components/Map').then((map) => map.Map),
//   {
//     ssr: false,
//   },
// )

export default function Occurence(props: any) {
  const { occurrences } = useOccurrence()
  let occurrence = occurrences.find(occurrence => occurrence.id === props.id)

  return (
    <>
      <Head>
        <title>CSIS Dashboard - {occurrence?.description}</title>
      </Head>

      <Container>
        <Header />

        <HorizontalContainer>
          <BackButton href="/occurrences">Voltar</BackButton>
          {occurrence?.date && <span>{getDescribeTime(occurrence?.date)} - {getDescribeDate(occurrence?.date)}</span>}
        </HorizontalContainer>

        <div>
          <div>
            <section>
              <h1>{occurrence?.type}</h1>

              <div>
                <span>Descrição: {occurrence?.description}</span>
                <span>Local: {occurrence?.address}</span>
              </div>
            </section>

            <section>

            </section>
          </div>

          <div>
            
          </div>
        </div>
            
       
      </Container>
    </>
  )
}

export async function getServerSideProps(props: any) {
  return{
    props: {
     id: props.query.id
    }
  }
}