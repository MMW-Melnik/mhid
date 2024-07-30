import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { setCookie, getCookie } from 'cookies-next'

export const useLanguage = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [selectedLanguage, setSelectedLanguage] = useState('en')
	const { t, i18n } = useTranslation()

	const handleLanguageChange = (lng: string) => {
		setSelectedLanguage(lng)
		setDropdownOpen(false)
		i18n.changeLanguage(lng)
		setCookie('i18next', lng)
	}

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen)
	}

	useEffect(() => {
		const lng = getCookie('i18next') || 'en'
		setSelectedLanguage(lng)
		i18n.changeLanguage(lng)
	}, [i18n])

	return {
		dropdownOpen,
		selectedLanguage,
		handleLanguageChange,
		toggleDropdown,
		t
	}
}
