'use client'
import React, { useEffect } from 'react'
import { ContentBlock } from '@/widgets/content-block/ContentBlock'
import { Heading } from '@/shared/ui'

export const HomePage = () => {
	return (
		<>
			<Heading level={1}>Home</Heading>
			<ContentBlock
				heading={'Charlotte Luxembourg'}
				text1="It always seems to ordinary people that the life of monarchs resembles an interesting and vividly illustrated fairy tale. The biography of Princess Charlotte of Luxembourg dispels this myth. Her life story is like a drama, but with a happy ending. On the one hand, it was the life of an ordinary person, in which sadness and joy, happiness and suffering alternated.
It was the life of a woman who had a loving family and home from birth, received an education, became a wife and mother of six children. At the same time, her life was defined by a special status that imposed certain responsibilities and limited her personal freedom from birth. 
Given this, Charlotte had to show great ingenuity to cope with all the challenges and difficulties and to arrange her life as she saw fit. It is extremely interesting to trace all the twists and turns of this complex story."
				text2="She was the second of six daughters in the family of Crown Prince Wilhelm of Luxembourg and his wife Maria Anna of Portugal from the Braganza dynasty. The girl had an older sister, Maria Adelaide, and younger sisters, Hilda, Antoinette, Elizabeth and Sophia. The country was ruled by her grandfather Adolphe I. After his death in 1905, the princesses' father inherited the Luxembourg throne."
			></ContentBlock>
		</>
	)
}
