'use client'

import '../app/styles/index.scss'
import { ContactForm } from '../widgets/contact-form/ContactForm'

export default function App() {
	return (
		<>
			{/* <Button buttonText="Start Explore" buttonSize={ButtonSize.SMALL} />
			<Button buttonText="Send Message" buttonSize={ButtonSize.LARGE} />
			<Input
				type="text"
				placeholder="Person Name"
				inputName="Full Name"
				inputErrorMessage="pennis"
			/>
			<SMWidget /> */}


			<ContactForm />
		</>
	)
}
