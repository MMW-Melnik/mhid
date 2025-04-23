import { FC } from 'react'
import { FormattedText } from '../formatted-text/FormattedText'

export const RenderTextArray: FC<{ textArray?: string[] }> = ({
	textArray = []
}) => (
	<>
		{textArray.map((text, index) => (
			<FormattedText key={index} text={text} />
		))}
	</>
)
