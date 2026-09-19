export type Icons = {
    world: string,
    business: string,
    legal: string,
    technology: string,
    science: string
    health: string,
    sports: string,
    entertainment: string,
    lifestyle: string,
    food: string,
    programming: string,
    regional: string,
    general: string
}

export type Article = {
    id: string,
    author: string,
    image: string,
    language: string,
    published: string,
    title: string,
    description: string,
    url: string,
    category: string[],
    source_category: string[]
}

export type Location = {
    article: Article,
    icon: any,
    lon: number,
    lat: number,
    mainCategory: string,
    place: string
}