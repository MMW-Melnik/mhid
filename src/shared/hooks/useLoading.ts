'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const useLoading = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
	const [isLoading, setLoading] = useState<boolean>(true)

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
