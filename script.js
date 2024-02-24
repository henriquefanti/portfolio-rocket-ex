//função para deslizar o botão
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //Pegar a tag img
  //query pesquisar por seletor
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //SENÃO manter imagem normal
    img.setAttribute("src","./assets/avatar.png")
  }
}
