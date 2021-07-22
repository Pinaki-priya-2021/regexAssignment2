Replace=() =>{
    let str=document.getElementById("str").value;
    let toReplace=document.getElementById("toReplace").value;
    let toReplaceWith=document.getElementById("toReplaceWith").value;
    let newStr=str.replace(toReplace,toReplaceWith);
    let result=document.getElementById("result");
    result.innerHTML=""+newStr;
}