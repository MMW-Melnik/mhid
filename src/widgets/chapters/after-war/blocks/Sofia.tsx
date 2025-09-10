import { afterWarSofiaImages } from '@/entities/sofia/images'
import { useFormattedTexts } from '@/shared/hooks'
import { Heading, ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { FC } from 'react'
import styles from '../after-war.module.scss'

export const Sofia: FC = () => {
	const texts = useFormattedTexts()
	const { Sofia1, Sofia2, Sofia3, Sofia4, Andrey1, Andrey2, Andrey3, Diploma, Andrey, Sofia, Doc, Obituary, House, Cemetery} = afterWarSofiaImages

	return (
		<section>
			<ContentBlock>
				<Heading level={3}>SOFIA</Heading>
				<RenderTextArray textArray={texts.rawCHAPTER5SofiaText1} />
			</ContentBlock>
			<div className={styles.gallery}>
  {[Sofia1, Sofia2, Sofia3, Andrey1, Andrey2, Andrey3].map((img, i) => (
    <ImageWithSource
      key={i}
      imageName={img.alt}
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
      imageName={Doc.alt}
      alt={Doc.alt}
      sourceText={Doc.caption}
    />
			<RenderTextArray textArray={texts.rawCHAPTER5SofiaText3} />
			<ImageWithSource
      sourceImage={Diploma.src}
      imageName={Diploma.alt}
      alt={Diploma.alt}
      sourceText={Diploma.caption}
    />
    		<RenderTextArray textArray={texts.rawCHAPTER5SofiaText4} />
		<RenderTextArray textArray={texts.rawCHAPTER5SofiaText4} />
			<ImageWithSource
      sourceImage={Andrey.src}
      imageName={Andrey.alt}
      alt={Andrey.alt}
      sourceText={Andrey.caption}
    />
      <RenderTextArray textArray={texts.rawCHAPTER5SofiaText5} />
		<ImageWithSource
      sourceImage={Obituary.src}
      imageName={Obituary.alt}
      alt={Obituary.alt}
      sourceText={Obituary.caption}
    />
      <RenderTextArray textArray={texts.rawCHAPTER5SofiaText6} />
		<ImageWithSource
      sourceImage={Sofia4.src}
      imageName={Sofia4.alt}
      alt={Sofia4.alt}
      sourceText={Sofia4.caption}
    />
		<ImageWithSource
      sourceImage={Sofia.src}
      imageName={Sofia.alt}
      alt={Sofia.alt}
      sourceText={Sofia.caption}
    />
      <RenderTextArray textArray={texts.rawCHAPTER5SofiaText7} />
				<ImageWithSource
      sourceImage={House.src}
      imageName={House.alt}
      alt={House.alt}
      sourceText={House.caption}
    />
      <RenderTextArray textArray={texts.rawCHAPTER5SofiaText8} />
		<ImageWithSource
      sourceImage={Cemetery.src}
      imageName={Cemetery.alt}
      alt={Cemetery.alt}
      sourceText={Cemetery.caption}
    />
        <RenderTextArray textArray={texts.rawCHAPTER5SofiaText9} />


	</ContentBlock>
		</section>
	)
}
