const calculateppf=()=>{
 const p=parseFloat(document.getElementById('contribution').value);
 const n= parseInt(document.getElementById('duration').value);
 const r=parseFloat(document.getElementById('rate').value);
 if(!p || !n || !r){
    alert("plz fill in all required fields");
    return;
 }
 if(p <= 0 || n <=0 || r<=0){
    alert("value must be positive number");
    return
 }
 if( p >= 150000){
    alert("contribution amount should be less than or eqyal to 150000")
 }
 //maturity amount
 const maturity_amount=(p * [Math.pow((1 + (r/100)),n)]).toFixed(2)
 //total contribution
 const total_contribution=(p*n).toFixed(2);
 //interest earned
 const interest_earned=(maturity_amount - p).toFixed(2);
 const res=document.getElementById('result');
 res.style.display='block'; 
 document.getElementById('amount').innerHTML=` "you invested ${p} annually in a PPF account at an annual interest rate of
  ${r} for ${n} years,then the maturity amount will be ${maturity_amount} and interest will be ${interest_earned} and your total contribution
  ${total_contribution}"`
}
const reset=()=>{
 document.getElementById('contribution').value=" ";
 document.getElementById('duration').value=" ";
 document.getElementById('rate').value=" ";
}