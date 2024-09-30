import { environment } from "src/environments/environment";

export const PERSON_ROUTES = {
  createPerson: `${environment.api}/person/createPerson`,
  deletePerson: `${environment.api}/person/deletePerson`,
}
