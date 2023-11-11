export interface Entries {
    count: number,
    entries: EntryItems[]
}
export interface EntryItems {
    API: string,
    Description: string,
    Auth: string,
    HTTPS: boolean,
    Cors: string,
    Link: string,
    Category: string,
}


export interface UserObservable {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    active: boolean,
};

export type Login = Pick<UserObservable, 'email' | 'password'>;
