  const craete= (username)=>{

    return(req, res, next)=>{
        req.user = {name: username};
        next();
    };
}
module.exports =craete;