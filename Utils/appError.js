class createerror extends Error{
    constructor(message , statuscode){
        super(message);
        this.statuscode=statuscode;
        this.status = `${statuscode}`.startsWith('4')?'fail':'error';
        Error.captureStackTrace(this , this.constructor);
    }
}

export default createerror