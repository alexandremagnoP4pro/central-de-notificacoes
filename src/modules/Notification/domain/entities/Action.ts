/* eslint-disable prettier/prettier */
export default class Action {
    constructor(
        readonly url: string,
        readonly title: string,
        readonly description: string,
        readonly attachFile: string,
        readonly attachDescription: string,
    ) { }
}
