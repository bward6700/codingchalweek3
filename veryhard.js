//1

class person{
    constructor(name,age,job){
        this.name= name;
        this.age = age;
        this.job= job;
    }


//2

exercise(){
    console.log("I love swimming");
}

//3

fetchJob(){
    console.log(`This is ${this.name} and their job is ${this.job}`);
}
}

let a = new person("Brandon", 12, "programmer");
a.exercise();
a.fetchJob();


//4

class programmer {
    constructor(name,age,job,languages,busy){
        this.name= name;
        this.age = age;
        this.job = job;
        this.languages= languages;
        this.busy=busy;
    }



//5

completeTask(){
    console.log(this.busy);
}

acceptNewTask(){
    console.log(this.busy = true);

}

offerNewTask(){
    if (programmer1 = this.busy){
    console.log("Brandon isn't busy.");
    }

    else {
        console.log("Brandon is busy");
    }
}



 learnLanguage(){
     console.log(this.languages.push("spanish", "german" , "dutch"));
 }

listLanguage(){
     console.log("english","french","italian");
 }

}

let programmer1 = new programmer("Brandon", 12, "programmer", ['english','french','italian'], false);
programmer1.completeTask();
programmer1.acceptNewTask(); 
programmer1.learnLanguage();
programmer1.listLanguage();
programmer1.offerNewTask();

let programmer2 = new programmer("john", 27, "painter", true);
console.log(programmer2);
programmer2.acceptNewTask();
programmer2.offerNewTask();

