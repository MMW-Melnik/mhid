'use client'
import React, { useEffect } from 'react'
import { ContentBlock } from '@/widgets/content-block/ContentBlock'
import { QuotedText } from '@/widgets/quoted-text/QuotedText'
import RightText from '@/shared/ui/right-text/RightText'
export const HomePage = () => {
	return (
		<>
			<RightText>
				It is worth looking at the era in which our heroines lived through the
				eyes of a contemporary. For example, a writer. It is known that people
				in professions perceive the world in a special way and determine their
				own place in it.
				<br />
				<br /> Stefan Zweig described the events of the early twentieth century
				quite vividly. His "Yesterday's World", which can be safely extrapolated
				to the modern world, leaves no illusions:
			</RightText>
			<QuotedText author="Stefan Zweig. Yesterday's World">
				“Before the First World War, the Austrian monarchy was characterised by
				a sense of stability and reliability, where rights were fixed and duties
				were regulated. People believed that the world was on the way to a
				better future, where wars and conflicts would gradually disappear,
				giving way to peace and security.”
			</QuotedText>
			<RightText>
				It was at this time that the protagonists of this project were born in
				the centre of Europe, albeit in different countries.
			</RightText>
			<ContentBlock
				heading={'Charlotte Luxembourg'}
				text1="It always seems to ordinary people that the life of monarchs resembles an interesting and vividly illustrated fairy tale. The biography of Princess Charlotte of Luxembourg dispels this myth. Her life story is like a drama, but with a happy ending. On the one hand, it was the life of an ordinary person, in which sadness and joy, happiness and suffering alternated.
It was the life of a woman who had a loving family and home from birth, received an education, became a wife and mother of six children. At the same time, her life was defined by a special status that imposed certain responsibilities and limited her personal freedom from birth. 
Given this, Charlotte had to show great ingenuity to cope with all the challenges and difficulties and to arrange her life as she saw fit. It is extremely interesting to trace all the twists and turns of this complex story."
				text2="She was the second of six daughters in the family of Crown Prince Wilhelm of Luxembourg and his wife Maria Anna of Portugal from the Braganza dynasty. The girl had an older sister, Maria Adelaide, and younger sisters, Hilda, Antoinette, Elizabeth and Sophia. The country was ruled by her grandfather Adolphe I. After his death in 1905, the princesses' father inherited the Luxembourg throne."
				image="xyi"
				alt="Grand Duke William IV of Luxembourg and his wife Maria Anna of Portugals"
				p="Grand Duke William IV of Luxembourg and his wife Maria Anna of
					Portugals"
			></ContentBlock>
		</>
	)
}
