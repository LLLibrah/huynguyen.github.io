const para = document.getElementById('para');

window.addEventListener('scroll',function(){
  let offset = window.pageYOffset;
  para.style.backgroundPositionY = offset * 0.2 + "px"
})