interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTask(): string;
}

Class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
    }

  getToWork(): string {
    return "Getting a coffee break";
    }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

Class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  
  getCofeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();  
  }
}

function isDirector(employee: any): boolean {
  if (employee.constructor.name === Director) {
    return true;
  } else {
    return false;
  }
}

function executeWork(employee: any) {
  if (employee.constructor.name === Director) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";  
  } else {
    return  
  }
}
