// Capturando os elementos HTML pelos IDs
const titulo = document.getElementById('titulo');
const listaOrdenada = document.getElementById('lista-ordenada');

// Capturando o elemento 'ul' e 'a'
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a'); 

// Adicionando conteúdo de texto aos elementos 'h1' e 'a'
titulo.innerText = 'Utilizando innerText e innerHTML';
listaNaoOrdenada.id = 'lista-nao-ordenada';
link.href = 'https://prozeducacao.com.br';
link.innerText = 'Visitar Proz Educação';

// Adicionando itens na lista não ordenada usando innerHTML
listaNaoOrdenada.innerHTML = `
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
`;

// Adicionando itens com links na lista ordenada usando innerHTML
listaOrdenada.innerHTML = `
  <li><a href="https://site1.com" target="_blank">Site 1</a></li>
  <li><a href="https://site2.com" target="_blank">Site 2</a></li>
  <li><a href="https://site3.com" target="_blank">Site 3</a></li>
`;
