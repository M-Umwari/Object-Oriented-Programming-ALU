// University class
class University {
  constructor(name) {
    this.name = name;
    this.residences = [];
  }

  addResidence(residence) {
    this.residences.push(residence);
  }

  getResidence(name) {
    return this.residences.find((residence) => residence.name === name);
  }
}

// Residence class
class Residence {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.maintenanceRequests = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  removeStudent(studentId) {
    this.students = this.students.filter(
      (student) => student.studentId !== studentId
    );
  }

  submitMaintenanceRequest(request) {
    this.maintenanceRequests.push(request);
  }
}

// Student class
class Student {
  constructor(name, studentId) {
    this.name = name;
    this.studentId = studentId;
  }
}

// MaintenanceRequest class
class MaintenanceRequest {
  constructor(description, student) {
    this.description = description;
    this.student = student;
    this.status = 'Pending';
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

// Example usage
const university = new University('ALU University');
const residence = new Residence('Residence Hall 1');
const student = new Student('John Doe', '12345');
const request = new MaintenanceRequest('Leaky faucet', student);

university.addResidence(residence);
residence.addStudent(student);
residence.submitMaintenanceRequest(request);

console.log(university);
console.log(residence);
console.log(request);
