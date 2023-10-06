namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class Reat extends Subject {
    public getRequirements(): string {
      return "Hear is the list of requirements for React";
    }
    public getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
