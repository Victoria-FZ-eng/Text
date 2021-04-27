'use strict';
let allDestination =['Ajloun Forest', 'Ajloun Castle', 'Amman Citadel', 'Aqaba', 'Aya Valley', 'Dead Sea', 'Down Town', 'Jerash', 'Karak Castle', 'Maeen Hot Springs', 'Petra', 'Valley Of The Moon /Rum', 'Salaytah Valley', 'Salt', 'Waleh Valley'];
let allDesImg = ['imgbn/ajlonRelax.jpg', 'imgbn/ajlounCastle.jpg', 'imgbn/ammanCitadle.jpg', 'imgbn/aqaba.jpg','imgbn/aya.jpg','imgbn/deadsea.jpg','imgbn/downTown.jpg', 'imgbn/jerash.jpg','imgbn/karakCastle.jpg','imgbn/mainHotSprings.jpg','imgbn/petra.jpg','imgbn/rum.jpg','imgbn/salayta.jpg','imgbn/salt.jpg','imgbn/waleh.jpg'];
let persons;
let tguide;
let breakfast;
let activity;
let site;
let message;
let renderAct;
let baseprice=0;
let totalprice=0;
let pricetguide=0;
let pricebreakfast=0;
let hikingbaseprice=20;
let Relaxingbaseprice=15;
let Exploringbaseprice=10;
let originalprice=0;
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
  renderAct=site.value;
  console.log(renderAct);
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
  case 'Aqaba':
  case 'Ajloun Forest':
    activity='Relaxing';
    break;
  case 'Petra':
  case 'Down Town':
  case 'Salt':
  case 'Jerash':
  case 'Amman Citadel':
  case 'Karak Castle':
  case 'Ajloun Castle':
    activity='Exploring';
    console.log('f is working');
    break;
  }

  let adventure=new Booking(activity,persons,breakfast,tguide);
  adventure.caltotal();
  adventure.render();
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
let adventure=new Booking(activity,false,false,0);
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
  originalprice=baseprice+pricebreakfast+pricetguide;
  totalprice=baseprice+pricebreakfast+pricetguide;
  console.log(totalprice);
  
};
// console.log(site.value);
Booking.prototype.render=function(){
let cardcont = document.getElementById('cardsec');
for (let i=0 ; i<allDestination.length; i++)
{
  console.log(site.value); 
  if(site.value===allDestination[i]){
  console.log('render f',renderAct);
  console.log(allDestination[i]);
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
  let p = document.createElement('p');
  divcont.appendChild(p);
  console.log(breakfast);
  console.log(tguide);
  if(randomValue(1,3)===1)
  { totalprice=Math.floor(totalprice*.85);
    message='Its the 100 anniversry of Jordan and JOWONDERS have special offer of 15% discount ';
  }
  else if(randomValue(2,3)===2)
  { totalprice=Math.floor(totalprice*.80);
    message='Its the 100 anniversry of Jordan and JOWONDERS have special offer of 20% discount ';
  }
  else {
    totalprice=Math.floor(totalprice*.75);
    message='Its the 100 anniversry of Jordan and JOWONDERS have special offer of 25% discount '
  }
  let text1='';
  let text2='';
  if(breakfast===true){text1=',Breakfast Included'}
  else{text1=''}
  console.log(tguide);
  if (tguide ===true){text2=' and with a Certified Tour Guide'}
  else{text2=''}
  console.log(persons);
  if (persons ==='1'){p.textContent=`Your are booking ${persons} ticket for ${activity} trip to ${renderAct} ${text1} ${text2}. Your price is ${originalprice}, but ${message}    Your final offer is ${totalprice}`;
}
  else{ p.textContent=`Your are booking ${persons} tickets for ${activity} trip to ${renderAct} ${text1} ${text2}. Your price is ${originalprice}, but ${message}    Your final offer is ${totalprice}`;
}
  
   let now = document.createElement('button');
  now.setAttribute('id','book');
  divcont.appendChild(now);
  now.textContent='Book Now';
  now.addEventListener('click',booking)
 }
}
};
function booking(){
  document.getElementById('bookingForm').style.display ='block';
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
   document.getElementById('confirmation').style.display='none';
   
   }
  
}