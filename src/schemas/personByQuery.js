import { schema } from 'normalizr';

const persons = new schema.Entity('persons');

export const personListSchema = [ persons ];


