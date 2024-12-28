// History Button Function 
    const navDonationBtn = document.getElementById('donation-btn');
    const Historybtn = document.getElementById('history-btn');

    const donationDiv =document.getElementById('donation-div');
    const historyDiv =document.getElementById('history-div');

document.getElementById('history-btn').addEventListener('click',function(){
  
    navDonationBtn.classList.remove('text-gray-950' ,'bg-lime-400');
    Historybtn.classList.add('text-gray-950' ,'bg-lime-400');

    historyDiv.classList.remove('hidden');
    donationDiv.classList.add('hidden');
});

document.getElementById('donation-btn').addEventListener('click',function(){

    Historybtn.classList.remove('text-gray-950' ,'bg-lime-400');
    navDonationBtn.classList.add('text-gray-950' ,'bg-lime-400');

    donationDiv.classList.remove('hidden');
    historyDiv.classList.add('hidden');
});


// Donation Function Start
const modal = document.getElementById('modal-div');

document.getElementById('modal-close').addEventListener('click',function(){
    modal.classList.add('hidden');
});
// Noakhali Function 

document.getElementById('noakhali-btn').addEventListener('click',function(){

    const mainBalance = innerTextWithNumber('main-balance');

    const noakhaliBalance = innerTextWithNumber('noakhali-balance');

    const noakhaliInput = inputWithNumber('noakhali-input');

    if(mainBalance < noakhaliInput || noakhaliInput < 0){
        return alert('Invalid input')
    }


    const donationNoakhaliMainBalance = mainBalance - noakhaliInput ;

    
    
    document.getElementById('main-balance').innerText = donationNoakhaliMainBalance;

    const noakhaliTextBalance = noakhaliBalance + noakhaliInput ;

    document.getElementById('noakhali-balance').innerText = noakhaliTextBalance;

    const noakhaliHistory = `<div class="p-5 border-l-2 border-l-slate-700 mt-6">
    <p class="py-4">${noakhaliInput}Taka is Donated for Flood at Noakhali ,Bangladesh</p>
    <p class="pb-4">Date ${new Date().toLocaleDateString('en-GB')} Time ${new Date().toLocaleTimeString('en-GB')}</p>
    </div> `;

    document.getElementById('history-div').insertAdjacentHTML('afterbegin',noakhaliHistory);

    modal.classList.remove('hidden');

});


// Feni Function 

document.getElementById('feni-btn').addEventListener('click',function(){
    
    const mainBalance = innerTextWithNumber('main-balance');
    
    const feniBalance = innerTextWithNumber('feni-balance');

    const feniInput = inputWithNumber('feni-input');

    if(mainBalance < feniInput || feniInput < 0){
        return alert('Invalid input')
    }


    const donationfeniMainBalance = mainBalance - feniInput ;

    
    document.getElementById('main-balance').innerText = donationfeniMainBalance;

    const feniTextBalance = feniBalance + feniInput ;

    document.getElementById('feni-balance').innerText = feniTextBalance;

    const feniHistory = `<div class="p-5 border-l-2 border-l-slate-700 mt-6">
    <p class="py-4">${feniInput}Taka is Donated for Flood at feni ,Bangladesh</p>
    <p class="pb-4">Date ${new Date().toLocaleDateString('en-GB')} Time ${new Date().toLocaleTimeString('en-GB')}</p>
    </div> `;

    document.getElementById('history-div').insertAdjacentHTML('afterbegin',feniHistory);


    modal.classList.remove('hidden');

});

// Quota Function 
document.getElementById('quota-btn').addEventListener('click',function(){
    
    const mainBalance = innerTextWithNumber('main-balance');

    const quotaBalance = innerTextWithNumber('quota-balance');

    const quotaInput = inputWithNumber('quota-input');

    if(mainBalance < quotaInput || quotaInput < 0){
        return alert('Invalid input')
    }


    const donationquotaMainBalance = mainBalance - quotaInput ;

    
    document.getElementById('main-balance').innerText = donationquotaMainBalance;

    const quotaTextBalance = quotaBalance + quotaInput ;

    document.getElementById('quota-balance').innerText = quotaTextBalance;

    const quotaHistory = `<div class="p-5 border-l-2 border-l-slate-700 mt-6">
    <p class="py-4">${quotaInput}Taka is Donated for Quota Movement,Bangladesh</p>
    <p class="pb-4">Date ${new Date().toLocaleDateString('en-GB')} Time ${new Date().toLocaleTimeString('en-GB')}</p>
    </div> `;

    document.getElementById('history-div').insertAdjacentHTML('afterbegin',quotaHistory);

    modal.classList.remove('hidden');

});


