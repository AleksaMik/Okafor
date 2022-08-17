// import employee constructor
const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
    // call employee constructor 
    super (name, id, email);
    this.github = github;

    }
    
    gitHub() {
        return this.github;
    }
    gitRole () {
        return "Engineer";
    }
}
module.exports = Engineer;