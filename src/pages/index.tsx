'use client'

import '../app/styles/index.scss'
import { Button } from '../shared/ui'
import { Input } from "../shared/ui"
import { ButtonSize } from '../shared/ui/button/button.interface'

export default function App() {
	return (
		<>
		<Button buttonText='Start Explore' buttonSize={ButtonSize.SMALL}/>
		<Button buttonText='Send Message' buttonSize={ButtonSize.LARGE}/>
		<Input type='text' placeholder='Person Name' inputName='Full Name' inputErrorMessage='pennis' />
		</>
	)
}