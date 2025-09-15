export function setupCepLookup() {
  const inputCep = document.getElementById('cep');
  const inputEndereco = document.getElementById('endereco');

  if (!inputCep || !inputEndereco) return;

  inputCep.addEventListener('blur', () => {
    const cep = inputCep.value.replace(/\D/g, '');

    if (cep.length !== 8) {
      alert('CEP inválido.');
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado.');
        } else {
          inputEndereco.value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        }
      })
      .catch(() => alert('Erro ao buscar o CEP.'));
  });
}
