import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrMJOCJg7BWl8RzBQwuZgfkSpwwbPyI2M",
  authDomain: "mailchef-club.firebaseapp.com",
  projectId: "mailchef-club",
  storageBucket: "mailchef-club.appspot.com",
  messagingSenderId: "80482773088",
  appId: "1:80482773088:web:e9e4691836653524f2bb05",
  measurementId: "G-1VB15JVNJB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };



//OLD CODE

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getauth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDLVc3eY_nDJIN456OtwK-BNzmLZPGV6xI",
//   authDomain: "flappy-bird-73f3e.firebaseapp.com",
//   projectId: "flappy-bird-73f3e",
//   storageBucket: "flappy-bird-73f3e.appspot.com",
//   messagingSenderId: "280886096397",
//   appId: "1:280886096397:web:d7966ad1c7bd2e52979b44",
//   measurementId: "G-Q7LT2VR698"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getauth(app);

// export{app,auth}; 


//Initialize Firebase