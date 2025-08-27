export function setupCartButtons() {
  const buttons = document.querySelectorAll('.btn-outline-danger');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Produto adicionado ao carrinho!');
    });
  });
}
