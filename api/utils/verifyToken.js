import jwt from 'jsonwebtoken'
import {createError} from'./../utils/error.js';

export const verifyToken=( err,req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
        return next(createError(401,"usted no se ha autenticado"))
    }

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err)return next(createError(401,"token no valido"))  ;
            req.user = user;
            next()
        
    });
}

export const verifyUser=( err,req,res,next)=>{
verifyToken=( err,res,()=>{
    if(req.user.id==req.params.id || req,user.isAdmin){
        next();
    }else{
        if(err)return next(createError(401,"no esta autorizado para realizaar esta solicitud??"))  ;
    }
});
}