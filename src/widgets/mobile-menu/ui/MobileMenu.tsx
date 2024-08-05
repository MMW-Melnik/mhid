import { useClickOutside } from '@/shared/hooks/useClickOutside'
import { NavRoute } from '@/shared/ui'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { useMobileMenu } from '../model/useMobileMenu'
import styles from './mobile-menu.module.scss'

export const MobileMenu: FC = () => {
	const { isOpen, toggleMenu } = useMobileMenu()
	const { t } = useTranslation('header')
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

	if (!isLoaded) {
		return null
	}

	return (
		<>
			<div
				className={`${styles.icon_wrapper} ${isOpen ? styles.open : ''}`}
				onClick={toggleMenu}
			>
				<IoMdMenu size={30} className={`${styles.icon} ${styles.menu_icon}`} />
				<IoMdClose
					size={30}
					className={`${styles.icon} ${styles.close_icon}`}
				/>
			</div>

			{isOpen && (
				<div className={styles.menu} ref={menuRef}>
					<IoMdClose
						size={30}
						className={styles.mobile_menu_close}
						onClick={toggleMenu}
					/>
					<nav className={styles.nav}>
						<NavRoute title={t('home')} href="/" />
						<NavRoute title={t('about')} href="/about" />
						<NavRoute title={t('contact')} href="/contact" />
					</nav>
				</div>
			)}
		</>
	)
}
