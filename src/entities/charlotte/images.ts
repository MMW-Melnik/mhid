import Chpter3PrincessImage from '@/app/assets/images/home/interwar-period/charlotte/image1.jpg'
import Chpter3FamilyImage from '@/app/assets/images/home/interwar-period/charlotte/image16.jpg'
import Chpter3BabyImage from '@/app/assets/images/home/interwar-period/charlotte/image35.jpg'
import Chpter3WeddingImage from '@/app/assets/images/home/interwar-period/charlotte/image38.jpg'
import Chapter1CoupleImage from '@/app/assets/images/home/premonition-of-war/charlotte/couple.jpg'
import Chapter1HouseImage from '@/app/assets/images/home/premonition-of-war/charlotte/house.jpg'
import Chapter1RiderImage from '@/app/assets/images/home/premonition-of-war/charlotte/rider.jpg'
import Chapter1SistersImage from '@/app/assets/images/home/premonition-of-war/charlotte/sisters.jpg'
import Chapter2PrinceImage from '@/app/assets/images/home/ww1/charlotte/image2.jpg'
import Chapter2WomenImage from '@/app/assets/images/home/ww1/charlotte/image7.png'

import Family from '@/app/assets/images/home/ww2/charlotte-family-image.jpg'
import Grande from '@/app/assets/images/home/ww2/charlotte-grande-dusche.jpg'

import GrandImage from '@/app/assets/images/home/after-war/charlotte-grand-duche.png'
import MonumentImage from '@/app/assets/images/home/after-war/charlotte-monument.png'
import YoungImage from '@/app/assets/images/home/after-war/charlotte-young-photo.jpg'

import { ImageConfig } from '@/shared/types'

export const childhoodCharlotteImages: Record<
	| 'Couple'
	| 'House'
	| 'Rider'
	| 'Sisters'
	| 'Women'
	| 'Prince'
	| 'Princess'
	| 'Wedding'
	| 'Baby'
	| 'Family',
	ImageConfig
> = {
	Couple: {
		src: Chapter1CoupleImage.src,
		alt: 'Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna',
		caption:
			'Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna'
	},
	House: {
		src: Chapter1HouseImage.src,
		alt: "Princess Charlotte's home is the Berg Palace (Colmar Berg, Luxembourg). (Photo from open sources)",
		caption:
			"Princess Charlotte's home is the Berg Palace (Colmar Berg, Luxembourg). (Photo from open sources)"
	},
	Rider: {
		src: Chapter1RiderImage.src,
		alt: 'Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. Charlotte, Princesse de Luxembourg - Carte numéro 11574',
		caption:
			'Bibliothèque nationale de Luxembourg, Luxemburgensia online,\nCollection des cartes postales : La Famille grand-ducale - Série : S.A.R. Charlotte, Princesse de Luxembourg - Carte numéro 11574'
	},
	Sisters: {
		src: Chapter1SistersImage.src,
		alt: 'Princess Charlotte (second from right) with her sisters',
		caption: 'Princess Charlotte (second from right) with her sisters'
	},
	Women: {
		src: Chapter2WomenImage.src,
		alt: 'Duchess Maria Anna of Portugal with her daughters (1918) [Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : LL.AA.RR. les Princesses de Luxembourg - Carte numéro 7194] ',
		caption:
			'Duchess Maria Anna of Portugal with her daughters (1918) [Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : LL.AA.RR. les Princesses de Luxembourg - Carte numéro 7194] '
	},
	Prince: {
		src: Chapter2PrinceImage.src,
		alt: 'Prince Felix Bourbon-Parma[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. le Prince Félix - Carte numéro 7166] ',
		caption:
			'Prince Felix Bourbon-Parma[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. le Prince Félix - Carte numéro 7166] '
	},
	Princess: {
		src: Chpter3PrincessImage.src,
		alt: 'Grand Duchess Charlotte[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. Charlotte, Princesse de Luxembourg - Carte numéro 12797] ',
		caption:
			'Grand Duchess Charlotte[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. Charlotte, Princesse de Luxembourg - Carte numéro 12797] '
	},
	Wedding: {
		src: Chpter3WeddingImage.src,
		alt: 'Wedding of the Grand Duchess Charlotte and Prince Felix of Luxembourg[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte et S.A.R. le Prince Félix - Carte numéro 6259]',
		caption:
			'Wedding of the Grand Duchess Charlotte and Prince Felix of Luxembourg[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte et S.A.R. le Prince Félix - Carte numéro 6259] '
	},
	Baby: {
		src: Chpter3BabyImage.src,
		alt: '[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte -Carte numéro 6202] ',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte - [Carte numéro 6202] '
	},
	Family: {
		src: Chpter3FamilyImage.src,
		alt: '[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte - [Carte numéro 6275] ',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte - [Carte numéro 6275] '
	}
}

export const charlotteWorldWarTwoImages: Record<
	'Family' | 'Grande',
	ImageConfig
> = {
	Family: {
		src: Family.src,
		alt: 'Charlotte with her family',
		caption:
			'Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : La Famille grand-ducale et S.A.R. la Grande-Duchesse Charlotte  - Carte numéro 8154'
	},

	Grande: {
		src: Grande.src,
		alt: 'Grande-Duchesse Charlotte Portrait',
		caption:
			'Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte  - Carte numéro 3117'
	}
}

export const charlotteAfterWarImages: Record<
	'Grand' | 'Young' | 'Monument',
	ImageConfig
> = {
	Grand: {
		src: GrandImage.src,
		alt: 'Grande-Duchesse Charlotte Portrait',
		caption: 'Grand Duchess Charlotte. November, 1969 [Photo from open sources]'
	},
	Young: {
		src: YoungImage.src,
		alt: 'Grande-Duchesse Charlotte Portrait',
		caption:
			'Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte  - Carte numéro 3119'
	},
	Monument: {
		src: MonumentImage.src,
		alt: 'Monument to the Grand Duchess Charlotte in Luxembourg City',
		caption:
			"A statue of the Grand Duchess of Luxembourg has stood in the middle of Luxembourg City's Place de Clairefontaine since 1990. [Photo from open sources]"
	}
}
