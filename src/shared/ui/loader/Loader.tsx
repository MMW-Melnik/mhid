import gsap from 'gsap'
import { FC, useEffect, useRef } from 'react'
import { Heading } from '../heading/Heading'
import styles from './loader.module.scss'

interface ILoaderProps {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const Loader: FC<ILoaderProps> = ({ setLoading }) => {
	const preloaderRef = useRef(null)
	const progressBarRef = useRef(null)

	useEffect(() => {
		const timeline = gsap.timeline({
			onComplete: () => setLoading(false)
		})

		if (preloaderRef.current && progressBarRef.current) {
			timeline
				.to(progressBarRef.current, {
					duration: 3.0,
					width: '100%',
					ease: 'power3.inOut'
				})
				.to(preloaderRef.current, {
					duration: 1.0,
					opacity: 0,
					display: 'none',
					ease: 'power3.inOut'
				})
		}
	}, [setLoading])

	return (
		<div ref={preloaderRef} className={styles.loader}>
			<Heading level={2}>MHID</Heading>
			<div className={styles['progress-bar']}>
				<div ref={progressBarRef} className={styles.progress}></div>
			</div>
		</div>
	)
}
