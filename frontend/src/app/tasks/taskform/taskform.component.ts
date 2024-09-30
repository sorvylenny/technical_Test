import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Path } from 'src/app/core/enum/listTask/listTask.enum';
import { Status } from 'src/app/core/enum/status/status.enum';
import { PersonService } from 'src/app/core/services/person.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { TaskService } from 'src/app/core/services/task.service';
import { PersonPayload, Skills, Task, TaskPayload } from 'src/app/interfaces/task';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private personService: PersonService,
    private skillService: SkillService,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      limitDate: ['', Validators.required],
      title: ['', Validators.required],
      completed: [''],
      persons: this.fb.array([], Validators.required),
    });
  }

  get persons(): FormArray {
    return this.taskForm.get('persons') as FormArray;
  }

  addPerson() {
    const personFormGroup = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array([], Validators.required),
    });
    this.persons.push(personFormGroup);
  }
  getSkills(person: AbstractControl): FormArray {
    return person.get('skills') as FormArray;
  }
  addSkill(index: number) {
    const skills = this.getSkills(this.persons.at(index));
    skills.push(this.fb.group({
      name: ['', Validators.required]
    }));
  }

  removeSkill(personIndex: number, skillIndex: number) {
    const skills = this.getSkills(this.persons.at(personIndex));
    if (skills.length > 1) {
      skills.removeAt(skillIndex);
    } else {
      alert("Debe haber al menos una habilidad.");
    }
  }
  removePerson(index: number) {
    this.persons.removeAt(index);
  }

  async onSubmit() {
    const taskData: Task = this.taskForm.value;

    try {
      const personIds: string[] = [];

      const currentHour = new Date().getHours();
      const status = currentHour % 2 === 0 ? Status.COMPLETED : Status.PENDING;

      for (const person of taskData.persons) {
        const skillPromises = person.skills.map(skillName => {
          const skillPayload: Skills = { name: skillName.name };
          return this.skillService.createSkills(skillPayload);
        });

        const createdSkills = await Promise.all(skillPromises);

        person.skills = createdSkills.map(skill => ({ _id: skill._id, name: skill.name }));

        const personPayload: PersonPayload = {
          fullName: person.fullName,
          age: person.age,
          skills: person.skills.map(skill => skill._id as string)
        };

        const createdPerson = await this.personService.createPerson(personPayload);
        personIds.push(createdPerson._id);
      }


      const taskPayload: TaskPayload = {
        title: taskData.title,
        limitDate: taskData.limitDate,
        persons: personIds,
        status: status
      };

      await this.taskService.createTask(taskPayload);
      this.router.navigate([Path.LISTASK]);
      this.taskForm.reset();

    } catch (error) {
      console.error('Error creando la tarea:', error);
    }
  }


  sanitizeAge(event: any) {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
  }

  preventInput(event: KeyboardEvent) {
    event.preventDefault();
  }

  goList() {
    this.router.navigate([Path.LISTASK]);
  }
}
