'use client'
import { Heading } from '@/shared/ui'

function NotFoundPage() {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen">
				<Heading level={2}>Opps</Heading>
				<p>Page not found</p>
			</div>
		</>
	)
}

export default NotFoundPage
