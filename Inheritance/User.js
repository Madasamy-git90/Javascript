class User {    
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return `${this.name} (${this.email})`;
    }
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }

    getInfo() {
        return `${super.getInfo()} - Role: ${this.role}`;
    }
}

class Guest extends User {
    constructor(name, email) {
        super(name, email);
    }

    getInfo() {
        return `${super.getInfo()} - Guest User`;
    }
}

const admin = new Admin("Alice", "alice@example.com", "Administrator");
console.log(admin.getInfo());  // Output: Alice (alice@example.com) - Role: Administrator

const guest = new Guest("Bob", "bob@example.com");
console.log(guest.getInfo());  // Output: Bob (bob@example.com) - Guest User