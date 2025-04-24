import HomeImage from '@/app/assets/images/home/premonition-of-war/sofia/home.png'
import ManImage from '@/app/assets/images/home/premonition-of-war/sofia/man.png'
import DispatchImage from '@/app/assets/images/home/ww2/charlotte-dispatch.png'
import AnmeldeImage from '@/app/assets/images/home/ww2/sofia-anmelde.jpg'
import AntragImage from '@/app/assets/images/home/ww2/sofia-antrag.jpg'
import PoliceImage from '@/app/assets/images/home/ww2/sofia-hesperingen-police-memo.png'
import ReviewImage from '@/app/assets/images/home/ww2/sofia-melnik-review.png'
import ReportImage from '@/app/assets/images/home/ww2/sofia-melnyk-income-report.jpg'
import MemoirImage from '@/app/assets/images/home/ww2/sofia-memoirs-of-yevhen-malaniuk.png'

import { ImageConfig } from '@/shared/types'

export const childhoodSofiaImages: Record<'Man' | 'Home', ImageConfig> = {
	Man: {
		src: ManImage.src,
		alt: 'Portrait of Stepan Fedak. Painting by Ivan Trush. 1925 (Google.com)',
		caption:
			'Portrait of Stepan Fedak. Painting by Ivan Trush. 1925 (Google.com)'
	},
	Home: {
		src: HomeImage.src,
		alt: "The house of Stepan Fedak's family. Lviv, Ukraine (Modern photo from open sources)",
		caption:
			"The house of Stepan Fedak's family. Lviv, Ukraine (Modern photo from open sources)"
	}
}

export const worldWarTwoSofiaImages: Record<'Memoir' | 'Review' | 'Dispatch' | 'Anmelde'| 'Antracg' | 'Report' | 'Police', ImageConfig> = {
	Memoir: {
		src: MemoirImage.src,
		alt: "Image of memoirs of Yevhen Malaniuk",
		caption: "From the memoirs of Yevhen Malaniuk / Andriy Melnyk. 1890-1964. Memoirs. Documents. Correspondence / Compiled by O. Kucheruk, Y. Cherchenko. - Kyiv: Olena Teliha Publishing House, 2011, p. 102."
	},

	Review: {
		src: ReviewImage.src,
		alt: "André François-Poncet. Carnets d'un Captif",
		caption: "André François-Poncet. Carnets d'un Captif. Dans les ateliers de l'imprimerie Firmin-Didot, le Mesnil-sur-l'Estrée. 1952, p. 117"
	},

	Dispatch: {
		src: DispatchImage.src,
		alt: "A. Melnyk Dispatch Document Image",
		caption: "A. Melnyk Dispatch Document Image. Source https://catalog.archives.gov/id/139373375. P. 75"
	},

	Anmelde: {
		src: AnmeldeImage.src,
		alt: "ANLux, Police des Etrangers Document Image",
		caption: "ANLux, Police des Etrangers, Cote I-108-0454952, № 308119, Declaration of Arrival, 1946"
	},

	Antracg: {
		src: AntragImage.src,
		alt: "ANLux, Police des Etrangers Document Image",
		caption: "ANLux, Police des Etrangers, Cote I-108-0454952, № 308119, Application for residence permit for foreigners, 1946]"
	},

	Report: {
		src: ReportImage.src,
		 alt: 'Typewritten memo to the Hesperingen local police about a planned farm lease, early 1940s',
    caption: 'Administrative note asking the Hesperingen police to verify the Melnyk family’s plan to lease a farm and prove their means of subsistence (c. 1941).'
	},

	Police: {
		src: PoliceImage.src,
		alt: 'Typewritten German report on the Melnyk family’s sources of income, early 1940s',
		caption: "ANLux, Police des Etrangers, Cote I-108-0454952,  № 180, Report of the Brigadier of the Esperange commune police to the Luxembourg Attorney General, 1946, (extract)"
	}

}
