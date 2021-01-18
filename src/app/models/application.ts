
export class Application {
    applicationName: string
    applicationType: string

    public constructor(init?: Partial<Application>) {
        Object.assign(this, init);
    }
}