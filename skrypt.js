let result = document.getElementById("inputext");

let calculate=(number)=>{
    result.value=result.value+number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Valid Input");
    }
}

function Clear(){
    result.value=" ";
}

function Del(){
    result.value=result.value.slice(0,-1);
}

if(result.value="666")
{
    alert("Invalid")
}