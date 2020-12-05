// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor (name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

// * name
    getName() {
        return this.name;
    }
// * id
    getId() {
        return this.id;
    }
// * email
    getEmail() {
        return this.email;
    }
// * officeNumber
    getOfficenumber() {
        return this.officeNumber;
    }
// * getRole() // Returns 'Manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;