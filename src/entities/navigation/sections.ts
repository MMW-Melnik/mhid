import { homeContentData } from '@/shared/data'



export interface SectionTitle {
  id: string
  title: string
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’'".,:;!?]/g, '')
    .replace(/\s+/g, '-')

export const parseSectionTitles = (): SectionTitle[] => {
  const sections = homeContentData.en

  return Object.entries(sections).map(([sectionKey, sectionValue]) => {
    let title: string

    if ('TITLE' in sectionValue) {
      title = (sectionValue as any).TITLE
    } else {
      const firstChapter = Object.values(sectionValue as Record<string, any>)[0]
      title = firstChapter.TITLE
    }

    return {
      id: slugify(title),
      title,
    }
  })
}
