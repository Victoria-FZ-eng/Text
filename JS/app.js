'use strict';
let type =['Hiking', 'Exploring', 'Relaxing'];
let hikingType=['Valley Of The Moon /Rum', 'Waleh Valley', 'Salaytah Valley', 'Aya Valley'];
let relaxing=['Dead Sea', 'Maeen Hot Springs', 'Aqaba', 'Ajloun Forest'];
let exploring = ['Petra', 'Down Town', 'Salt', 'Jerash', 'Amman Citadel', 'Karak Castle', 'Ajoun Castle'];

let allDestination =['Ajloun Forest', 'Ajloun Castle', 'Amman Citadel', 'Aqaba', 'Aya Valley', 'Dead Sea', 'Down Town', 'Jerash', 'Karak Castle', 'Maeein Hot Springs', 'Perta', 'Valley Of The Moon /Rum', 'Salaytah Valley', 'Salt', 'Waleh Valley'];

let allDesImg = ['img/ajlonRelax.jpg', 'img/ajlounCastle.jpg', 'img/ammanCitadle.jpg', 'img/aqaba.jpg','img/aya.jpg','img/deadsea.jpg','img/downTown.jpg', 'img/jerash.jpg','img/karakCastle.jpg','img/mainHotSprings.jpg','img/petra.jpg','img/rum.jpg','img/salayta.jpg','img/salt.jpg','img/waleh.jpg'];



let persons;
let tguide;
let breakfast;
let activity;
let site;

let baseprice=0;
let totalprice=0;
let pricetguide=0;
let pricebreakfast=0;
let hikingbaseprice=20;
let Relaxingbaseprice=15;
let Exploringbaseprice=10;
document.getElementById('siteChosen');
const checkBox = document.getElementById('breakfast');
site=document.getElementById('siteChosen');
console.log(checkBox);
const checkBox2 = document.getElementById('guide');
console.log(checkBox2);
const form=document.getElementById('details');
form.addEventListener('submit',getselect);
console.log(form);
function getselect(event){
  event.preventDefault();
  console.log(event);
  const adv=event.target;
  persons=adv.persons.value;
  breakfast=adv.breakfast.checked;
  tguide=adv.guide.checked;
  console.log(breakfast);
  console.log(tguide);
  activity=site.value;
  console.log(activity);
  switch(activity){
  case 'Valley Of The Moon /Rum':
  case 'Waleh Valley':
  case 'Salaytah Valley':
  case 'Aya Valley':
    activity='Hiking';
    break;
  case 'Dead Sea':
  case 'Maeen Hot Springs':
  case 'Aquaba':
  case 'Ajloun Forest':
    activity='Relaxing';
    break;
  case 'Petra':
  case 'Down Town':
  case 'Salt':
  case 'Jerash':
  case 'Amman Citadel':
  case 'Karak Castle':
  case 'Ajoun Castle':
    activity='Exploring';
    console.log('f is working');
    break;
  }
  console.log(site);
  let adventure=new Booking(activity,persons,breakfast,tguide);
  adventure.caltotal();
}
function savToLs(){
  localStorage.setItem('requestconfirmed',Booking.request);
  console.log(JSON.stringify(Booking.request));
  let arrstr=JSON.stringify(Booking.request);
  localStorage.setItem('requestconfirmed',arrstr);
  if (Continfo.request !==null){
    localStorage.setItem('bookingconfiremd',Continfo.request);
    console.log(JSON.stringify(Continfo.request));
    let contArrStr=JSON.stringify(Continfo.request);
    localStorage.setItem('bookingconfiremd',contArrStr);
  }
}
function Continfo(username,number1)
{
  this.username=username;
  this.number1=number1;
  Continfo.request.push(this);
  savToLs();
}
Continfo.request=[];
function randomValue(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
function Booking (activity,persons,breakfast,tguide){
  this.activity=activity;
  this.persons=persons;
  this.breakfast=breakfast;
  this.tguide=tguide;
  Booking.request.push(this);
  savToLs();
  console.log(this);
}
Booking.request=[];
Booking.prototype.caltotal = function()
{
  if(this.activity==='Exploring')
  {
    baseprice=Exploringbaseprice*this.persons;
    console.log('3price',baseprice);
  }
  if(this.activity==='Hiking')
  {
    baseprice=hikingbaseprice*this.persons;
    console.log('fprice',baseprice);
  }
  if(this.activity==='Relaxing'){
    baseprice=Relaxingbaseprice*this.persons;
    console.log('sprice',baseprice);
  }
  if(this.tguide===true){
    pricetguide=10;
  }
  if(this.breakfast===true){
    pricebreakfast=3*this.persons;
  }
  totalprice=baseprice+pricebreakfast+pricetguide;
  console.log(totalprice);
  if(randomValue(1,3)===1)
  { totalprice=totalprice*.85;
    console.log('Its the 100 anniversry and we have special offer for you of 15% discount ',totalprice);
  }
  else if(randomValue(2,3)===2)
  { totalprice=totalprice*.80;
    console.log('Its the 100 anniversry and we have special offer for you of 20% discount ',totalprice);
  }
  else {
    totalprice=totalprice*.75;
    console.log('Its the 100 anniversry and we have special offer for you of 25% discount ',totalprice);
  }
};






let cardcont = document.getElementById('cardsec');
for (let i=0 ; i<allDestination.length; i++){
  let div = document.createElement('div');
  div.setAttribute('class', 'vcard');
  cardcont.appendChild(div);
  let img = document.createElement('img');
  img.setAttribute('src', allDesImg[i]);
  div.appendChild(img);
  let divcont = document.createElement('div');
  divcont.setAttribute('class','container');
  div.appendChild(divcont);
  let h = document.createElement('h4');
  divcont.appendChild(h);
  h.textContent = allDestination[i];

  let now = document.createElement('button');
  now.setAttribute('id','book');
  divcont.appendChild(now);
  now.textContent='Book Now';
}







let book = document.getElementById('book');
book.addEventListener('click',booking);

// document.getElementById('ok').addEventListener('click', back);

function booking(event){
//   event.perventDefault();
  document.getElementById('bookingForm').style.display ='block';
  return event;

}

let reserve = document.getElementById('bookingForm');
reserve.addEventListener('submit',savtoLs);

function savtoLs(event){
  event.preventDefault();
  document.getElementById('book').removeEventListener('click',booking);


  document.getElementById('bookingForm').style.display='none';

  document.getElementById('confirmation').style.display='block';

  let ok = document.getElementById('ok');
  ok.addEventListener('click', back);
  function back(event){
    event.preventDefault();
   // document.getElementById('book').addEventListener('click',booking);
   document.getElementById('confirmation').style.display='none';
   
   }
  
}









document.getElementById('details').addEventListener('submit', parg);

function parg(event){
  let conta = document.getElementsByClassName('container')[0];
  let p = document.createElement('p');
  conta.appendChild(p);
  p.textContent=`Your are booking ${persons} tickets for a ${activity} trip to ${site} . Breakfast including : ${breakfast}. Tour guide including ${tguide}.      Price = ${totalprice}`;
  return event;
}








