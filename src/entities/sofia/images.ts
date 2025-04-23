import HomeImage from '@/app/assets/images/home/premonition-of-war/sofia/home.png'
import ManImage from '@/app/assets/images/home/premonition-of-war/sofia/man.png'

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
