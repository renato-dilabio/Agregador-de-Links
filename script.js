function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  /*
  if(html.classList.contains('light')){
    html.classList.remove('light');
  }else{
    html.classList.add('light');
  }
  */
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Renato sorrindo com feição pensativa e mão no queixo. Ele usa óculos, barba e seu cabelo cacheado está cortado baixo nas laterais e um pouco mais alto em cima."
    )
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute(
      "alt",
      "Foto de Renato sorrindo. Ele usa óculos escuros, barba e seu cabelo cacheado está cortado baixo nas laterais e um pouco mais alto em cima."
    )
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
