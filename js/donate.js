document.getElementById('donate-button1').addEventListener('click',function(event){
    event.preventDefault();
    const addDonateAmountString = document.getElementById('donate-amount').value;
    const addDonateAmount = parseFloat(addDonateAmountString);
    if(!isNaN(addDonateAmount) && addDonateAmount > 0){
      const myAmountString = document.getElementById('my-amount').innerText;
      const myAmount = parseFloat(myAmountString);

      const donateCollectionString = document.getElementById('donate-collection').innerText;
      const donateCollection = parseFloat(donateCollectionString);

      const totalDonateCollection = donateCollection + addDonateAmount
      document.getElementById('donate-collection').innerText = totalDonateCollection;

      const myResumeAmount = myAmount - addDonateAmount
      document.getElementById('my-amount').innerText = myResumeAmount;

      const p = document.createElement('p');
      p.innerText = `${addDonateAmount} Taka is donated for ${donateTitleOne.innerText}`;
      document.getElementById('history-container').appendChild(p);

      alert('You have donate successfully');

      
    }
    else{
        alert("write correct amount");
    }
})

document.getElementById('donate-button2').addEventListener('click',function(event){
    event.preventDefault();
    const addDonateAmountString = document.getElementById('donate-amount2').value;
    const addDonateAmount2 = parseFloat(addDonateAmountString);
    if(!isNaN(addDonateAmount2) && addDonateAmount2 > 0){
      const myAmountString = document.getElementById('my-amount').innerText;
      const myAmount = parseFloat(myAmountString);

      const donateCollectionString = document.getElementById('donate-collection2').innerText;
      const donateCollection = parseFloat(donateCollectionString);

      const totalDonateCollection = donateCollection + addDonateAmount2
      document.getElementById('donate-collection2').innerText = totalDonateCollection;

      const myResumeAmount = myAmount - addDonateAmount2
      document.getElementById('my-amount').innerText = myResumeAmount;

      const p = document.createElement('p');
      p.innerText = `${addDonateAmount2} Taka is donated for ${donateTitleTwo.innerText}`;
      document.getElementById('history-container').appendChild(p);

      alert('You have donate successfully');
    }
    else{
        alert("write correct amount");
    }
})

document.getElementById('donate-button3').addEventListener('click',function(event){
    event.preventDefault();
    const addDonateAmountString = document.getElementById('donate-amount3').value;
    const addDonateAmount3 = parseFloat(addDonateAmountString);
    if(!isNaN(addDonateAmount3) && addDonateAmount3 > 0){
      const myAmountString = document.getElementById('my-amount').innerText;
      const myAmount = parseFloat(myAmountString);

      const donateCollectionString = document.getElementById('donate-collection3').innerText;
      const donateCollection = parseFloat(donateCollectionString);

      const totalDonateCollection = donateCollection + addDonateAmount3
      document.getElementById('donate-collection3').innerText = totalDonateCollection;

      const myResumeAmount = myAmount - addDonateAmount3
      document.getElementById('my-amount').innerText = myResumeAmount;

      const p = document.createElement('p');
      p.innerText = `${addDonateAmount3} Taka is donated for ${donateTitleThree.innerText}`;
      document.getElementById('history-container').appendChild(p);

      alert('You have donate successfully');
    }
    else{
        alert("write correct amount");
    }
})