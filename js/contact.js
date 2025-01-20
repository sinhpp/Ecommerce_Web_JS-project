
// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfbNwTEY3ipmN4zU1KmCWYXGM6Ptcszws",
  authDomain: "store-data-ef592.firebaseapp.com",
  databaseURL: "https://store-data-ef592-default-rtdb.firebaseio.com",
  projectId: "store-data-ef592",
  storageBucket: "store-data-ef592.appspot.com",
  messagingSenderId: "1006676453603",
  appId: "1:1006676453603:web:b0504e1f41d7fa05e23dd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create a new entry in the database
  const contactRef = ref(database, 'contacts');
  const newContact = {
    firstName,
    lastName,
    phone,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  // Push data to Firebase
  push(contactRef, newContact)
    .then(() => {
      alert('Message submitted successfully!');
      contactForm.reset();
    })
    .catch((error) => {
      console.error('Error submitting message:', error);
      alert('Failed to submit message. Please try again.');
    });
});
