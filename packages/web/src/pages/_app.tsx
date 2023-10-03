import type { AppProps } from 'next/app'
import { ThemeProvider  } from 'styled-components'

import { OccurrenceProvider } from '@/contexts/OccurrenceContext'

import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <OccurrenceProvider>
        <Component {...pageProps} />
      </OccurrenceProvider>
    </ThemeProvider>
  )
}
