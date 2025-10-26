// app.js
// זהו קובץ ה-JavaScript שמטפל בחיבור ל-Firebase ושמירת תשובות

// טוענים את ספריות Firebase מהאינטרנט
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUz4oPw2kumoT9q7ONGLSGgcuYFlnc89o",
  authDomain: "who-we-are-dee11.firebaseapp.com",
  databaseURL:"https://who-we-are-dee11-default-rtdb.firebaseio.com",
  projectId: "who-we-are-dee11",
  storageBucket: "who-we-are-dee11.firebasestorage.app",
  messagingSenderId: "685866712511",
  appId: "1:685866712511:web:a41b29e6a69b8ac889350a"
};

// מפעילים את החיבור ל-Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// פונקציה ששומרת את התשובה במסד הנתונים
export async function submitAnswer({ name, answer }) {
  const answersRef = ref(db, "answers"); // "answers" = שם הרשימה במסד הנתונים
  await push(answersRef, {
    name: name,
    answer: answer,
    submittedAt: Date.now()
  });
}
