const db = require('../database');
const bcrypt = require('bcryptjs');
const {PasswordValidator}= require('../helper');
const jwt = require('jsonwebtoken');
const {Doctor , Patient, Illness , Drugs , Terms} = require('./obj');
GetAllDoctorsQuery = () => {
    const query = 'select * from doctor';
    return new Promise((resolve , reject)=>{
        db.query(query,(error , results , fields) =>{
            if(error)reject(error)
            else resolve(results)
        });
    });
};

GetAllDoctors =async (req , res) => {
    try {
        const doctor = await GetAllDoctorsQuery();
        res.status(200).json(doctor);
    } catch (error) {
        res.status(400).json(error)
    }
}
GetAllDoctorsByEmailQuery = (email) => {
    const query = 'select * from doctor where email=? ';
    return new Promise((resolve , reject)=>{
        db.query(query,[email],(error , results , fields) =>{
            if(error)reject(error)
            else resolve(results)
        });
    });
};
UpdateQuery = (pass , email)=> {
    const query = 'update doctor set password = ? where email = ?;'
    return new Promise((resolve, reject) => {
        db.query(query, [pass, email], (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
};
Update = async (req, res)=>{
    const body = req.body.password
    const passValidator = PasswordValidator(body);
    console.log(passValidator);
    try {
        if (passValidator) {
            const passHash = bcrypt.hashSync(body, 10);
            await UpdateQuery(passHash, req.body.email);
            res.status(200).send("password has been change");
        } else {
            res.status(401).send('you must have numbers in your passwor or its too short')
        }

    } catch (error) {
        res.send(error).status(500);
    }
}
GetOwnPatientsQuery = (id) => {
    const query = 'select * from patient where doctor_id = ?';
    return new Promise((resolve, reject) => {
        db.query(query, [id], (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
}
GetOwnPatients =async (req , res) => {
    try {
        let tokenData = jwt.verify(req.token, 'login', (error, authorizedData) => {
            return authorizedData
        })
        console.log(tokenData)
        let patients = await GetOwnPatientsQuery(tokenData.user.doctor_id);
        res.send(patients).status(200);

    } catch (error) {
        res.send(error).status(500);
    }
}
CreateDoctorQuery = (doctor , pass)=>{
    const query = 'INSERT INTO doctor (doctor_name ,surname, email , password , admin) values (? , ? , ? , ? , ?)';
    return new Promise((resolve, reject) => {
        db.query(query, [doctor.name,doctor.surname,doctor.email , pass , doctor.admin], (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
}
CreateDoctor =async (req , res) => {
    let body =req.body;
    console.log(body);
    try {
        const passHash = bcrypt.hashSync(body.password, 10);
        await CreateDoctorQuery(body , passHash);
        res.send("doctor has been created");
    } catch (error) {
        res.send(error);
    }
}

DeteleDoctorQuery = (id)=>{ 
    const query = 'delete from doctor where doctor_id = ?'
    return new Promise((resolve, reject) => {
        db.query(query, [id], (error, results, fields) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
}
DeteleDoctor = async (req , res)=> {
    try {
        await DeteleDoctorQuery(req.params.id);
        res.send("doctor has been deleted");

    } catch (error) {
        res.send(error);
    }   
}

// GetDoctorAndAllPatientsQuery = (id) => {
//     // const query = 'select * from doctor join patient on doctor.doctor_id = patient.id join termin on patient.id = termin.pacient_id join patient_illness_drugs on patient.id= patient_illness_drugs.patient_id  join illness on patient_illness_drugs.illness_id=illness.id  join drugs on patient_illness_drugs.drug_id = drugs.id where doctor.doctor_id = ?;';
//     // const query = 'select * from patient join doctor on patient.doctor_id = doctor.doctor_id join termin on patient.id = termin.pacient_id join patient_illness_drugs on patient.id= patient_illness_drugs.patient_id  join illness on patient_illness_drugs.illness_id=illness.id  join drugs on patient_illness_drugs.drug_id = drugs.id  where patient.doctor_id = ?'
//     const query = 'select * from doctor join patient on doctor.doctor_id = patient.doctor_id \
//  join patient_illness_drugs on patient.id=patient_illness_drugs.patient_id \
//   join illness on patient_illness_drugs.illness_id = illness.id join \
//   drugs on patient_illness_drugs.drug_id = drugs.id  where doctor.doctor_id = 1'
//       return new Promise((resolve, reject) => {
//         db.query(query, [id], (error, results, fields) => {
//             if (error) reject(error);
//             else resolve(results);
//         });
//     });
// }

// GetDoctorAndAllPatients =async  (req , res)=> {
//     try {
//         // const db = await GetDoctorByIdQuery(req.params.id);
//         // let dbDoctor = db[0];
//         // let doctor = new Doctor(dbDoctor.name , dbDoctor.surname, []);

//         const results = await GetDoctorAndAllPatientsQuery(req.params.id);
//         let dbPatient = results[0];
//         // let patient = new Patient(dbPatient.name , dbPatient.surname , dbPatient.email , dbPatient.age, [], []);
//         results.name.forEach((x)=>{
//             console.log(x);
//         })
//         let illness = results.map((x)=>{
//             return new Illness (x.illness_name, []);
//         });
    
//         patient.illness = illness;
//            results.forEach((elem ,i )=>{
//           illness[i].drugs.push(elem.drug_name);
//         });
//         let terms = results.map((x)=>{
//             return new Terms(x.date);
//         })
//         patient.terms = terms;
     
//         res.send(patient);
//     } catch (error) {
//         res.send(error);
//     }
// }



module.exports = {
    GetAllDoctors ,
    GetAllDoctorsByEmailQuery ,
    Update,
    GetOwnPatients ,
    CreateDoctor ,
    DeteleDoctor,
    // GetDoctorAndAllPatients
}