
import React from 'react';



const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();

const buyData = [];
let direct:number=0
let indirect:number=0
for (let day = 1; day <= currentDayOfMonth; day++) {
  const directBuy = `${Math.floor(Math.random() * 5)}`;
  const indirectBuy = `${Math.floor(Math.random() * 3)}`;
  
  direct+=Number(directBuy)
  indirect+=Number(indirectBuy)
  


  
  const dayData = {
    id: day,
    day: `Day ${day}`,
    directBuy,
    indirectBuy,
    totalSales: Number(directBuy) + Number(indirectBuy),
  };
  
  buyData.push(dayData);
}



export const BuyRecord = {
  labels: buyData.map((data) => data.day),
  datasets: [
    {
      label: `$${direct}K Direct`,
      data: buyData.map((data) => Number(data.directBuy)),
      backgroundColor: "#c6d3fd",
    },
    {
      label: `$${indirect}K Indirect`,
      data: buyData.map((data) => Number(data.indirectBuy)),
      backgroundColor: "#6466f1",
    },
    {
      label: `$${indirect+direct}K Total `,
      // data: buyData.map((data) => data.totalSales),
     
    },
  ],
};






export const user=[
  {
    "_id": "651d1d26054d33a1d8def8be",
    "isActive": true,
    "balance": "$2,532.50",
    "picture": "http://placehold.it/32x32",
    "name": "Mullins Gallegos",
    "gender": "male",
    "company": "MOTOVATE",
    "email": "mullinsgallegos@motovate.com",
    "phone": "+1 (936) 451-3434",
    "country": "Uganda",
    "address": "663 Herkimer Place, Vincent, Tennessee, 9845",
    "about": "Et tempor commodo anim consectetur elit sit incididunt laboris dolor ut laborum dolore fugiat irure. Officia laborum ad ex mollit voluptate eiusmod. Irure irure ea consectetur labore laboris magna commodo velit tempor mollit elit consectetur anim laborum. Excepteur quis et ipsum commodo et reprehenderit cupidatat. Minim qui cillum minim pariatur irure elit pariatur do voluptate qui adipisicing consectetur. Nulla exercitation officia consequat sunt non nostrud qui veniam qui dolor fugiat. Consectetur ipsum et laborum Lorem eiusmod consequat enim ut in deserunt ad aliqua mollit.\r\n",
    "registered": "2020-10-20T03:31:54 -02:00",
    "productBought": "TV",
    "channel": "Facebook",
    "spending": 400.55
  },
  {
    "_id": "651d1d2642eb00c62ed888d8",
    "isActive": false,
    "balance": "$1,234.87",
    "picture": "http://placehold.it/32x32",
    "name": "Mayer Fisher",
    "gender": "female",
    "company": "RUBADUB",
    "email": "mayerfisher@rubadub.com",
    "phone": "+1 (813) 426-2470",
    "country": "Other",
    "address": "303 Foster Avenue, Fairforest, Colorado, 8584",
    "about": "Nulla id enim consequat consectetur laboris nisi anim do et esse adipisicing cupidatat aliquip. In dolor labore elit ea. Sint ullamco dolor consectetur ut adipisicing incididunt ipsum labore cillum mollit excepteur consequat ad.\r\n",
    "registered": "2014-05-22T06:33:09 -02:00",
    "productBought": "Laptop",
    "channel": "Google",
    "spending": 229.96
  },
  {
    "_id": "651d1d26a8dbd04153ce83c0",
    "isActive": false,
    "balance": "$1,635.38",
    "picture": "http://placehold.it/32x32",
    "name": "Edwards Vance",
    "gender": "female",
    "company": "FITCORE",
    "email": "edwardsvance@fitcore.com",
    "phone": "+1 (976) 467-2019",
    "country": "Rwanda",
    "address": "272 Hinsdale Street, Riverton, Louisiana, 2082",
    "about": "Voluptate aliquip cupidatat esse nostrud do esse occaecat non cupidatat nulla. Dolor elit fugiat duis sit mollit ut adipisicing irure eu pariatur do aliquip laboris qui. Laboris consectetur irure ex commodo in et ex officia nulla. Proident cupidatat tempor laboris magna anim non veniam ad cupidatat elit proident anim aute nisi.\r\n",
    "registered": "2017-07-07T07:36:55 -02:00",
    "productBought": "strawberry",
    "channel": "Facebook",
    "spending": 455.43
  },
  {
    "_id": "651d1d2651872fd6e547ae3a",
    "isActive": true,
    "balance": "$3,468.07",
    "picture": "http://placehold.it/32x32",
    "name": "Georgina Fuller",
    "gender": "male",
    "company": "AUTOMON",
    "email": "georginafuller@automon.com",
    "phone": "+1 (809) 518-2631",
    "country": "Rwanda",
    "address": "491 Hudson Avenue, Dalton, North Carolina, 2935",
    "about": "Cillum irure aliqua nisi nostrud aliquip elit voluptate esse cillum do quis elit. Anim consequat esse cillum amet in. Commodo aliqua sunt anim laboris magna excepteur amet in ea commodo aliqua nulla deserunt.\r\n",
    "registered": "2017-08-25T05:57:33 -02:00",
    "productBought": "TV",
    "channel": "Instagram",
    "spending": 251.64
  },
  {
    "_id": "651d1d264df90746153c2d76",
    "isActive": false,
    "balance": "$2,176.42",
    "picture": "http://placehold.it/32x32",
    "name": "Adela Moody",
    "gender": "female",
    "company": "DEVILTOE",
    "email": "adelamoody@deviltoe.com",
    "phone": "+1 (939) 415-3700",
    "country": "Other",
    "address": "839 Centre Street, Greenfields, New Mexico, 8544",
    "about": "Proident occaecat est consectetur sit exercitation consequat. In in amet anim tempor aute. Eu adipisicing nulla do mollit id consectetur anim officia incididunt nostrud officia sunt pariatur. Adipisicing aliquip amet adipisicing consequat commodo sunt. Quis velit tempor minim eiusmod anim aute dolor commodo tempor non. Excepteur minim ex eu et Lorem labore laborum dolore elit id. Labore do do dolore minim Lorem quis labore.\r\n",
    "registered": "2016-12-21T03:41:44 -02:00",
    "productBought": "banana",
    "channel": "Facebook",
    "spending": 472.21
  },
  {
    "_id": "651d1d264b57d702e4ade547",
    "isActive": true,
    "balance": "$2,139.80",
    "picture": "http://placehold.it/32x32",
    "name": "Sheena Hughes",
    "gender": "female",
    "company": "OMATOM",
    "email": "sheenahughes@omatom.com",
    "phone": "+1 (857) 434-2087",
    "country": "Other",
    "address": "876 Pleasant Place, Grazierville, California, 821",
    "about": "Voluptate occaecat veniam ullamco velit Lorem enim ullamco. Reprehenderit consectetur culpa non aute occaecat fugiat dolor est mollit. Lorem officia ea minim occaecat. Velit esse duis commodo eu nostrud consequat. Occaecat non labore amet fugiat Lorem eu.\r\n",
    "registered": "2014-09-14T07:40:48 -02:00",
    "productBought": "Laptop",
    "channel": "Instagram",
    "spending": 486.82
  },
  {
    "_id": "651d1d2690714d1c7a1ce63c",
    "isActive": false,
    "balance": "$1,377.23",
    "picture": "http://placehold.it/32x32",
    "name": "Rene Christian",
    "gender": "male",
    "company": "XTH",
    "email": "renechristian@xth.com",
    "phone": "+1 (832) 433-3688",
    "country": "Rwanda",
    "address": "515 Herkimer Street, Saticoy, Federated States Of Micronesia, 2297",
    "about": "Labore cupidatat sit esse Lorem consectetur excepteur do labore aute nulla do. Sint excepteur ad ex in officia labore voluptate et sint nulla excepteur veniam. Labore ad ad qui mollit dolore adipisicing labore. Cillum esse fugiat ex qui laboris do laboris duis elit proident elit id occaecat.\r\n",
    "registered": "2020-01-16T11:25:11 -02:00",
    "productBought": "Laptop",
    "channel": "Google",
    "spending": 463.31
  },
  {
    "_id": "651d1d26246cc2037898f252",
    "isActive": true,
    "balance": "$1,576.35",
    "picture": "http://placehold.it/32x32",
    "name": "Sharron Reynolds",
    "gender": "female",
    "company": "MAINELAND",
    "email": "sharronreynolds@maineland.com",
    "phone": "+1 (884) 554-3899",
    "country": "Other",
    "address": "535 Greene Avenue, Inkerman, Kansas, 3622",
    "about": "Mollit aute laboris in consectetur enim tempor occaecat exercitation sint. Velit ullamco occaecat commodo elit irure cillum consectetur voluptate. Cillum incididunt esse nisi sit laboris reprehenderit labore in et nisi exercitation minim. Laboris ad elit dolore eu nulla consequat deserunt laborum laborum enim dolore quis mollit officia.\r\n",
    "registered": "2017-10-12T12:45:00 -02:00",
    "productBought": "strawberry",
    "channel": "Instagram",
    "spending": 306.21
  },
  {
    "_id": "651d1d26c91281432bb9146c",
    "isActive": false,
    "balance": "$2,271.16",
    "picture": "http://placehold.it/32x32",
    "name": "Ginger Copeland",
    "gender": "female",
    "company": "HAWKSTER",
    "email": "gingercopeland@hawkster.com",
    "phone": "+1 (847) 453-3896",
    "country": "Rwanda",
    "address": "103 Sullivan Place, Mayfair, South Carolina, 8430",
    "about": "Quis ex enim aliqua laboris occaecat voluptate laborum ad elit ullamco fugiat elit duis. In enim ipsum consectetur commodo mollit non eiusmod sit laborum eu velit cupidatat reprehenderit cupidatat. Veniam velit ea cupidatat deserunt do. Ex nostrud quis culpa fugiat est amet excepteur excepteur ut ut.\r\n",
    "registered": "2017-08-06T10:23:07 -02:00",
    "productBought": "Phone",
    "channel": "Google",
    "spending": 13.68
  },
  {
    "_id": "651d1d26c3a3d21a559ae91d",
    "isActive": false,
    "balance": "$3,011.30",
    "picture": "http://placehold.it/32x32",
    "name": "Townsend Rogers",
    "gender": "female",
    "company": "ZAYA",
    "email": "townsendrogers@zaya.com",
    "phone": "+1 (947) 448-2518",
    "country": "Other",
    "address": "720 Portland Avenue, Jacksonwald, Maine, 3077",
    "about": "Dolor commodo eiusmod ullamco sunt cupidatat deserunt. Sit labore irure exercitation non esse ea excepteur esse esse. Magna officia non laborum fugiat enim proident. Id sit nostrud proident nulla mollit sit adipisicing cupidatat commodo eiusmod eiusmod tempor tempor aute. Sunt proident et aliquip aute officia cillum fugiat nisi tempor id quis laboris nisi. Laborum id ad ad ea duis commodo in voluptate. Magna Lorem eiusmod occaecat incididunt adipisicing nisi.\r\n",
    "registered": "2017-09-29T02:43:34 -02:00",
    "productBought": "TV",
    "channel": "Google",
    "spending": 316
  },
  {
    "_id": "651d1d26485980fb28153e71",
    "isActive": true,
    "balance": "$2,456.12",
    "picture": "http://placehold.it/32x32",
    "name": "Tyson Morrow",
    "gender": "male",
    "company": "PHUEL",
    "email": "tysonmorrow@phuel.com",
    "phone": "+1 (943) 559-2888",
    "country": "Uganda",
    "address": "934 Hanover Place, Coyote, New Jersey, 926",
    "about": "Fugiat non quis magna duis aliqua velit anim. Elit esse deserunt elit amet excepteur consectetur ea nisi qui voluptate duis ut laboris proident. Mollit ullamco anim esse laborum do voluptate fugiat id mollit. Dolore aute ullamco anim fugiat duis ipsum laborum Lorem ex et Lorem ipsum dolor aliqua. Ipsum labore officia excepteur culpa velit fugiat magna reprehenderit excepteur mollit magna aliquip cupidatat.\r\n",
    "registered": "2023-05-08T02:17:11 -02:00",
    "productBought": "banana",
    "channel": "Twitter",
    "spending": 95.81
  }
]


let rwanda=0
let uganda=0
let other=0
for( let i = 0; i <user.length; i++ ){
  if(user[i].country==="Rwanda"){
     rwanda +=1
  }else if(user[i].country==="Uganda"){
     uganda +=1
  }else{
     other +=1
  }
     
}

console.log("user: ",uganda,other,rwanda);



const data = {
  labels: [
    'Rwanda',
    'Uganda',
    'Other'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [rwanda,uganda,other],
    backgroundColor: [
      '#6466f1',
      'rgb(54, 162, 235)',
      '#c6d3fd'
    ],
    hoverOffset: 1,
    borderRadius:1,
  
  }]
};

// const data={
//     labels: user.map((data) => data.country),
//     datasets:[

//        { label: ``, 
//        backgroundColor:['#6466f1'],
//        data: rwanda , 
// },

// {
//   label: '',
//   data: uganda ,
//   backgroundColor: "#c6d3fd",
// },
// {
//   label: '',
//   data: other,
//   backgroundColor: "#6466f1",
// },

//     ]
// }

export default data



