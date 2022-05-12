export type ErrorMessages = {
    code:string,
    expected: string,
    received: string,
    path: any,
    message: string
}

export type ErrorMessage = {
    issues: ErrorMessages[]
}
