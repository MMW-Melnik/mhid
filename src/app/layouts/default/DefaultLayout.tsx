import { FC, ReactNode } from 'react'
import Footer from '../../../shared/ui/footer/Footer'
import '../../styles/index.scss'
import styles from './default.module.scss'

export const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<main>{children}</main>
			<Footer />
		</div>
	)
}
