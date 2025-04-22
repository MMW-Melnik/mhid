import { ImageConfig } from '@/shared/types'
import { FormattedText, Heading, ImageWithSource } from '@/shared/ui'
import { ContentBlock, IQuote, Quote } from '@/widgets/index'
import { FC } from 'react'

type TextSectionProps = {
  heading?: string
  paragraphs: string[]
  image?: ImageConfig
  quotes?: IQuote[]
  headingLevel?: 4 | 5
}

export const TextSection: FC<TextSectionProps> = ({
  heading,
  headingLevel = 4,
  paragraphs,
  image,
  quotes,
}) => (
  <ContentBlock>
    {heading && <Heading level={headingLevel}>{heading}</Heading>}
    {paragraphs.map((p, i) => <FormattedText key={p.slice(0,20)+i} text={p} />)}
    {image && (
      <ImageWithSource
        sourceImage={image.src}
        alt={image.alt}
        sourceText={image.caption}
      />
    )}
    {quotes?.map(q => (
      <Quote key={q.cite} quote={q.quote} cite={q.cite} author={q.author} />
    ))}
  </ContentBlock>
)