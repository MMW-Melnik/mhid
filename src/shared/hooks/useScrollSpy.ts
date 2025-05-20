import { useEffect, useState } from 'react'

export const useScrollSpy = (
  ids: string[],
  offsetRatio = 0.6
): string => {
  const [activeId, setActiveId] = useState(ids[0] || '')

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.innerHeight * offsetRatio
      let current = ids[0]
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el) {
          const { top } = el.getBoundingClientRect()
          if (top <= trigger) current = id
        }
      })
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids.join(), offsetRatio])

  return activeId
}
