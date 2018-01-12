import * as firebase from "firebase";
import moment from "moment";

const config = {
  apiKey: "AIzaSyC78CgeG1417Wb5NoWg20JADi2u2QBKkYs",
  authDomain: "expensify-2a210.firebaseapp.com",
  databaseURL: "https://expensify-2a210.firebaseio.com",
  projectId: "expensify-2a210",
  storageBucket: "expensify-2a210.appspot.com",
  messagingSenderId: "469365924432"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref("expenses").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref("expenses").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref("expenses").on("child_added", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref("expenses").push({
//   description: "harddrives",
//   note: "Sony SSD",
//   amount: 17699,
//   createdAt: 2342309234234
// });

// database.ref("expenses").push({
//   description: "monitor",
//   note: "Samsung",
//   amount: 17699,
//   createdAt: 22309234234
// });

// database.ref("expenses").push({
//   description: "water cooling",
//   note: "Alphacool",
//   amount: 37699,
//   createdAt: 2309234234
// });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database
//   .ref("expenses")
//   .push({
//     description: "Gum",
//     note: "Wintergreen",
//     amount: 195,
//     createdAt: 1
//   })
//   .then(() => {
//     console.log("Note 1 is saved");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// remove unique identifier note
// database.ref("notes/-L2bOrDmd7Xnc_Qp_uG_").remove();

// update unique identifier note
// database.ref("notes/-L2bOrDmd7Xnc_Qp_uG_").update({
//   body: "Buy food"
// });

// Add note to database with unique identifier
// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular, Python"
// });

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off("value", onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// setup data sub -> Charles is a software developer at amazon
// database.ref().on("value", snapshot => {
//   const refName = snapshot.val();
//   console.log(
//     `${refName.name} is a ${refName.job.title} at ${refName.job.company}`
//   );
// });
// change the data and make sure it reprints

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data");
//   });

// database
//   .ref()
//   .set({
//     name: "Charles Robinson",
//     age: 36,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google"
//     },
//     location: {
//       city: "Greenville",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// change the stressLevel to a 9
// change job.company to Amazon
// change location.cty to Seattle

// database.ref("isSingle").set(null);  // alternative way to remove

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch(e => {
//     console.log("Removed failed: " + e.message);
//   });
