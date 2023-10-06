interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperiance?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction{
  (firstName: string, lastName: string) : string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const lastname = lastName.charAt(0).toUpperCase() + lastname.slice(1);
  return `${firstLetter}. ${lastname}`;
};

interface studentClass {
  workOnHomework(): string;
  displayName(): string;
  new (firstName: string, lastName:string) : studentClass;
}

Class StudentClass implements studentClass{
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName
  }
  
  workOnHomework(): string {
    return "Currently working";
  }
  
  displayName(): string {
    return this.firstName;
  }
  
}
