document.querySelector(".bars-menu").addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-items").classList.toggle("active");
    });
  });
 // select main page 
newFunction();

function newFunction() {
  let mainpage = document.querySelector(".main");
  // get array of imgs
  let imagesarray = ["imge1.webp", "imge2.webp", "imge5.jpg.webp"];


  setInterval(() => {

    // get random number
    let randomNumber = Math.floor(Math.random() * imagesarray.length);
    // change background img url
    mainpage.style.backgroundImage = 'url("imges/' + imagesarray[randomNumber] + '")';
    console.log(randomNumber);
  }, 5000);
}
