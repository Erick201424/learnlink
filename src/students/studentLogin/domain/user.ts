export class User {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly lastName: string,
        readonly email: string,
        readonly password: string,
    ) { }
}