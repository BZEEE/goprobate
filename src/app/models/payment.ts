
export class Payment {
    id: string
    paymentName: string
    paymentDate: string
    paymentAmount: number

    public constructor(init?: Partial<Payment>) {
        Object.assign(this, init);
    }
}