import { useState, useEffect } from 'react'

export const useLanguage = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [selectedLanguage, setSelectedLanguage] = useState('en')

	const handleLanguageChange = (lng: string) => {
		setSelectedLanguage(lng)
		setDropdownOpen(false)
	}

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen)
	}

	useEffect(() => {
		const lng = navigator.language.substring(0, 2)
		setSelectedLanguage(lng)
	}, [])

	return {
		dropdownOpen,
		selectedLanguage,
		handleLanguageChange,
		toggleDropdown
	}
}
