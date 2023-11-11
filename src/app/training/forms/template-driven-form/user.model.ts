export class User {
    constructor(
        public id: number = 0,
        public firstname: string = '',
        public lastname: string = '',
        public email: string = '',
        public phone: string = '',
        public state: string = '',
        public country?: string,
        public password: string = '',
    ) { }
}

type LoginUser = Pick<User, 'email' | 'password'>;