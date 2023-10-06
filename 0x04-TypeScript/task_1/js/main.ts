interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperiance?: number;
  location: string;
  [key: string]: any;
}
