
export class Application {
    id: string
    applicationName: string
    applicationType: string

    public constructor(init?: Partial<Application>) {
        Object.assign(this, init);
    }
}