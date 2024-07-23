import { FC, ReactNode } from 'react'
import { Footer } from '../../../shared/ui'
import { Header } from '../../../shared/ui/header/Header'
import '../../styles/index.scss'
import styles from './default.module.scss'

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
