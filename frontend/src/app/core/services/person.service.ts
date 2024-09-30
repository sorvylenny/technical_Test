import { Injectable } from '@angular/core';
import { GlobalHttpService } from '../global/global.service';
import { IPerson, Person, PersonPayload } from 'src/app/interfaces/task';
import { RequestMethod } from '../enum/httpsRequest/httpsRequest.enum';
import { PERSON_ROUTES } from '../enum/person/person.enum';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends GlobalHttpService {

  async createPerson(payload: PersonPayload): Promise<IPerson> {
    return await this.makeRequest<IPerson, PersonPayload>(PERSON_ROUTES.createPerson, payload, RequestMethod.POST);
  }
  async deletePerson(id: number): Promise<Person> {
    return await this.makeRequest<Person, object>(`${PERSON_ROUTES.deletePerson}/${id}`, {}, RequestMethod.DELETE);
  }

}
