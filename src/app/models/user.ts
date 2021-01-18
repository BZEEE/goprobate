

export class User {
    id: string
    email: string
    password: string
    fullName: string
    companyName: string
    address: string

    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}