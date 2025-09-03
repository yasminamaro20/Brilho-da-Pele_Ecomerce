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

## 📋 10 Casos de Teste – Brilho na Pele

🔹 CT01 – Consulta CEP válido
**Descrição: Verificar se ao digitar um CEP válido o endereço é exibido.**
**Pré-condição: Usuário acessa a página de consulta.**
**Passos:**
**Digitar 01001000 no campo CEP.**
**Sair do campo (blur).**
**Resultado esperado: Campo de endereço exibe Praça da Sé, Sé - São Paulo/SP.**

## 🔹 CT02 – Consulta CEP inválido
**Descrição: Verificar comportamento ao digitar CEP com menos de 8 dígitos.**
**Entrada: 12345**
**Resultado esperado: Mensagem "CEP inválido".**

## 🔹 CT03 – Consulta CEP inexistente
**Descrição: Verificar se a API retorna erro para CEP inexistente.**
**Entrada: 99999999**
**Resultado esperado: Mensagem "CEP não encontrado".**

## 🔹 CT04 – Erro na API
**Descrição: Verificar comportamento quando a API ViaCEP estiver fora do ar.**
**Ação: Desconectar internet e digitar um CEP válido.**
**Resultado esperado: Mensagem "Erro ao consultar API".**

## 🔹 CT05 – Link "Entre"
**Descrição: Verificar se o link "Entre" leva para a página correta.**
**Passos: Clicar em Entre.**
**Resultado esperado: Redirecionar para entrar.html.**

## 🔹 CT06 – Link "Cadastre-se"
**Descrição: Verificar se o link "cadastre-se" funciona corretamente.**
**Passos: Clicar em cadastre-se.**
**Resultado esperado: Redirecionar para long.html.**

## 🔹 CT07 – Busca de produtos
**Descrição: Verificar se a barra de busca permite digitar um produto.**
**Passos: Digitar "batom" e clicar em Buscar.**
**Resultado esperado: Página exibe resultados relacionados (ou mensagem "nenhum produto encontrado").**

## 🔹 CT08 – Adicionar produto ao carrinho
**Descrição: Verificar se botão "Adicionar ao Carrinho" funciona.**
**Passos:**
**Clicar em "Adicionar ao Carrinho" no produto Mascavo Shape Stick.**
**Resultado esperado: Produto é adicionado e aparece no carrinho.**

## 🔹 CT09 – Redirecionamento para pagamento
**Descrição: Verificar se ao clicar em pagamento, o usuário é direcionado para a página correta.**
**Passos: Clicar no link pagamento na navbar.**
**Resultado esperado: Redirecionar para pagamento.html.**

## 🔹 CT10 – Responsividade
**Descrição: Validar se o site é responsivo em dispositivos móveis.**
**Passos:**
**Acessar site no navegador em modo mobile (ex.: 375x667px).**
**Resultado esperado: Layout adaptado, sem quebra de elementos.**
