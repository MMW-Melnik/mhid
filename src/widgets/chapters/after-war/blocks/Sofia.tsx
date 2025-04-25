import { afterWarSofiaImages } from '@/entities/sofia/images'
import { useFormattedTexts } from '@/shared/hooks'
import { Heading, ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { FC } from 'react'
import styles from '../after-war.module.scss'

export const Sofia: FC = () => {
	const texts = useFormattedTexts()
	const { Sofia1, Sofia2, Sofia3, Sofia4, Andrey1, Andrey2, Andrey3, Doc, Obituary, House, Cemetery} = afterWarSofiaImages

	return (
		<section>
			<ContentBlock>
				<Heading level={3}>Sofia</Heading>
				<RenderTextArray textArray={texts.rawCHAPTER5SofiaText1} />
			</ContentBlock>
			<div className={styles.gallery}>
  {[Sofia1, Sofia2, Sofia3, Andrey1, Andrey2, Andrey3].map((img, i) => (
    <ImageWithSource
      key={i}
      sourceImage={img.src}
      alt={img.alt}
      sourceText={img.caption}
    />
  ))}
</div>

	<ContentBlock>
	<RenderTextArray textArray={texts.rawCHAPTER5SofiaText2} />

	<ImageWithSource
      sourceImage={Doc.src}
      alt={Doc.alt}
      sourceText={Doc.caption}
    />
			<RenderTextArray textArray={texts.rawCHAPTER5SofiaText3} />
			<ImageWithSource
      sourceImage={Andrey2.src}
      alt={Andrey2.alt}
      sourceText={Andrey2.caption}
    />
		<RenderTextArray textArray={texts.rawCHAPTER5SofiaText4} />
		<ImageWithSource
      sourceImage={Obituary.src}
      alt={Obituary.alt}
      sourceText={Obituary.caption}
    />
		<RenderTextArray textArray={texts.rawCHAPTER5SofiaText5} />
		<ImageWithSource
      sourceImage={Sofia4.src}
      alt={Sofia4.alt}
      sourceText={Sofia4.caption}
    />
		<ImageWithSource
      sourceImage={Sofia2.src}
      alt={Sofia2.alt}
      sourceText={Sofia2.caption}
    />
				<RenderTextArray textArray={texts.rawCHAPTER5SofiaText6} />
				<ImageWithSource
      sourceImage={House.src}
      alt={House.alt}
      sourceText={House.caption}
    />
		<RenderTextArray textArray={texts.rawCHAPTER5SofiaText7} />
		<ImageWithSource
      sourceImage={Cemetery.src}
      alt={Cemetery.alt}
      sourceText={Cemetery.caption}
    />
		<RenderTextArray textArray={texts.rawCHAPTER5SofiaText8} />

	</ContentBlock>
		</section>
	)
}
