var client = (function(){
    return{
        calculate:(operation,value,callback)=>{
            $.get("/"+operation+"?n="+value)
            .then((val)=>callback(null,val),(e)=>callback(e,null));
        }
    }
})();