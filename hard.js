function person(){
    var pii = {
    name: "Tim",
    ssn: 000-00-000,
    phone: 123-456-7890,

    getName(){
        return this.name
    }
    };
    {
        return pii.getName()
    }
}

console.log(person());