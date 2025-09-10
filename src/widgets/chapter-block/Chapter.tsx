// chapter.interface.ts
export interface IChapter {
	quote: string
	author: string
	bgImage: string | StaticImageData
	imageText: string | React.ReactNode
}

// Chapter.tsx
import { Heading } from '@/shared/ui'
import { FC, PropsWithChildren, useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Image, { StaticImageData } from 'next/image'
import { Quote } from '../quote/Quote'
import styles from './chapter.module.scss'
import React from 'react'

export const Chapter: FC<PropsWithChildren<IChapter>> = ({
	children,
	quote,
	author,
	bgImage,
	imageText
}) => {
	const headingContainerRef = useRef<HTMLDivElement>(null)
	const { t } = useTranslation('home')

useLayoutEffect(() => {
  let ctx: gsap.Context | null = null

  ;(async () => {
    const gsapModule = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')

    const gsap = gsapModule.gsap || gsapModule.default
    gsap.registerPlugin(ScrollTrigger)

    const headingContainer = headingContainerRef.current

    if (!headingContainer) return

    ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingContainer,
          start: 'top bottom-=20%', // When top of element hits 80% viewport height
          end: 'bottom top+=20%',   // When bottom of element hits 20% viewport height
          scrub: true,
          invalidateOnRefresh: true
        }
      })

      // Animation curve
      tl.fromTo(
        headingContainer,
        { 
          opacity: 0,
          yPercent: 20 // Start slightly below
        },
        { 
          opacity: 1,
          yPercent: 0, // Move to original position
          ease: 'power2.out',
          duration: 2
        }
      ).to(
        headingContainer,
        { 
          opacity: 0,
          yPercent: -20, // Move up while fading out
          ease: 'power2.in',
          duration: 2
        },
        '>-=0.5' // Overlap animations slightly
      )
    }, headingContainerRef)
  })()

  return () => ctx?.revert()
}, [])

	return (
		<div className={styles.chapter}>
			<div ref={headingContainerRef} className={styles.heading_container}>
				<div className={styles.imageContainer}>
					<Image
						src={bgImage}
						alt=""
						fill
						className={styles.bgImage}
						priority
					/>
					<div className={styles.overlay} />
					<span className={styles.imageText}>{imageText}</span>
				</div>
				<div className={styles.content}>
					<Heading level={2} className={styles.content_heading}>
						{children}
					</Heading>
					<div className={styles.quote}>
						<Quote quote={t(quote)} author={author} cite="" />
					</div>
				</div>
			</div>
			<div className={styles.nwBlock}></div>
		</div>
	)
}
