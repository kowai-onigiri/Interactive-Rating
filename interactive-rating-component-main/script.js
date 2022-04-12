// const numBtn = document.querySelectorAll('num');

// numBtn.addEventListener('click', (event) => {
    
//     numBtn.style.backgroundColor="black";
// })
const buttons = document.querySelectorAll('.num');

buttons.forEach(function(currentBtn) {
    currentBtn.addEventListener('click', function() {
        currentBtn.style.backgroundColor = "#6C666A";
        
    });
});


const submit = document.getElementById('subBtn');
const card = document.getElementById('ratingCard');
const cardContent = document.getElementById('cardCont')

submit.addEventListener('click', function() {
    // location.href = "submit.html";
    card.removeChild(cardContent);

    const newContainer = document.createElement('div');
    newContainer.classList.add('container');
    card.appendChild(newContainer);


    const thanksCont = document.createElement('div');
    thanksCont.classList.add('thanksCont');
    newContainer.appendChild(thanksCont);

    const thanksImg = document.createElement('div');
    thanksImg.classList.add('thanksImg');
    thanksCont.appendChild(thanksImg);

    const image = document.createElement('img');
    image.src = 'interactive-rating-component-main\images\illustration-thank-you.svg';
    thanksImg.appendChild(image);

    const selection = document.createElement('div');
    selection.classList.add('selection');
    selection.textContent = "You selected 2 out of 5.";
    thanksCont.appendChild(selection);

    const thankYou = document.createElement('div');
    thankYou.classList.add('thankYou');
    thankYou.textContent = "Thank you!"
    thanksCont.appendChild(thankYou);


    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    thanksCont.appendChild(message);


    
    
    
});










