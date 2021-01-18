
export class Document {
    id: string
    documentName: string
    documentType: string

    public constructor(init?: Partial<Document>) {
        Object.assign(this, init);
    }
}