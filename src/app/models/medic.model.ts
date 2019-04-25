import { User } from './users.model';
import { Hospital } from './hospital.model';

export class Medic {

    constructor(
        public name?: string,
        public img?: string,
        public user?: User,
        public hospital?: Hospital,
        public _id?: string
    ) { }
}
