import { User } from './users.model';

export class Hospital {

    constructor (
        public name: string,
        public img?: string,
        public _id?: string,
        public isactive?: boolean,
        public user?:User
    ) { }

}
