'use client'

import { useClickOutside } from '@/shared/hooks/useClickOutside'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useToggleMenu } from './useToggleMenu'

export const useMobileMenu = () => {
	const { isOpen, toggleMenu } = useToggleMenu()
	const [isLoaded, setIsLoaded] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const router = useRouter()

	useClickOutside(menuRef, () => {
		if (isOpen) {
			toggleMenu()
		}
	})

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	useEffect(() => {
		const handleRouteChange = () => {
			if (isOpen) {
				toggleMenu()
			}
		}

		router.events.on('routeChangeStart', handleRouteChange)

		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
		}
	}, [isOpen, router.events, toggleMenu])

	return {
		isOpen,
		toggleMenu,
		isLoaded,
		menuRef
	}
}
