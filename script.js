// JavaScript File
function changeText() {
  const frasesRomanticas = [
    "Eduarda, você é o melhor presente que a vida me deu!",
    "Cada dia ao seu lado é um capítulo lindo da nossa história de amor.",
    "Teu sorriso ilumina meu mundo, Duda! 💖",
    "Se eu pudesse, parava o tempo só para ficar mais tempo com você.",
    "Meu coração bate mais forte toda vez que vejo seu nome.",
    "Amo você mais do que as palavras podem expressar.",
    "Você é minha paz, meu lar, meu amor eterno.",
    "Eduarda, você transformou minha vida em poesia.",
    "Meu amor por você cresce mais a cada dia.",
    "Eu sou completamente apaixonado por cada detalhe seu!",
  ]

  const texto = document.getElementById("text")

  // Evitar a repetição da mesma frase
  let fraseAleatoria
  do {
    fraseAleatoria =
      frasesRomanticas[Math.floor(Math.random() * frasesRomanticas.length)]
  } while (fraseAleatoria === texto.textContent) // Garante que a frase será diferente

  // Aplica uma transição de opacidade
  texto.style.opacity = 0

  setTimeout(() => {
    texto.textContent = fraseAleatoria
    texto.style.opacity = 1
  }, 300) // Pequeno delay para o efeito de transição
}
