import { NavRoute } from '@/shared/ui'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import styles from './mobile-menu.module.scss'

export const MobileMenu: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation('header')

	const toggleMenu = () => setIsOpen(!isOpen)

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
					className={styles.menuIcon}
					aria-label="open menu"
				/>
				<IoMdClose
					size={30}
					className={styles.closeIcon}
					aria-label="close menu"
				/>
			</div>

			{/* Меню */}
			{isOpen && (
				<>
					{/* Задний фон с затемнением */}
					<div
						className={styles.overlay}
						onClick={toggleMenu}
						aria-hidden="true"
					></div>

					{/* Само меню */}
					<div className={styles.menu} id="mobile-menu">
						{/* Кнопка закрытия */}
						<IoMdClose
							size={30}
							className={styles.mobileMenuClose}
							onClick={toggleMenu}
						/>

						{/* Навигационные ссылки */}
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
