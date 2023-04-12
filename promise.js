console.log('Person1: shows ticket');
console.log('Person2: shows ticket');
const perMovie =  async () => {
    const promiseWifeBringingTicks = new promise ((resolve,reject))=>{
        setTimeout (()=> resolve ('ticket'),3000);
    });
    const getpopcorn = new promise ((resolve, reject)=>resolve('popcorn'));
    const addcoldDrinks = new promise ((resolve, reject)=>resolve('coldDrinks'));

     let ticket = await promiseWifeBringingTicks;
     console.log('wife:i have the ${ticket}');
     console.log('husband:we should go in');
     console.log('wife:no i am hungry');
      
     let popcorn = await getpopcorn;
     console.log('husband:i got some ${popcorn}');
     console.log('husband:we should go in');
     console.log('wife:i need some coldDrinks');

     let coldDrinks = await addcoldDrinks;
     console.log('husband:i got some ${coldDrinks}');
     console.log('husband:anything else darling');
     console.log('wife:les go we are getting late ');
     console.log('husband:thank you for the reminder *grins*');

     return ticket;
}
perMovie().then((m)=>console.log('person3:shows ${m}'));
console.log('person4:shows ticket');
console.log('person5:shows ticket');
