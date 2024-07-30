import gsap from 'gsap'
import { FC, useEffect, useRef } from 'react'
import { Heading } from '../heading/Heading'
import styles from './loader.module.scss'

interface ILoaderProps {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const Loader: FC<ILoaderProps> = ({ setLoading }) => {
	const preloaderRef = useRef(null)
	useEffect(() => {
		const timeline = gsap.timeline({
			onComplete: () => setLoading(false)
		})

		if (preloaderRef.current) {
			timeline.to(preloaderRef.current, {
				duration: 2.0,
				opacity: 0,
				display: 'none',
				ease: 'power3.inOut'
			})
		}
	}, [setLoading])

	return (
		<div ref={preloaderRef} className={styles.loader}>
			<Heading level={2}> MHID </Heading>
		</div>
	)
}
