import { IQuote } from '@/widgets/quote/quote.interface'
import { useTranslation } from 'react-i18next'



export interface CharlotteData {
  intro: string[]
  sisters: string[]
  inheritance: string[]
  difficulties: string[]
  speculation: string[]
  activity: {
    texts: string[]
    quotes: IQuote[]
  }
}


export const useCharlotteData = (): CharlotteData => {
  const { t } = useTranslation('homeContent')

  const cpw = t(
    'A PREMONITION OF WAR.CHILDHOOD AND YOUTH.CHARLOTTE LUXEMBOURG',
    { returnObjects: true }
  ) as {
    INTRODUCTION: { CONTENT: string[] }
    SISTERS: string[]
    INHERITANCE: string[]
    DIFFICULTIES: string[]
    SPECULATIONS: string[]
    ACTIVITY: { CONTENT: string[]; QUOTE: string[] }
  }

  return {
    intro: cpw.INTRODUCTION.CONTENT,
    sisters: cpw.SISTERS,
    inheritance: cpw.INHERITANCE,
    difficulties: cpw.DIFFICULTIES,
    speculation: cpw.SPECULATIONS,
    activity: {
      texts: cpw.ACTIVITY.CONTENT,
      quotes: cpw.ACTIVITY.QUOTE.map((quoteText): IQuote => ({
        quote: quoteText,                               
        author: '',
        cite: '',                                       
      })),
    },
  }
}