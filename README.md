# 💄 Brilho na Pele - Loja de Maquiagem

## 📌 Escopo
O projeto **Brilho na Pele** é um site de venda de maquiagens, onde os usuários poderão visualizar produtos, pesquisar informações e simular pedidos.  
O objetivo é oferecer uma experiência simples, bonita e funcional, utilizando consumo de APIs para complementar informações (ex: CEP e produtos).

## 🎯 Justificativa
Um site de beleza oferece uma plataforma para compartilhar dicas, tendências e produtos de cuidado pessoal. Pode incluir:

- Dicas de maquiagem e cuidados com a pele
- Tendências de moda e estilo
- Avaliações de produtos de beleza
- Tutoriais e vídeos instrutivos

O objetivo é ajudar as pessoas a se sentirem mais confiantes e bonitas. Você gostaria de saber mais sobre como criar conteúdo para um site de beleza?
- Praticar consumo de APIs públicas.
- Estruturar um projeto web com HTML, CSS, JavaScript e Bootstrap.
- Exercitar boas práticas de versionamento com Git e GitHub.
- Simular um site real de e-commerce de maquiagem.

## 🛠️ Tecnologias
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Bootstrap 5**
- **Git & GitHub**

## 🌐 APIs Utilizadas
- [Fake Store API](https://fakestoreapi.com/) → simulação de produtos e preços.  
- [ViaCEP](https://viacep.com.br/) → preenchimento automático de endereço no checkout.  

## 🖼️ Protótipo (canva)
Os wireframes estão disponíveis na pasta `/canva`.

https://www.canva.com/design/DAGw0TmVnL8/NzDvVbW9fQiscRLGjWV9-w/edit

# 📑 Casos de Teste - Brilho na Pele

Este documento contém a descrição dos testes planejados para validar o funcionamento do site **Brilho na Pele**.

---

## 🔹 CT01 - Link "Entre"
- **Descrição:** Verificar se o link "Entre" redireciona para `entrar.html`.
- **Passos:**
  1. Acessar a página inicial.
  2. Clicar em "Entre".
- **Resultado Esperado:** Usuário deve ser redirecionado para a página de login.

## 🔹 CT02 - Link "Cadastre-se"
- **Descrição:** Verificar se o link "cadastre-se" redireciona para `long.html`.
- **Passos:**
  1. Acessar a página inicial.
  2. Clicar em "Cadastre-se".
- **Resultado Esperado:** Usuário deve ser redirecionado para a página de cadastro.

## 🔹 CT03 - Links de Categorias
- **Descrição:** Validar se os links de categorias (Maquiagem, Mãos e Pés, Cabelos) funcionam.
- **Passos:**
  1. Acessar a página inicial.
  2. Clicar em cada link de categoria.
- **Resultado Esperado:** Deve carregar a página correspondente ou exibir os produtos.

## 🔹 CT04 - Adicionar Produto ao Carrinho
- **Descrição:** Verificar se o botão "Adicionar ao Carrinho" redireciona corretamente.
- **Passos:**
  1. Acessar a página inicial.
  2. Selecionar um produto e clicar em "Adicionar ao Carrinho".
- **Resultado Esperado:** Usuário deve ser levado à página do carrinho referente ao produto.

## 🔹 CT05 - Preços dos Produtos
- **Descrição:** Conferir se os preços exibidos estão corretos conforme cadastro.
- **Passos:**
  1. Acessar a página inicial.
  2. Verificar preços exibidos nos produtos em destaque.
- **Resultado Esperado:** Valores devem corresponder ao cadastro.

## 🔹 CT06 - Barra de Busca
- **Descrição:** Validar a funcionalidade da busca de produtos.
- **Passos:**
  1. Digitar "batom" na barra de busca.
  2. Clicar em "Buscar".
- **Resultado Esperado:** Produtos relacionados devem ser listados ou exibir mensagem de não encontrado.

## 🔹 CT07 - Consulta de CEP Válido
- **Descrição:** Validar preenchimento automático de endereço com CEP válido.
- **Passos:**
  1. Digitar `01001000` no campo CEP.
- **Resultado Esperado:** Campo "Endereço" deve ser preenchido corretamente.

## 🔹 CT08 - Consulta de CEP Inválido
- **Descrição:** Validar comportamento ao inserir CEP inexistente.
- **Passos:**
  1. Digitar `99999999` no campo CEP.
- **Resultado Esperado:** Sistema deve exibir mensagem de erro ou não preencher o campo.

## 🔹 CT09 - Responsividade em Celular
- **Descrição:** Validar layout em dispositivos móveis.
- **Passos:**
  1. Abrir o site em um smartphone ou usar ferramenta de DevTools.
- **Resultado Esperado:** Layout deve se adaptar sem distorções.

## 🔹 CT10 - Responsividade em Tablet
- **Descrição:** Validar layout em tablets.
- **Passos:**
  1. Abrir o site em modo tablet (ex: 768px).
- **Resultado Esperado:** Cards de produto devem se alinhar em 2 por linha.

## 🔹 CT11 - Acessibilidade das Imagens
- **Descrição:** Verificar se todas as imagens possuem atributo `alt`.
- **Passos:**
  1. Inspecionar o código fonte das imagens.
- **Resultado Esperado:** Todas as imagens devem conter `alt` descritivo.

## 🔹 CT12 - Navegação por Teclado
- **Descrição:** Validar se é possível navegar usando apenas teclado.
- **Passos:**
  1. Pressionar TAB para navegar entre links e botões.
- **Resultado Esperado:** Todos os elementos devem ser acessíveis.

---

📌 **Versionamento dos Testes**
- Criar branch `testes`:  
  ```bash
  git checkout -b testes
  ```
- Adicionar arquivos de teste:  
  ```bash
  git add tests/casos_teste.md
  git commit -m "Adiciona casos de teste do site Brilho na Pele"
  ```
- Enviar para o repositório remoto:  
  ```bash
  git push origin testes
  ```
