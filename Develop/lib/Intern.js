// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(name, id, email, schoolName, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.schoolName = schoolName;
        this.school = school;
    }

    // * name
    getName() {
        return this.name;
    }
    // * id
    getID() {
        return this.id;
    }
    // * email
    getEmail() {
        return this.email;
    }
    // * school name
    getSchoolname() {
        return this.schoolName;
    } 
    // * getSchool()
    getSchool() {
        return this.school;
    }
    // * getRole() // Overridden to return 'Intern'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;