import { NavRoute } from '@/shared/ui'
import { FC, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { useMobileMenu } from '../model/useMobileMenu'
import styles from './mobile-menu.module.scss'

export const MobileMenu: FC = () => {
	const { isOpen, toggleMenu, isLoaded, menuRef } = useMobileMenu()
	const { t } = useTranslation('header')
	const overlayRef = useRef<HTMLDivElement>(null)

	if (!isLoaded) {
		return null
	}

	return (
		<>
			<div
				className={`${styles.iconWrapper} ${isOpen ? styles.open : ''}`}
				onClick={toggleMenu}
				aria-expanded={isOpen}
				aria-controls="mobile-menu"
			>
				<IoMdMenu
					size={30}
					className={`${styles.icon} ${styles.menuIcon}`}
					aria-hidden={!isOpen}
					aria-label="open menu"
				/>
				<IoMdClose
					size={30}
					className={`${styles.icon} ${styles.closeIcon}`}
					aria-hidden={isOpen}
					aria-label="close menu"
				/>
			</div>

			{isOpen && (
				<>
					<div
						className={styles.overlay}
						ref={overlayRef}
						onClick={toggleMenu}
						aria-hidden="true"
					></div>
					<div className={styles.menu} ref={menuRef} id="mobile-menu">
						<IoMdClose
							size={30}
							className={styles.mobileMenuClose}
							onClick={toggleMenu}
						/>
						<nav className={styles.nav}>
							<NavRoute className={styles.route} title={t('home')} href="/" />
							<NavRoute
								className={styles.route}
								title={t('about')}
								href="/about"
							/>
							<NavRoute
								className={styles.route}
								title={t('contact')}
								href="/contact"
							/>
						</nav>
					</div>
				</>
			)}
		</>
	)
}
