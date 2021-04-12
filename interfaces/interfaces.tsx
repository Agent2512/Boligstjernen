
export interface IHouse {
    id: number
    houseType: string

    address: string
    zipCode: string | number
    city: string

    houseSize: string | number
    grundSize: string | number
    price: string | number

    mainImage: string
    images: string[]

    title: string
    text: string
}

export interface ISearchForm {
    city?: string
    zipCode?: string
    id?: string
    houseType?: string //"villa" | "rækkehus" | "lejighed" | "landejendom"
    minHouseSize?: string
    minGrundSize?: string
    minPrice?: string
    maxPrice?: string
}

export interface IBlog {
    title: string
    text: string
    date: string
}