// //  OBJETIVO 1 ) ao clicar no botão "ver trailer, deve-se abrir a
// // modal com o video do trailer"

// // //passo 1) selcionar o botao de veja o trailer, usando o js;//
// const botaoTrailer = document.querySelector(".botao-trailer");
// //selcionar o video usando o js;//
// const botaoFecharModal = document.querySelector(".fechar-modal");
// const video = document.getElementById("video");
// //passo 3) pegar o elemento da modal no js;//
// const modal = document.querySelector(".modal");
// //pegar o elemento da video no js;//
// const linkDoVideo = video.src;

// //passo 2) identificar quando o usuáripo clicar no botão;//
// botaoTrailer.addEventListener("click", () => {
//   //passo 4) abrir a modal na tela.//
//   modal.classList.add("aberto");
//   //abrir o vídeo//
//   video.setAttribute("src", linkDoVideo);
// });
// //OBJETVO 2) quando clicar no "X", deve-se fechar o modal

// //passo 1) pegaro elemento de fechar modal pelo js;//
// const botaoFecharModal = document.querySelector(".fechar-modal");
// //passo 2) identificar quando o usuáripo clicar no Xo;//
// botaoFecharModal.addEventListener("click", () => {
//   //passo 3) fechar a modal;/
//   modal.classList.remove("aberto");
//   //fechar o som do video//
//   video.setAttribute("src", "");
// });

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal() {
  modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});
