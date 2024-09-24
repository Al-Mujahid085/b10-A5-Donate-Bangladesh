

// script for blog buttor to change html page 
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'faq.html';
})

// script for   and histiory buton color 
document.getElementById('btn-history').addEventListener('click', function () {

    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('donation').classList.remove('bg-[#B4F461]');
    document.getElementById('donation').classList.add('bg-gray-300');
    document.getElementById('btn-history').classList.remove('bg-gray-300');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');
    document.getElementById('history-data').classList.remove('hidden')


})


// script for  donation and  buton color 
document.getElementById('donation').addEventListener('click', function () {
    document.getElementById('donation').classList.remove('bg-gray-300');
    document.getElementById('donation').classList.add('bg-[#B4F461]');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.add('bg-gray-300');
    document.getElementById('history-data').classList.add('hidden')
    document.getElementById('donation-form').classList.remove('hidden')
})


// function for donate noakhali 
document.getElementById('donate-now-for-noakhali').addEventListener('click', function (event) {

    event.preventDefault();
    const moreNeedMoney = document.getElementById('more-need').innerText
    const moreNeedMoneyNumber = parseFloat(moreNeedMoney);
    const donateAmount = document.getElementById('donate-amount-for-noakhali').value;

    const preBalance = document.getElementById('pre-donated-for-noakhali').innerText;
    const donateNumber = parseFloat(donateAmount);
    const preBalanceNumber = parseFloat(preBalance);

    if (typeof (donateNumber) === "number" && donateNumber<=moreNeedMoneyNumber && donateNumber > 0) {
        const newBalance = preBalanceNumber + donateNumber;
        const updateMoreNeedMoney = moreNeedMoneyNumber - donateNumber;
        document.getElementById('more-need').innerText = updateMoreNeedMoney;
        document.getElementById('pre-donated-for-noakhali').innerText = newBalance;


        let now = new Date()
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        now = 'Date:' + " " + now;


        const notification = donateNumber + " " + 'Taka is Donated for famine-2024 at Noakhali, Bangladesh';
        const newParagraph = document.createElement('p')
        const notiTime = document.createElement('p')
        notiTime.innerText = now;
        newParagraph.innerText = notification;
        const newNotiDiv = document.createElement('div');
        newParagraph.style.fontWeight = 'bold'
        newParagraph.style.fontSize = '28px'
        newNotiDiv.style.border = '1px solid lightgray'
        newNotiDiv.style.borderRadius = '8px'
        newNotiDiv.style.padding = '24px'
        newNotiDiv.style.marginBottom = '24px'


        document.getElementById('history-data').appendChild(newNotiDiv).append(newParagraph, notiTime);

    }
    else {
        document.getElementById('my-modal').classList.add('hidden');
        alert('you are not elegable for donate')
    }

});


// fuction for donate feni 



document.getElementById('donate-now-for-feni').addEventListener('click', function (event) {

    event.preventDefault();
    const moreNeedMoney = document.getElementById('more-need').innerText
    const moreNeedMoneyNumber = parseFloat(moreNeedMoney);
    const donateAmount = document.getElementById('donate-amount-for-feni').value;

    const preBalance = document.getElementById('pre-donated-for-feni').innerText;
    const donateNumber = parseFloat(donateAmount);
    const preBalanceNumber = parseFloat(preBalance);

    if (typeof (donateNumber) === "number" &&donateNumber<=moreNeedMoneyNumber&& donateNumber > 0) {
        const newBalance = preBalanceNumber + donateNumber;
        const updateMoreNeedMoney = moreNeedMoneyNumber - donateNumber;
        document.getElementById('more-need').innerText = updateMoreNeedMoney;
        document.getElementById('pre-donated-for-feni').innerText = newBalance;


        let now = new Date()
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        now = 'Date:' + " " + now;


        const notification = donateNumber + " " + 'Taka is Donated for Flood Relief in Feni,Bangladesh';
        const newParagraph = document.createElement('p')
        const notiTime = document.createElement('p')
        notiTime.innerText = now;
        newParagraph.innerText = notification;
        const newNotiDiv = document.createElement('div');
        newParagraph.style.fontWeight = 'bold'
        newParagraph.style.fontSize = '28px'
        newNotiDiv.style.border = '1px solid lightgray'
        newNotiDiv.style.borderRadius = '8px'
        newNotiDiv.style.padding = '24px'
        newNotiDiv.style.marginBottom = '24px'


        document.getElementById('history-data').appendChild(newNotiDiv).append(newParagraph, notiTime);
    }
    else {
        document.getElementById('my-modal').classList.add('hidden');
        alert('you are not elegable for donate');
    }

});




// function for donate quota 
document.getElementById('donate-now-for-quota').addEventListener('click', function (event) {

    event.preventDefault();
    const moreNeedMoney = document.getElementById('more-need').innerText
    const moreNeedMoneyNumber = parseFloat(moreNeedMoney);
    const donateAmount = document.getElementById('donate-amount-for-quota').value;

    const preBalance = document.getElementById('pre-donated-for-quota').innerText;
    const donateNumber = parseFloat(donateAmount);
    const preBalanceNumber = parseFloat(preBalance);

    if (typeof (donateNumber) === "number" && donateNumber<=moreNeedMoneyNumber && donateNumber > 0) {
        const newBalance = preBalanceNumber + donateNumber;
        const updateMoreNeedMoney = moreNeedMoneyNumber - donateNumber;
        document.getElementById('more-need').innerText = updateMoreNeedMoney;
        document.getElementById('pre-donated-for-quota').innerText = newBalance;



        let now = new Date()
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        now = 'Date:' + " " + now;


        const notification = donateNumber + " " + 'Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh';
        const newParagraph = document.createElement('p')
        const notiTime = document.createElement('p')
        notiTime.innerText = now;
        newParagraph.innerText = notification;
        const newNotiDiv = document.createElement('div');
        newParagraph.style.fontWeight = 'bold'
        newParagraph.style.fontSize = '28px'
        newNotiDiv.style.border = '1px solid lightgray'
        newNotiDiv.style.borderRadius = '8px'
        newNotiDiv.style.padding = '24px'
        newNotiDiv.style.marginBottom = '24px'


        document.getElementById('history-data').appendChild(newNotiDiv).append(newParagraph, notiTime);
    }
    else {
        document.getElementById('my-modal').classList.add('hidden');
        alert('you are not elegable for donate')
    }

});





 
    
  

 





