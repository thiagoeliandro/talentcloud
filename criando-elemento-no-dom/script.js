// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Teste do Sextou!";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>1, 2, 3 ou 4?</h2>
    <img src="./img/teste-do-sextou.png" alt="Sextou!">
    <p>Escolha um mood e seja feliz.</p>
    <p id="teste-do-sextou">Põe na conta do Abreu.</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)