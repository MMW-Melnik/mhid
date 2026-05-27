import {
	BiLogoFacebook,
	BiLogoLinkedin,
	BiMessage,
	BiPhone
} from 'react-icons/bi'

// Empty `link` values intentionally hide the card (see SocialMediaCard).
// Fill in the real URLs for Zhanna's Facebook and LinkedIn when available.
export const socialMediaData = [
	{
		title: 'Facebook',
		alt: 'facebook icon',
		link: '',
		icon: BiLogoFacebook
	},
	{
		title: 'LinkedIn',
		alt: 'linkedin icon',
		link: '',
		icon: BiLogoLinkedin
	},
	{
		title: 'Phone',
		alt: 'phone icon',
		link: 'tel:+352661456785',
		icon: BiPhone
	},
	{
		title: 'Email',
		alt: 'email icon',
		link: 'mailto:mhid.cooperation@gmail.com',
		icon: BiMessage
	}
]
