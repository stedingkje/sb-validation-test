export type Bar = {
    name: string,
    address: string,
    // ToDo: Proccessing in table
    drinks?: Drink[],
}

export type Drink = {
    beer?: string[],
    cocktail?: string[],
}
