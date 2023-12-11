// function setNewImage(){
//     document.getElementById("img").src ="../Images/hall/review1 (2).jpg";
  
// }
// function setOldImage(){
//     document.getElementById("img").src ="../Images/hall/review1 (1).jpg";

// }
// function Light() {
//     const Element = document.getElementById("DarkMode");
//     Element.className = "body";
// }

// function Dark() {
//     const Element = document.getElementById("DarkMode");
//     Element.className = "Dark";
// }


// var swiper = new Swiper(".home-slider", {
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// var swiper = new Swiper(".room-slider", {
//     spaceBetween: 20,
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         991: {
//             slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".gallery-slider", {
//     spaceBetween: 10,
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 3,
//         },
//         991: {
//             slidesPerView: 4,
//         },
//     },
// });

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 10,
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, setDoc, doc,getDocs,collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDL1hdN-lhzZnGR5O6p-0G06bCaZWp6gGo",
  authDomain: "wedding-planer-51267.firebaseapp.com",
  projectId: "wedding-planer-51267",
  storageBucket: "wedding-planer-51267.appspot.com",
  messagingSenderId: "861818527130",
  appId: "1:861818527130:web:00a1bc36e2d63e44beee23",
  measurementId: "G-BKGQPJNS2B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("button").addEventListener("click", async () => {
  const Name = document.getElementById("Name").value;
  const email = document.getElementById("email").value;
  const ocasion = document.getElementById("ocasion").value;
  const members = document.getElementById("members").value;
  const days = document.getElementById("days").value;

  try {
    // Provide a unique document ID, for example, using the user's email as the ID
    const docRef = doc(db, "hallBooking", email);

    // Set data in Firestore
    await setDoc(docRef, {
      Name: Name,
      email: email,
      ocasion: ocasion,
      members: members,
      days: days
    });
   alert("Booked successfully")
    console.log("Data added successfully!");
  } catch (error) {
    console.error("Error adding data: ", error);
  }
});

export{db}