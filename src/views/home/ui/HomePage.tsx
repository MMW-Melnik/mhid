'use client'
import { ContentBlock, Paragraph, Quote } from '@/widgets/index'
import { useTranslation } from 'react-i18next'

export const HomePage = () => {
	const { t } = useTranslation('home')

	return (
		<>
			<section>
				<ContentBlock>
					It&nbsp;is&nbsp;worth looking at&nbsp;the era in&nbsp;which our
					heroines lived through the eyes of&nbsp;a&nbsp;contemporary. For
					example, a&nbsp;writer. It&nbsp;is&nbsp;known that people
					in&nbsp;professions perceive the world in&nbsp;a&nbsp;special way and
					determine their own place in&nbsp;it. Stefan Zweig described the
					events of&nbsp;the early twentieth century quite vividly. His
					&laquo;Yesterday&rsquo;s World&raquo;, which can be safely
					extrapolated to&nbsp;the modern world, leaves no&nbsp;illusions:
				</ContentBlock>
				<Quote
					quote={t('introduction.quote')}
					author="Stefan Zweig. Yesterday's World"
					cite=""
				/>
				<ContentBlock>
					It&nbsp;was at&nbsp;this time that the protagonists of&nbsp;this
					project were born in&nbsp;the centre of&nbsp;Europe, albeit
					in&nbsp;different countries.
				</ContentBlock>
			</section>

			<Paragraph>World War 2</Paragraph>
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
