// Usando o método simples para definir o conteúdo do título
document.getElementById('titulo').innerText = 'Produto em Destaque';

// Usando o método complexo para definir o conteúdo do produto
const produto = document.getElementById('produto');
produto.innerHTML = '<h2>Smartphone XYZ</h2><p>Descrição do produto: Um smartphone avançado com câmera de alta resolução e desempenho incrível.</p><p>Preço: R$ 999,99</p><img src="smartphone.jpg" alt="Smartphone XYZ">';