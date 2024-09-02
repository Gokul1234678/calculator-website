function dis(val){
    document.getElementById('display').value+=val;
}

function solve(){
    try{
    let a=document.getElementById('display').value;
    let b=eval(a)
    document.getElementById('display').value=b;
    }
    catch(err){
        document.getElementById('display').value="invaild calculation";
    }
}
function clr(){
    // document.getElementById('display').innerHTML=" "
   document.getElementById('display').value=""
 }
 function del(){
    let c=document.getElementById('display')
    c.value=c.value.slice(0,-1)
 }