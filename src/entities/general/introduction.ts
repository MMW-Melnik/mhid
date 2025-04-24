import KestrelImage from '@/app/assets/images/home/after-war/kestrel.jpg'
import Monument from '@/app/assets/images/home/ww2/migrants-monument.png'
import { ImageConfig } from '@/shared/types'

export const secondWorldWarIntroductionImages: Record<'Monument', ImageConfig> = {
	Monument: {
		src: Monument.src,
		alt: 'Image of monument to migrants leaving their homeland.',
		caption:
			'Monument to migrants leaving their homeland. (Sculptor Bruno Catalano). [Photo from open sources]'
	}
}

export const afterWarIntroductionImages: Record<'Kestrel', ImageConfig> = {
	Kestrel: {
		src: KestrelImage.src,
		alt: 'Image of kestrel.',
		caption:
			'Vyacheslav Mishchenko, Ukrainian photographer. [Photo from open sources]'
	}
}