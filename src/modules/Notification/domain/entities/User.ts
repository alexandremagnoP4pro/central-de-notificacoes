/* eslint-disable prettier/prettier */
export default class User {
    constructor(
        readonly userId: number,
        readonly clientId: string,
        readonly convenioId: string,
        readonly profile: string,
    ) { }
}
