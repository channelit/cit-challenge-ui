export class User {
    private static DEFAULT = '';
    public firstName: string;
    public lastName: string;
    public username: string;
    public initial: string;
    public middleName: string;
    public suffix: string;
    public uniqueIdentifier: string;

    constructor() {
        this.firstName = User.DEFAULT;
        this.lastName = User.DEFAULT;
        this.username = User.DEFAULT;
        this.initial = User.DEFAULT;
        this.middleName = User.DEFAULT;
        this.suffix = User.DEFAULT;
        this.uniqueIdentifier = User.DEFAULT;
    }
}