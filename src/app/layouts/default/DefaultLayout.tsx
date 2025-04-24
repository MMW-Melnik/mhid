import { MainProvider } from '@/app/providers'
import { Footer } from '@/shared/ui'
import { Header } from '@/shared/ui/header/Header'
import '@/styles/index.scss'
import { FC, PropsWithChildren } from 'react'
import styles from './default.module.scss'
import { Intro } from '@/shared/ui'
import Bridge from '@/app/assets/images/home/bg.jpg'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<MainProvider>
				<Header />
				<div className={styles.layout}>
					<main className={styles.main}>{children}</main>
				</div>
				<Footer />
			</MainProvider>
		</>
	)
}
