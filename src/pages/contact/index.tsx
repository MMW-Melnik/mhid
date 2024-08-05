'use client'

import { Meta } from '@/app/meta'
import { ContactPage } from '@/views/contact'

import { FC } from 'react'

const Contact: FC = ({}) => {
	return (
		<>
			<Meta
				title="Contact"
				description="Contact form to get in touch with Zhanna Serdyuk. Feel free to send your inquiries and messages."
			>
				<ContactPage />
			</Meta>
		</>
	)
}

export default Contact
