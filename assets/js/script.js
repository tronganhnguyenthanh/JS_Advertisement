setInterval(() => {
  getImage()
},1000);
function getImage(){
 document.querySelector("#webpage").innerHTML = `<img src="https://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16122061-1280-800.jpg" alt=""/>`
}

document.querySelector(".btn.btn-secondary").addEventListener("click", function(){
  document.querySelector(".wrapper").style.display = "none"
  setInterval(() => {
    document.querySelector(".wrapper").style.display = "block"
    document.querySelector("#loading").style.display = "none"
   },5000)
})