export class Contact { 
    constructor(form) {
        this.fullName = form.elements["name"].value;
        this.email = form.elements["email"].value;
        this.subject = form.elements["subject"].value;
        this.body = form.elements["message"].value;
    }

    fullName = "";
    email = "";
    subject = "";
    body = "";

    send() {
        console.log(this.formatMessage());
    }

    formatMessage() {
        return `To: ${this.fullName} \nEmail: ${this.email} \nSubject: ${this.subject} \nBody: ${this.body}`;
    }
}