import CoupleImage from '@/app/assets/images/home/premonition-of-war/charlotte/couple.jpg'
import HouseImage from '@/app/assets/images/home/premonition-of-war/charlotte/house.jpg'
import RiderImage from '@/app/assets/images/home/premonition-of-war/charlotte/rider.jpg'
import SistersImage from '@/app/assets/images/home/premonition-of-war/charlotte/sisters.jpg'

import Family from '@/app/assets/images/home/ww2/charlotte-family-image.jpg'
import Grande from '@/app/assets/images/home/ww2/charlotte-grande-dusche.jpg'

import { ImageConfig } from '@/shared/types'

export const childhoodCharlotteImages: Record<
	'Couple' | 'House' | 'Rider' | 'Sisters',
	ImageConfig
> = {
	Couple: {
		src: CoupleImage.src,
		alt: 'Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna',
		caption:
			'Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna'
	},
	House: {
		src: HouseImage.src,
		alt: "Princess Charlotte's home is the Berg Palace (Colmar Berg, Luxembourg). (Photo from open sources)",
		caption:
			"Princess Charlotte's home is the Berg Palace (Colmar Berg, Luxembourg). (Photo from open sources)"
	},
	Rider: {
		src: RiderImage.src,
		alt: '[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. Charlotte, Princesse de Luxembourg - Carte numéro 11574] ',
		caption:
			'[Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. Charlotte, Princesse de Luxembourg - Carte numéro 11574] '
	},
	Sisters: {
		src: SistersImage.src,
		alt: 'Princess Charlotte (second from right) with her sisters',
		caption: 'Princess Charlotte (second from right) with her sisters'
	}
}


export const charlotteWorldWarTwoImages: Record<'Family' | 'Grande', ImageConfig> = {
	Family: {
		src: Family.src,
		alt: 'Charlotte with her family',
		caption: 'Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : La Famille grand-ducale et S.A.R. la Grande-Duchesse Charlotte  - Carte numéro 8154'
	},

	Grande: {
		src: Grande.src,
		alt: "Grande-Duchesse Charlotte Portrait",
		caption: "Bibliothèque nationale de Luxembourg, Luxemburgensia online, Collection des cartes postales : La Famille grand-ducale - Série : S.A.R. la Grande-Duchesse Charlotte  - Carte numéro 3117"
	}
}