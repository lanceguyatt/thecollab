export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export interface MenuItem {
  _id?: string
  name: string
  description: string
  slug: string
  images?: {}
  veganFriendly?: boolean
}

export interface Beer extends MenuItem {
  hops?: string
  abv?: string
  ibu?: string
}

export interface Burger extends MenuItem {}
