function Doctor (name , surname  , patient) {
    this.name = name ;
    this.surname = surname;
 
    this.patient = patient;
}

function Patient (name , surname , email , age , illness ,terms) {
    this.name = name ;
    this.surname = surname;
    this.email = email;
    this.age = age ;
    this.illness = illness;
    this.terms = terms ;
 
}

function Illness (name , drugs) {
    this.name = name ; 
    this.drugs = drugs;
}

function Drugs (name) {
    this.name = name ;  
}
function Terms (date) {
    this.date = date;
}


module.exports = {
    Doctor ,
    Patient,
    Illness,
    Drugs,
    Terms
}