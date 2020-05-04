const db = require('../database');
NumberOfMedicationsQuery = (name) => {
    const query = 'select quantity , drug_name from  drugs where  drug_name = ?';
    return new Promise((reject , resolve)=>{
            db.query(query,[name],(error , results , fields)=>{
                if(error) reject(error);
                else resolve(results);
        });
    });
};
NumberOfMedications = async (req , res)=>{
        try {
     
            const result = await NumberOfMedicationsQuery(req.params.name);
            res.send(result).status(200);
        } catch (error) {
            res.send(error).status(500);
        }
};

PatientsDrugQuery = (quantity , name) => {
     const query ='update drugs set quantity = quantity -  ? where drug_name = ?';
     return new Promise((resolve , reject)=>{
        db.query(query , [quantity,name],(error , result , fields)=>{
            if(error) reject(error);
            else resolve(result);
        });
     });
};

GetDrugQuantity = (name)=> {
    const query ='select quantity from drugs where drug_name=?';
    return new Promise((resolve , reject)=>{
       db.query(query , [name],(error , result , fields)=>{
           if(error) reject(error);
           else resolve(result);
       });
    });
}

GetNameOFDrugsQuery = () => {
   
    const query = 'select drug_name from drugs';
    return new Promise((resolve , reject)=>{
        db.query(query ,(error , result , fields)=>{
            if(error) reject(error);
            else resolve(result);
        });
     });
}

GetNameOfMedications = async (req , res)=>{
    try {
 
        const result = await GetNameOFDrugsQuery();
        res.json(result).status(200);
    } catch (error) {
        res.json(error).status(500);
    }
};

module.exports = {
    NumberOfMedications ,
    PatientsDrugQuery ,
    GetDrugQuantity,
    GetNameOfMedications
   
}