import { Categories } from "./categories.model"


export class Brand {
    id: number
  
    name:	string
    order: number
    logoURL: string
    active: boolean
    categories: Categories
}

