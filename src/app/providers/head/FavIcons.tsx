import androidChromeSmall from '@/app/assets/favicons/android-chrome-192x192.png'
import androidChromeLarge from '@/app/assets/favicons/android-chrome-512x512.png'
import appleTouchIcon from '@/app/assets/favicons/apple-touch-icon.png'
import favIcon from '@/app/assets/favicons/favicon.ico'
import Head from 'next/head'

export const FavIcons = () => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href={favIcon.src} type="image/x-icon" />
				<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/favicons/apple-touch-icon-57x57.png"
				/>
				<link rel="apple-touch-icon" sizes="72x72" href={appleTouchIcon.src} />
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/favicons/apple-touch-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href={appleTouchIcon.src}
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href={appleTouchIcon.src}
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href={appleTouchIcon.src}
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href={appleTouchIcon.src}
				/>
				<link
					rel="apple-touch-icon"
					sizes="192x192"
					href={androidChromeSmall.src}
				/>
				<link
					rel="android-chrome"
					sizes="512x512"
					href={androidChromeLarge.src}
				/>
			</Head>
		</>
	)
}
