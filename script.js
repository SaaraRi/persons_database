'use strict';

let users = [];

async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }
        
        const data = await response.json();
        users = data;

        displayData(users);   
    }   
    catch(error) {
         console.error(error);
     };
 };
        
 const displayData = () => {
    
    users.forEach(user => {
        const container = document.getElementById('card-container');

        const newCard = document.createElement('div');
        newCard.classList.add('newCard');
        
        const cardImage = document.createElement('img');
        cardImage.src = "https://robohash.org/" + user.id + ".png?set=set4";
        cardImage.alt = "image of a cartoon cat";
        cardImage.classList.add('image');

        const cardName = document.createElement('div');
        cardName.innerHTML = `
        <p class="cardTitles"><strong>Name:</strong></p><p>${user.name}</p>`;
        cardName.classList.add('cardText');

        const cardUsername = document.createElement('p');
        cardUsername.innerHTML = `<p class="cardTitles"><strong>Username:</strong></p><p>${user.username}</p>`
        cardUsername.classList.add('cardText');

        const cardEmail = document.createElement('p');
        cardEmail.innerHTML = `<p class="cardTitles"><strong>Email:</strong></p><p>${user.email}</p>`
        cardEmail.classList.add('cardText');

        newCard.appendChild(cardImage);
        newCard.appendChild(cardName);
        newCard.appendChild(cardUsername);    
        newCard.appendChild(cardEmail);   

        container.appendChild(newCard); 
    });
};        
              
window.addEventListener('load', fetchData);           
           