namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
  export class Java extends Subject {
    public getRequirements(): string {
      return "here is the list of requirements for Java";
    }
    public getAvailableTeacher(): string {
      if (this.teaching && this.teacher.experienceTeachingJava) {
        return `Available teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
