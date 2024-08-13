'use client'
import React, { useEffect } from 'react'
import { ContentBlock } from '@/widgets/content-block/ContentBlock'
import { Heading, TextContainer } from '@/shared/ui'

export const HomePage = () => {
	return (
		<>
			<Heading level={1}>Home</Heading>
			<ContentBlock heading={'Sofia Melnik'}>
				<TextContainer
					heading="Life"
					headingLevel={4}
					content="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
				/>
			</ContentBlock>
		</>
	)
}
