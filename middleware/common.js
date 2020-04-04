const jwt = require('jsonwebtoken');
var helper = require('../helper');

checkToken = (req, res, next) => {
    
    const header = req.headers['authorization'];
    console.log(header);
      
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
    
        const token = bearer[1];
      
        req.token = token;
        next();
    } else {
        res.sendStatus(403)
    }
}
verifyToken = (req, res,next) => {
    jwt.verify(req.token, 'login', (err, data) => {
        if(err){
            res.status(403).send('Invalid token');
        } else {
            next();
        };
    });
};

checkIsDoctor = (req,res,next)=>{
    jwt.verify(req.token, 'login', (err, data) => {

    let keyWord = Object.keys(data.user)[0];

    if (keyWord != 'doctor_id'){
        var error = new Error('Invalid token')
        error.status = 404
        next(error);
    }
        
    else 
      next();
});
};

checIsPatient = (req , res , next )=> {
    jwt.verify(req.token , 'login', (err , data)=>{
        let keyWord =  Object.keys(data.user)[0];
     
        if(keyWord != 'id'){
            var error = new Error("Invalid token")   
            res.status(403).next(error);
        } 
       
        else next();
    });
}


Admin = (req , res , next )=> {
    jwt.verify(req.token , 'login', (err , data)=>{
      
        if(data.user.admin != true)  
          res.status(403).send('Invalid authorisation');
        else next();
    });
}
WrongRoute = (req, res, next) => {
    var error = new Error('Not found , please try with another route!');
    error.status = 404;
    next(error);
};


errorHandler = (err, req, res, next) => {
    var errObj = {
        status: err.status,
        error: {
            message: err.message
        }
    }
    res.status(err.status || 500).json(errObj);
};



module.exports = {
    checkToken ,
    verifyToken,
    checkIsDoctor, 
    checIsPatient,
    Admin,
    errorHandler,
    WrongRoute,
  

}