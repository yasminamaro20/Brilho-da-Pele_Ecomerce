// Captura o formulário
const formBusca = document.getElementById("formBusca");
const campoBusca = document.getElementById("campoBusca");

formBusca.addEventListener("submit", function(event) {
  event.preventDefault(); // evita recarregar a página

  const termo = campoBusca.value.trim().toLowerCase();

  if (termo === "") {
    alert("Digite algo para buscar!");
    return;
  }

  // Exemplo simples: procurar nos nomes dos produtos
  const produtos = document.querySelectorAll(".product-card h5");
  let encontrou = false;

  produtos.forEach(produto => {
    if (produto.textContent.toLowerCase().includes(termo)) {
      produto.scrollIntoView({ behavior: "smooth", block: "center" });
      produto.style.backgroundColor = "#fff3cd"; // destaque
      encontrou = true;
    }
  });

  if (!encontrou) {
    alert("Nenhum produto encontrado para: " + termo);
  }
});

function addCarrinho(){
    alert('')
    window.location.href = 'Carrinho.html';
}