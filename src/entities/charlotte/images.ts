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

import Chapter4FamilyImage from '@/app/assets/images/home/ww2/charlotte-family-image.jpg'
import Grande from '@/app/assets/images/home/ww2/charlotte-grande-dusche.jpg'

import GrandImage from '@/app/assets/images/home/after-war/charlotte-grand-duche.png'
import MonumentImage from '@/app/assets/images/home/after-war/charlotte-monument.png'
import YoungImage from '@/app/assets/images/home/after-war/charlotte-young-photo.jpg'

import { ImageConfig } from '@/shared/types'

export const charlotteBelleEpoqueImages: Record<
	| 'Couple'
	| 'Sisters'
	| 'House'
	| 'Rider',
	ImageConfig
> = {
	Couple: {
		src: Chapter1CoupleImage.src,
		alt: 'Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna ',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : La Famille grand-ducale et S.A.R. le Grand-Duc Guillaume - Carte numéro 12762] '
	},
	Sisters: {
		src: Chapter1SistersImage.src,
		alt: 'Princess Charlotte (second from right) with her sisters',
		caption: '[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : LL.AA.RR. les Princesses de Luxembourg - Carte numéro 12782] '
	},
	House: {
		src: Chapter1HouseImage.src,
		alt: "Princess Charlotte's home is the Berg Palace (Colmar Berg, Luxembourg). ",
		caption:
			"(Photo from open sources)"
	},
	Rider: {
		src: Chapter1RiderImage.src,
		alt: '',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. Charlotte, Princesse de Luxembourg - Carte numéro 11574]'
	}
}

export const charlotteWorldWar1Images: Record<
	'Women' | 'Prince',
	ImageConfig
> = {
	Women: {
		src: Chapter2WomenImage.src,
		alt: 'Duchess Maria Anna of Portugal with her daughters (1918) ',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : LL.AA.RR. les Princesses de Luxembourg - Carte numéro 7194] '
	},
	Prince: {
		src: Chapter2PrinceImage.src,
		alt: 'Prince Felix Bourbon-Parma',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. le Prince Félix - Carte numéro 7166] '
	}
}

export const charlotteInterwarPeriodImages: Record<
 'Princess' | 'Wedding' | 'Baby' | 'Family1',
 ImageConfig
> = {
	Princess: {
		src: Chpter3PrincessImage.src,
		alt: 'Grand Duchess Charlotte',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. Charlotte, Princesse de Luxembourg - Carte numéro 12797]  '
	},
	Wedding: {
		src: Chpter3WeddingImage.src,
		alt: 'Wedding of the Grand Duchess Charlotte and Prince Felix of Luxembourg',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte et S.A.R. le Prince Félix - Carte numéro 6259] '
	},
	Baby: {
		src: Chpter3BabyImage.src,
		alt: '',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte -Carte numéro 6202] '
	},
	Family1: {
		src: Chpter3FamilyImage.src,
		alt: '',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte -Carte numéro 6275] '
	}
}

export const charlotteWorldWarTwoImages: Record<
	'Family2' | 'Grande',
	ImageConfig
> = {
	Family2: {
		src: Chapter4FamilyImage.src,
		alt: '',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : La Famille grand-ducale et S.A.R. la Grande-Duchesse Charlotte  - Carte numéro 8154] '
	},

	Grande: {
		src: Grande.src,
		alt: '',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte  - Carte numéro 3117]'
	}
}

export const charlotteAfterWarImages: Record<
	'Grand' | 'Young' | 'Monument',
	ImageConfig
> = {
	Grand: {
		src: GrandImage.src,
		alt: 'Grand Duchess Charlotte. November, 1969',
		caption: '[Photo from open sources]'
	},
	Young: {
		src: YoungImage.src,
		alt: 'Grand Duchess Charlotte',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte  - Carte numéro 3119] '
	},
	Monument: {
		src: MonumentImage.src,
		alt: "A statue of the Grand Duchess of Luxembourg has stood in the middle of Luxembourg City's Place de Clairefontaine since 1990.",
		caption:
			"[Photo from open sources]"
	}
}
