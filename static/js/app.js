var app = (function(){
    var callback = (e,v)=>{
        if(e!=null){
            alert("Error");
            return ;
        }
        $("#resp").text(v);
    }
    return{
        calculate:function(operation,value){
            client.calculate(operation,value,callback);
        }
    }
})();