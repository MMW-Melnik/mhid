// src/shared/ui/DownloadPdfButton.tsx
import { FC } from 'react'
import styles from './download-pdf-button.module.scss'
import { DownloadPdfButtonProps } from './download-pdf-button.interface'

export const DownloadPdfButton: FC<DownloadPdfButtonProps> = ({
	href = 'https://docs.google.com/document/d/1JSvFc5YhT_DCcW_B0MV3g1gQn3NWu1Il-3xSfWTcAKw/edit?tab=t.0'
}) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className={styles.button}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={styles.icon}
			viewBox="0 0 24 24"
			fill="currentColor"
		>
			<path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
			<path d="M14 3.5V9h5.5L14 3.5zM8 13h3v1H8v-1zm0 2h5v1H8v-1zm0 2h5v1H8v-1z" />
		</svg>
		<span className={styles.label}>View Report</span>
	</a>
)
