import { FC, ReactNode } from 'react'
import { Footer } from '../../../shared/ui/footer/Footer'
import '../../styles/index.scss'
import styles from './default.module.scss'
import { Header } from '../../../shared/ui/header/Header'

export const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />
			<div className={styles.layout}>
				<main className={styles.main}>{children}</main>
			</div>
			<Footer />
		</>
	)
}
