import { FC, ReactNode } from 'react'
import Footer from '../../../shared/ui/footer/Footer'
import '../../styles/index.scss'
import styles from './default.module.scss'
import List from "../../../shared/ui/list/NavData"

export const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<main className={styles.main}>{children}</main>
			<Footer />
			< List />
		</div>
	)
}
