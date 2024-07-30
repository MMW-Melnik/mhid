import { useEffect, useState } from 'react'

export const useLoading = () => {
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		const handleLoad = () => {
			setTimeout(() => {
				setLoading(false)
			}, 5000)
		}

		if (document.readyState === 'complete') {
			handleLoad()
		} else {
			window.addEventListener('load', handleLoad)
		}

		return () => window.removeEventListener('load', handleLoad)
	}, [])

	return [isLoading, setLoading]
}
