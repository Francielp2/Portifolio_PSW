const body = document.querySelector('body');
const icone = document.querySelector('.icone');
const iconeInterno = icone.querySelector('i');

// Função para aplicar o tema salvo
function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'claro') {
    body.classList.add('claro');
    iconeInterno.classList.add('fa-sun');
    iconeInterno.classList.remove('fa-moon');
    
  } else {
    body.classList.remove('claro');
    iconeInterno.classList.add('fa-moon');
    iconeInterno.classList.remove('fa-sun');
  }
}

// Aplica o tema salvo ao carregar a página
aplicarTemaSalvo();

// Evento de clique para trocar o tema
icone.addEventListener('click', () => {
  body.classList.toggle('claro');

  // Atualiza o ícone
  iconeInterno.classList.toggle('fa-moon');
  iconeInterno.classList.toggle('fa-sun');

  // Salva o novo tema no localStorage
  if (body.classList.contains('claro')) {
    localStorage.setItem('tema', 'claro');
  } else {
    localStorage.setItem('tema', 'escuro');
  }
});

// Botão de "voltar ao topo"
const botaoTopo = document.createElement('button');
botaoTopo.textContent = '↑';
botaoTopo.id = 'voltarTopo';
document.body.appendChild(botaoTopo);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    botaoTopo.style.display = 'block';
  } else {
    botaoTopo.style.display = 'none';
  }
});

botaoTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
//Código para adicionar o formulário da janela modal

function AbrirModal(){
  const modal = document.getElementById('janela-modal')
  modal.classList.add('abrir')

  modal.addEventListener('click' , (e)=>{
    if(e.target.id == 'fechar'){
      modal.classList.remove('abrir')
    }
  })
}


