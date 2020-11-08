'use strict';

var category1= ['Mobile' , 'Laptop' , 'Tablet'];
function fillCategory(){
  var fill = document.getElementById('Category');
  for (var i=0;i<category1.length;i++){
    var options= document.createElement('p');
    fill.appendChild(options);
    options.textContent=category1[i];
  }
}

fillCategory();


var devices=[];
function Device(dName,category,quantity){
  this.name=dName;
  this.category=category;
  this.quantity=quantity;
  this.unit=0;
  devices.all.push(this);
}

Device.prototype.price=function(){
  this.unit=getRandomNumber();
};

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function renderTableHeader(){
  var header= document.getElementById('tableHeader');
  var thE1=document.createElement('th');
  header.appendChild(thE1);
  thE1.textContent='Device Name';

  var thE2=document.createElement('th');
  header.appendChild(thE2);
  thE2.textContent='Quantity';

  var thE3=document.createElement('th');
  header.appendChild(thE3);
  thE3.textContent='Unit Price';

  var thE4=document.createElement('th');
  header.appendChild(thE4);
  thE4.textContent='Category';

}

function renderTable(){
  renderTableHeader();

  var table=document.getElementById('tableSection');
  for(var i=0;i<devices.all.length;i++){
    var trE1=document.createElement('tr');
    table.appendChild(trE1);

    var td1=document.createElement('td');
    trE1.appendChild(td1);
    td1.textContent=this.dName;

    var td2=document.createElement('td');
    trE1.appendChild(td2);
    td2.textContent=this.quantity;

    var td3=document.createElement('td');
    trE1.appendChild(td3);
    td3.textContent=this.unit;

    var td4=document.createElement('td');
    trE1.appendChild(td4);
    td4.textContent=this.category;

  }
}



var myForm=document.getElementById('myForm');
myForm.addEventListener('submit',onClickRender());

function onClickRender(e){
//   e.preventDefault();

  renderTable();
  var name= e.target.ItemName.value;
  var category=e.target.Category.value;
  var quantity= e.target.Quantity.value;
  var unit= getRandomNumber();}

// if (e.target.id )

// }

Device.unit(350,750);
