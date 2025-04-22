import CrownPrinceImage from '@/app/assets/images/home/premonition-of-war/charlotte/crown-prince-wife.jpg'
import ResidenceBergImage from '@/app/assets/images/home/premonition-of-war/charlotte/residence-berg-palace.jpg'
import SistersImage from '@/app/assets/images/home/premonition-of-war/charlotte/sisters-together.jpg'
import { ImageConfig } from '@/shared/types'

export const childhoodCharlotteImages: Record<
  'crownPrince' | 'sisters' | 'residence',
  ImageConfig
> = {
  crownPrince: {
    src: CrownPrinceImage.src,
    alt: 'Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna',
    caption: 'Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna',
  },
  sisters: {
    src: SistersImage.src,
    alt: 'Princess Charlotte (second from right) with her sisters',
    caption: 'Princess Charlotte (second from right) with her sisters',
  },
  residence: {
    src: ResidenceBergImage.src,
    alt: "Princess Charlotte's home is the Berg Palace (ColmarBerg, Luxembourg)",
    caption: "Princess Charlotte's home is the Berg Palace (ColmarBerg, Luxembourg)",
  },
}