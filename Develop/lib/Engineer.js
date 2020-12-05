// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class
class Engineer {
    constructor(name, id, email, githubuser, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubuser = githubuser;
        this.github = github;
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
    // * github  // GitHub username
    getGithubuser() {
        return this.githubuser;
    }
    // * getGithub()
    getGithub() {
        return this.github;
    }
    // * getRole() // Returns 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;