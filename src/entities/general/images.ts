import Chapter3Map from '@/app/assets/images/home/interwar-period/image10.png'
import Chapter3Spike from '@/app/assets/images/home/interwar-period/image6.jpg'
import Chapter1Field from '@/app/assets/images/home/premonition-of-war/field.jpg'
import Chapter2Poppy from '@/app/assets/images/home/ww1/image32.jpg'

import { ImageConfig } from '@/shared/types'

export const generalImages: Record<
	'Field' | 'Poppy' | 'Spike' | 'Map',
	ImageConfig
> = {
	Field: {
		src: Chapter1Field.src,
		alt: 'Vyacheslav Mishchenko, Ukrainian photographer.  (Photo from open sources)',
		caption:
			'Vyacheslav Mishchenko, Ukrainian photographer.  (Photo from open sources)'
	},
	Poppy: {
		src: Chapter2Poppy.src,
		alt: 'Vyacheslav Mishchenko, Ukrainian photographer.  (Photo from open sources)',
		caption:
			'Vyacheslav Mishchenko, Ukrainian photographer.  (Photo from open sources)'
	},
	Map: {
		src: Chapter3Map.src,
		alt: 'Vyacheslav Mishchenko, Ukrainian photographer.  (Photo from open sources)',
		caption:
			'Vyacheslav Mishchenko, Ukrainian photographer.  (Photo from open sources)'
	},
	Spike: {
		src: Chapter3Spike.src,
		alt: 'Vyacheslav Mishchenko, Ukrainian photographer.  (Photo from open sources)',
		caption:
			'Vyacheslav Mishchenko, Ukrainian photographer.  (Photo from open sources)'
	}
}
