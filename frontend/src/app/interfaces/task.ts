
export interface Person {
  id?: string;
  fullName: string;
  age: number;
  skills: Skills[];
}

export interface Task {
  id?: string;
  title: string;
  limitDate: string;
  persons: Person[];
  status: string
}
export interface TaskPayload {
  title: string;
  limitDate: string;
  persons: string[];
  status: string
}

export interface Skills {
  _id?: string;
  name?: string;
}

export type IPerson = Person & {
  _id: string
}

export interface PersonPayload {
  fullName: string;
  age: number;
  skills: string[];
}
