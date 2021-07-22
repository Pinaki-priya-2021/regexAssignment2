total=() =>{
    let call=parseFloat(document.getElementById("calls").value);
    let sms=parseFloat(document.getElementById("sms").value);
    let totalCallCharges = 0.0;
    let totalSmsCharges = 0.0;
    let total=0.0;
    console.log(document.getElementById("calls").value);
    console.log(parseFloat(document.getElementById("calls").value));
    console.log(call+" "+sms)

    if(call<=50){
        totalCallCharges=0.5*call;
    }else if(call<=150){
        totalCallCharges=25+(0.7*(call-50));
    }else if(call <=300){
        totalCallCharges=95+(0.85*(call-150));
    }else{
        totalCallCharges=222.5+(0.95*(call-300));
    }

    if(sms<=50){
        totalSmsCharges=0.0;
    }else if(sms<=200){
        totalSmsCharges=0.0+0.25*(sms-50);
    }else if(sms<=400){
        totalSmsCharges=37.5+(0.4*(sms-200));
    }else{
        totalSmsCharges=117.5+(0.45*(sms-400));
    }

    total=totalSmsCharges+totalCallCharges;
    let result=document.getElementById("result");
    result.innerHTML="total call charges="+totalCallCharges+"<br>"+"total SMS Charges="+totalSmsCharges+"<br>"+"total charges="+total;

}