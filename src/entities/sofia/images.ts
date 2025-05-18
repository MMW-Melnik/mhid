import HomeImage from '@/app/assets/images/home/premonition-of-war/sofia/home.png'
import ManImage from '@/app/assets/images/home/premonition-of-war/sofia/man.png'
import DispatchImage from '@/app/assets/images/home/ww2/charlotte-dispatch.png'
import AnmeldeImage from '@/app/assets/images/home/ww2/sofia-anmelde.jpg'
import AntragImage from '@/app/assets/images/home/ww2/sofia-antrag.jpg'
import PoliceImage from '@/app/assets/images/home/ww2/sofia-hesperingen-police-memo.png'
import ReviewImage from '@/app/assets/images/home/ww2/sofia-melnik-review.png'
import ReportImage from '@/app/assets/images/home/ww2/sofia-melnyk-income-report.jpg'
import MemoirImage from '@/app/assets/images/home/ww2/sofia-memoirs-of-yevhen-malaniuk.png'
import Chapter1HomeImage from '@/app/assets/images/home/premonition-of-war/sofia/home.png'
import Chapter1ManImage from '@/app/assets/images/home/premonition-of-war/sofia/man.png'

import SofiaImage1 from '@/app/assets/images/home/after-war/sofia-1.png'
import SofiaImage2 from '@/app/assets/images/home/after-war/sofia-2.png'
import SofiaImage3 from '@/app/assets/images/home/after-war/sofia-3.png'
import SofiaImage4 from '@/app/assets/images/home/after-war/sofia-4.png'
import SofiaImage from '@/app/assets/images/home/after-war/sofia.png'

import Andrey1 from '@/app/assets/images/home/after-war/andrey-1.png'
import Andrey2 from '@/app/assets/images/home/after-war/andrey-2.png'
import Andrey3 from '@/app/assets/images/home/after-war/andrey-3.png'
import Andrey from '@/app/assets/images/home/after-war/andrey.png'

import CemeteryImage from '@/app/assets/images/home/after-war/sofia-cemetery.png'
import DocImage from '@/app/assets/images/home/after-war/sofia-doc.jpg'
import HouseImage from "@/app/assets/images/home/after-war/sofia-house.png"
import ObituaryImage from '@/app/assets/images/home/after-war/sofia-obituary-image.png'

import { ImageConfig } from '@/shared/types'

export const sofiaBelleEpoqueImages: Record<'Man' | 'Home', ImageConfig> = {
	Man: {
		src: Chapter1ManImage.src,
		alt: 'Portrait of Stepan Fedak. Painting by Ivan Trush. 1925 ',
		caption: '(Google.com)'
	},
	Home: {
		src: Chapter1HomeImage.src,
		alt: "The house of Stepan Fedak's family. Lviv, Ukraine",
		caption: '(Modern photo from open sources)'
	}
}

export const sofiaWorldWar1Images: Record<string, ImageConfig> = {

}

export const sofiaInterwarPeriodImages: Record<string, ImageConfig> = {

}

export const worldWarTwoSofiaImages: Record<
	| 'Memoir'
	| 'Review'
	| 'Dispatch'
	| 'Anmelde'
	| 'Antracg',
	ImageConfig
> = {
	Memoir: {
		src: MemoirImage.src,
		alt: 'From the memoirs of Yevhen Malaniuk',
		caption:
			'[From the memoirs of Yevhen Malaniuk / Andriy Melnyk. 1890-1964. Memoirs. Documents. Correspondence / Compiled by O. Kucheruk, Y. Cherchenko. - Kyiv: Olena Teliha Publishing House, 2011, p. 102.]'
	},

	Review: {
		src: ReviewImage.src,
		alt: "",
		caption:
			"[Source : André François-Poncet. Carnets d'un Captif. Dans les ateliers de l'imprimerie Firmin-Didot, le Mesnil-sur-l'Estrée. 1952, p. 117]"
	},

	Dispatch: {
		src: DispatchImage.src,
		alt: '',
		caption:
			'[https://catalog.archives.gov/id/139373375. P. 75] '
	},

	Anmelde: {
		src: AnmeldeImage.src,
		alt: '',
		caption:
			'[ANLux, Police des Etrangers, Cote I-108-0454952, № 308119, Declaration of Arrival, 1946].'
	},

	Antracg: {
		src: AntragImage.src,
		alt: '',
		caption:
			'[Source : ANLux, Police des Etrangers, Cote I-108-0454952, No. 308119, Declaration of Arrival, 1946, (extract)]'
	},
}


