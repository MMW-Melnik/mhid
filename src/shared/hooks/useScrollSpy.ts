import { useEffect, useState } from 'react'

export const useScrollSpy = (ids: string[]): string => {
  const [activeId, setActiveId] = useState(ids[0] || '')
  useEffect(() => {
    const onScroll = () => {
      const midpoint = window.scrollY + window.innerHeight / 2
      let current = ids[0]
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= midpoint) current = id
      })
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return activeId
}