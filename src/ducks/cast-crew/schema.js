import { schema } from 'normalizr';

const cast = new schema.Entity('cast');

const crew = new schema.Entity('crew', undefined, {
  idAttribute: value => value.credit_id
});

export const castSchema = [cast];
export const crewSchema = [crew];
