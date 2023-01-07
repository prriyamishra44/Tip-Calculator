const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const noOfPeople = document.getElementById('numberOfPeople');
const perPerson = document.getElementById('perPersonTotal');

let numberOfPeople = Number(noOfPeople.innerText);
const calculateBill = () =>{
  const bill = Number(billInput.value);
   const tipPercentage= Number(tipInput.value)/100;
   const tipAmount = (tipPercentage * bill);
   const total = tipAmount + bill;
   console.log(total);

   const perPersonAmount = total / numberOfPeople;
   console.log ({perPersonAmount});
   perPerson.innerText= `Rs${perPersonAmount.toFixed(2)}`;
}



const increasePeople = () =>{
 numberOfPeople+=1;
 noOfPeople.innerText = numberOfPeople;
 calculateBill();
}

const decreasePeople = (people) =>{
    if(numberOfPeople <= 1){
        alert('Hey! you can not have less than one person!');
        return;
    }
        numberOfPeople--;
        noOfPeople.innerText = numberOfPeople;

        calculateBill();

}



