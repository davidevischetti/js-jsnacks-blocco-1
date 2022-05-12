
//AVVIO UN CICLO PER INSERIRE I LIST ITEM ALL'INTERNO DELLA PRIMA LISTA
for (let i = 0; i < 5; i++) {
    
    //CREO UN ARRAY CON I LIST ITEM
    const array1 = ['parola1 arr1', 'parola2 arr1', 'parola3 arr1', 'parola4 arr1', 'parola5 arr1'];

    //RICHIAMO LA PRIMA LISTA IN UNA VARIABILE
    const list = document.querySelector('ul');

    //INSERISCO I LIST ITEM NELLA PRIMA LISTA
    list.innerHTML += `<li> ${array1[i]}<ul></ul></li>`;
};


//AVVIO UN CICLO PER INSERIRE I LIST ITEM ALL'INTERNO DELLA SECONDA LISTA
for (let i = 0; i < 2; i++) {
    
    //CREO UN ARRAY CON I LIST ITEM
    const array2 = ['parola1 arr2', 'parola2 arr2'];

    //RICHIAMO LA SECONDA LISTA IN UNA VARIABILE
    const listInTheList = document.querySelectorAll('ul li ul');

    //INSERISCO I LIST ITEM NELLA SECONDA LISTA
    for (const listItems of listInTheList) {
        listItems.innerHTML += `<li> ${array2[i]}<ul></ul></li>`;
    }

};
