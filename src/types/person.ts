export type Person = {
    name: string,
    age: number,
    siblings: Sibling[],
    metaData: MetaData[],
    active: boolean,
}

export type Sibling = {
    name: string,
}

export type MetaData = {
    data?: string,
}

