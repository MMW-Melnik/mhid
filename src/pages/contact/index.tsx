import { Meta } from '@/app/meta/Meta'
import { FC } from 'react'
import { ContactPage } from '../../views/contact'

const Contact: FC = ({}) => {
	return (
		<>
			<Meta
				title="Contact"
				description="Contact form to get in touch with Zhanna Serdyuk. Feel free to send your inquiries and messages."
			/>
			<ContactPage />
		</>
	)
}

export default Contact
