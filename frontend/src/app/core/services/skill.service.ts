import { Injectable } from '@angular/core';
import { GlobalHttpService } from '../global/global.service';
import { Skills } from 'src/app/interfaces/task';
import { RequestMethod } from '../enum/httpsRequest/httpsRequest.enum';
import { SKILL_ROUTES } from '../enum/skill/skill.enum';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends GlobalHttpService {

  async createSkills(payload: Skills): Promise<Skills> {
    return await this.makeRequest<Skills, Skills>(SKILL_ROUTES.createSkill, payload, RequestMethod.POST);
  }
  async deleteSkills(id: number): Promise<Skills> {
    return await this.makeRequest<Skills, object>(SKILL_ROUTES.deleteSkill + `${id}`, {}, RequestMethod.DELETE);
  }
}
