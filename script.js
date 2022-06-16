"use strict";

const checkGuage = document.querySelector('.check-guage');
const notif = document.querySelector('.notification');

function createEmptyBox(btns){
    return btns.forEach(radioButton => radioButton.checked = false);
}

checkGuage.addEventListener('click', function(e){
    e.preventDefault();
    let ansYes = 0;

    // selecting radio elements
    const age = document.querySelector('.age:checked');
    const card = document.querySelector('.card:checked');
    const update = document.querySelector('.update:checked');
    const buying = document.querySelector('.buying:checked');
    const radioButtons = [age, card, update, buying];

    let unansweredCount = 0;

    // looping to get checked value
    radioButtons.forEach(
        radioButton => {if(!radioButton){
            unansweredCount += 1;
            return;
    }
    if(radioButton.value === "Yes"){
    ansYes +=1;
    }
    });

    if(unansweredCount){
        return alert("one or more box is unchecked");
    }

    // looping to get checked value
//     ['buying', 'update', 'card', 'age']
//     .forEach(className => {
//         const radioButton = document.querySelector(`.${className}:checked`);
//         if(!radioButton){
//             return alert('one or more box is unchecked');
//         }
//         if(radioButton?.value === "Yes")
//     {
//         ansYes += 1;
//     }
// });
// conditions

if(ansYes === 3 && buying?.value === "No"){
    notif.textContent = "You are 100% ready, always vote right";
    notif.style.color = "blue";
    alert("You are 100% ready, always vote right");
    createEmptyBox(radioButtons);
}else if(ansYes === 0){
    alert("Werey ni e, You no get direction");
    notif.textContent = "Werey ni e, You no get direction";
    notif.style.color = "red";
    createEmptyBox(radioButtons);
}else if(age?.value === 'No') {
    notif.textContent = "You be small pikin, go wash plates";
    notif.style.color = "red";
    alert("You be small pikin, go wash plates");
    createEmptyBox(radioButtons);
}else if(buying?.value === "Yes") {
    notif.textContent = "You don already sell your destiny, Madman";
    notif.style.color = "red";
    alert("You don already sell your destiny, Madman");
    createEmptyBox(radioButtons);
}else{
    alert("Your case seems spiritual");
    notif.textContent = "Your case seems spiritual";
    notif.style.color = "black";
    createEmptyBox(radioButtons);
}
});
