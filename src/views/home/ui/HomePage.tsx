'use client'
import bgImage from '@/app/assets/images/home/bg.jpg'
import { Chapter, ContentBlock } from '@/widgets/index'
import { useTranslation } from 'react-i18next'

import { FormattedText, Intro } from '@/shared/ui'
import { ImageWithSource } from '@/shared/ui/image-with-source/ImageWithSource'

export const HomePage = () => {
	const { t } = useTranslation('home')

	return (
		<>
			<section>
				<Intro imageText="source" text="The Luxembourg Dream" />
				<ImageWithSource
					sourceImage={bgImage.src}
					sourceText="source"
					alt="alt"
				/>
				<ContentBlock>
					<FormattedText text={t('chapter_1.text')} />
				</ContentBlock>
				<ContentBlock>
					It&nbsp;was at&nbsp;this time that the protagonists of&nbsp;this
					project were born in&nbsp;the centre of&nbsp;Europe, albeit
					in&nbsp;different countries.
				</ContentBlock>
			</section>

			<Chapter
				quote="chapter_2.quote"
				author="Stefan Zweig. Yesterday's World"
				img1={bgImage.src}
				img2={bgImage.src}
				img3={bgImage.src}
			>
				{t('chapter_2.title')}
			</Chapter>
			<ContentBlock>
				It is worth looking at the era in which our heroines lived through the
				eyes of a contemporary. For example, a writer. It is known that people
				in professions perceive the world in a special way and determine their
				own place in it. Stefan Zweig described the events of the early
				twentieth century quite vividly. His "Yesterday's World", which can be
				safely extrapolated to the modern world, leaves no illusions:
			</ContentBlock>
			<ContentBlock>
				It is worth looking at the era in which our heroines lived through the
				eyes of a contemporary. For example, a writer. It is known that people
				in professions perceive the world in a special way and determine their
				own place in it. Stefan Zweig described the events of the early
				twentieth century quite vividly. His "Yesterday's World", which can be
				safely extrapolated to the modern world, leaves no illusions:
			</ContentBlock>
		</>
	)
}
