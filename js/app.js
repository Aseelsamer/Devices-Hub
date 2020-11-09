/* eslint-disable no-unused-vars */
'use strict';

var category1= ['Mobile' , 'Laptop' , 'Tablet'];
function fillCategory(){
  var fill = document.getElementById('Category');
  for (var i=0;i<category1.length;i++){
    var options= document.createElement('option');
    options.textContent=category1[i];
    fill.appendChild(options);
  }
}

fillCategory();


// var devices=[];
function Device(dName,category,quantity,unit){
  this.name=dName;
  this.category=category;
  this.quantity=quantity;
  this.unit=unit;
//   devices.all.push(this);
}

// Device.prototype.price=function(){
//   this.unit=getRandomNumber();
// };

// function getRandomNumber(min,max){
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

var deviceList=JSON.parse(localStorage.getItem('deviceList'));
if(deviceList){
  Device.all=deviceList;
  renderTable();
}else{
  Device.all=[];
}




var myForm=document.getElementById('myForm');
myForm.addEventListener('submit',onClickRender);

function onClickRender(e){
//   e.preventDefault();
  //   renderTableHeader();
  //   renderTable();
  var name= document.getElementById('ItemName').value;
  var category=document.getElementById('Category').value;
  var quantity= document.getElementById('Quantity').value;
  var unit= Math.floor(Math.random()* 750) +1 ;
  var deviceItem= new Device(name,category,quantity,unit);
  console.log(deviceItem);
  localStorage.setItem('deviceList',JSON.stringify(Device.all));
  renderTable();
  var myForm=document.getElementById('myForm');

  myForm.reset();

}
function renderTable(){
  renderTableHeader();

  var table=document.getElementById('tableSection');
  var tableBody=document.createElement('tbody');
  for(var i=0;i<Device.all.length;i++){
    var trE1=document.createElement('tr');
    // table.appendChild(trE1);

    var td1=document.createElement('td');
    trE1.appendChild(td1);
    td1.textContent=Device.all[i].name;

    var td2=document.createElement('td');
    trE1.appendChild(td2);
    td2.textContent=Device.all[i].quantity;

    var td3=document.createElement('td');
    trE1.appendChild(td3);
    td3.textContent=Device.all[i].unit;

    var td4=document.createElement('td');
    trE1.appendChild(td4);
    td4.textContent=Device.all[i].category;


    tableBody.appendChild(trE1);

  }
  table.appendChild(tableBody);
}

function renderTableHeader(){
  var header= document.getElementById('tableSection');
  var thE1=document.createElement('th');
  var tableRoww=document.createElement('tr');

  var th1=document.createElement('th');
  tableRoww.appendChild(th1);
  th1.textContent='Device Name';

  var thE2=document.createElement('th');
  tableRoww.appendChild(thE2);
  thE2.textContent='Quantity';

  var thE3=document.createElement('th');
  tableRoww.appendChild(thE3);
  thE3.textContent='Unit Price';

  var thE4=document.createElement('th');
  tableRoww.appendChild(thE4);
  thE4.textContent='Category';

  thE1.appendChild(tableRoww);
  header.appendChild(thE1);

}