export const afterWarSofiaImages: Record<'Sofia1' | 'Sofia2' | 'Sofia3' | 'Sofia4' | 'Andrey1'| 'Andrey2' | 'Andrey3' | "Andrey" | "Sofia" | 'Doc' | 'Obituary' | 'House' | 'Cemetery', ImageConfig> = {
	Sofia1: {
		src: SofiaImage1.src,
		alt: '',
		caption:' ANLux, Police des Étrangers, Cote I-108-0454952. № 308119. Application for renewal of the foreign card, 1956, (extract)'
	},
	Sofia2: {
		src: SofiaImage2.src,
		alt: '',
		caption: 'ANLux, Police des Étrangers, Cote I-108-0454952. № 308119. Application for renewal of the foreign card, 1959, (extract)'
	},
	Sofia3: {
		src: SofiaImage3.src,
		alt: '',
		caption: 'ANLux, Police des Étrangers, Cote I-108-0454952. № 308119. Application for renewal of the foreign card, 1963, (extract)'
	},
	Sofia4: {
		src: SofiaImage4.src,
		alt: '',
		caption: 'ANLux, Police des Étrangers, Cote I-108-0454952. № 308119. Application for renewal of the foreign card, 1965, (extract)'
	},
	Andrey1: {
		src: Andrey1.src,
		alt: '',
		caption: 'ANLux, Police des Étrangers, Cote I-108-0454952. № 308119. Application for renewal of the foreign card, 1956, (extract)'
	},
	Andrey2: {
		src: Andrey2.src,
		alt: '',
		caption: 'ANLux, Police des Étrangers, Cote I-108-0454952. № 308119. Application for renewal of the foreign card, 1958, (extract)'
	},
	Andrey3: {
		src: Andrey3.src,
		alt: '',
		caption: 'ANLux, Police des Étrangers, Cote I-108-0454952. № 308119. Application for renewal of the foreign card, 1961, (extract)'
	},
	Andrey: {
		src: Andrey.src,
		alt: '',
		caption: '[Source : ANLux, Police des Étrangers, Cote I-108-0454952. № 308119. Application for renewal of the foreign card, 1963, (extract)]'
	},

	Sofia: {
		src: SofiaImage.src,
		alt: '',
		caption: '[Source : ANLux, Police des Étrangers, Cote I-108-0454952. № 308119. Application for renewal of the foreign card, 1970, (extract)]'
	},

	Doc: {
		src: DocImage.src,
		alt: "ANLux, Police des Etrangers, Cote I-108-0454952,  № 3825, Letter from the Minister of Justice to Mr. Corbert Prussen, Lieutenant-Adjutant of the Grand Duke's Palace, 1946",
		caption: "ANLux, Police des Etrangers, Cote I-108-0454952,  № 3825, Letter from the Minister of Justice to Mr. Corbert Prussen, Lieutenant-Adjutant of the Grand Duke's Palace, 1946"
	},

	Obituary: {
		src: ObituaryImage.src,
		alt: "Andriy Melnyk. Obituary",
		caption: "Andriy Melnyk. Obituary. Luxemburger Wort, Wednesday, 11 November, 1964 (extract)"
	},

	House: {
		src: HouseImage.src,
		alt: "",
		caption:
			"(Photo from open sources)"
	},

	Cemetery: {
		src: CemeteryImage.src,
		alt: "Monument to A. Melnyk at the cemetery of Bonnevoie, Luxembourg",
		caption:
			"[Photo from open sources]"
	}

	
	
}