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
  body.classList.toggle('claro'); //Se o body já tiver a classe claro, remova. Se não adicione.
  //Alterna o tema visual da página.

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
const botaoTopo = document.createElement('button'); //cria o elemento 
botaoTopo.textContent = '↑';  // coloca o texto do elemento
botaoTopo.id = 'voltarTopo'; // adiciona o id 
document.body.appendChild(botaoTopo);

window.addEventListener('scroll', () => { //quantas pixels foram roladas
  if (window.scrollY > 400) {  // se rolou mais de 400px
    botaoTopo.style.display = 'block';// aparece
  } else {
    botaoTopo.style.display = 'none'; // se não esconda
  }
});

botaoTopo.addEventListener('click', () => { //se o evento clicar acontecer 
  window.scrollTo({// vá para
    top: 0, // vai para o topo
    behavior: 'smooth' // faz com que vá suavemente
  });
});
//Código para adicionar o formulário da janela modal

function AbrirModal(){ //cria a função
  const modal = document.getElementById('janela-modal') //busca o elemento de html (tá no index)
  modal.classList.add('abrir')// adicona a classe de css

  modal.addEventListener('click' , (e)=>{ // verifica qualquer clicada na janela modal
    if(e.target.id == 'fechar'){ // se clicar no botão (do html)
      modal.classList.remove('abrir')// remove o css
    }
  })
}
// Hamburger menu functionality
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;
document.querySelector('.menu').prepend(hamburger);

const menuLinks = document.querySelector('.menu-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuLinks.classList.toggle('active');
});

// Close menu when clicking a link on mobile
menuLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove('active');
      menuLinks.classList.remove('active');
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && 
      !hamburger.contains(e.target) && 
      !menuLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    menuLinks.classList.remove('active');
  }
});
