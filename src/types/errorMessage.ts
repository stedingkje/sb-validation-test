export type ErrorMessage = {
    code:string,
    expected: string,
    received: string,
    path: any,
    message: string
}

export type ErrorMessages = {
    issues: ErrorMessage[]
}
