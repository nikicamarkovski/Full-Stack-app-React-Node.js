function Patient (name , surname, age , terms) {
    this.name = name ;
    this.surname = surname;
    this.age = age;
    this.terms = terms;
}

function Terms (id , date) {
    this.id =id;
    this.date = date;
}

module.exports = {
    Patient ,
    Terms
}


