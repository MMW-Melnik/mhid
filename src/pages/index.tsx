'use client'

import '../app/styles/index.scss'
import { ContactForm } from '../widgets/contact-form/ContactForm'
import Footer from "../shared/ui/footer/Footer"

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

			<div className=' flex flex-col w-full justify-center items-center'>
				<ContactForm />
				<Footer />
			</div>
		</>
	)
}
