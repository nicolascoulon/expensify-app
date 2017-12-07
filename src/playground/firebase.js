//firebase.initializeApp(config);

//const database = firebase.database();
//*
database.ref('expenses').push({
    description: 'snow',
    note: '',
    amount: 550.65,
    createdAt: 975578543
});
database.ref('expenses').push({
    description: 'rent',
    note: '',
    amount: 1550.65,
    createdAt: 97596348543
});
database.ref('expenses').push({
    description: 'phone bill',
    note: '',
    amount: 35.65,
    createdAt: 578543
});*/

/*
database.ref('expenses')
    .on('value')
    .then( (snapshot) => {
       const expenses = [];
       snapshot.forEach( (childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
       });
    console.log(expenses);
    });

/*
database.ref().on('value', (snapchot) => {
    console.log(snapchot.val())
})

/*
database.ref().set({
name : 'michi',
age: 41,
single: false,
location: {
    city: 'Paris',
    country: 'France'
}
});
database.ref().update({
    name: 'Nicolas',
    job: 'Js developper',
    'location/city': 'NY'
})*/
/*
database.ref('single')
.remove()
.then( () => {
console.log('data is removed')
})
.catch( (e) => {
console.log('data isn t removed')
});
*/