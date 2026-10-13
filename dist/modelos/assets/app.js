const app = document.querySelector('#app');
const page = document.body.dataset.page || 'hub';
const bgtechContact = {
  whatsappNumber: '5511920193443',
  whatsappDisplay: '(11) 92019-3443',
  instagramUrl: 'https://www.instagram.com/bgtech.consulting/',
  instagramDisplay: '@bgtech.consulting',
  email: 'bgtechenterprise@gmail.com',
};

const models = [
  { id: 'dentista', title: 'Odontologia', brand: 'OdontoViva', image: 'hero-dentista.jpg', tone: 'Leve, clínico e acolhedor', tags: ['Agendamento', 'Serviços', 'FAQ'] },
  { id: 'advocacia', title: 'Advocacia', brand: 'Lumen Advocacia', image: 'hero-advocacia.jpg', tone: 'Institucional, sóbrio e confiável', tags: ['Áreas de atuação', 'Equipe', 'Contato'] },
  { id: 'contabilidade', title: 'Contabilidade', brand: 'Nexo Contábil', image: 'hero-contabilidade.jpg', tone: 'Objetivo, organizado e empresarial', tags: ['Soluções', 'Processo', 'Diagnóstico'] },
  { id: 'estetica', title: 'Estética', brand: 'Aura Clínica', image: 'hero-estetica.jpg', tone: 'Elegante, sereno e contemporâneo', tags: ['Tratamentos', 'Experiência', 'Agenda'] },
  { id: 'restaurante', title: 'Restaurante', brand: 'Casa Brasa', image: 'hero-restaurante.jpg', tone: 'Sensorial, marcante e convidativo', tags: ['Menu', 'Reservas', 'Horários'] },
  { id: 'educacao', title: 'Educação', brand: 'Horizonte Escola Digital', image: 'hero-educacao.jpg', tone: 'Dinâmico, claro e inspirador', tags: ['Cursos', 'Metodologia', 'Matrículas'] },
];

const sites = {
  dentista: {
    brand: 'OdontoViva', mark: 'OV', label: 'Clínica odontológica', image: 'hero-dentista.jpg', layout: 'dental',
    eyebrow: 'Cuidado que começa pela confiança',
    headline: 'Seu sorriso merece atenção em cada detalhe.',
    body: 'Atendimento odontológico próximo, tecnologia atual e um plano de cuidado explicado com clareza.',
    primary: 'Agendar avaliação', secondary: 'Conhecer tratamentos',
    services: [
      ['Prevenção', 'Acompanhamento periódico e orientação para preservar a saúde bucal.'],
      ['Estética do sorriso', 'Planejamento individualizado com equilíbrio e naturalidade.'],
      ['Reabilitação', 'Soluções funcionais pensadas para conforto e segurança.'],
    ],
    details: ['Atendimento com horário marcado', 'Explicação clara de cada etapa', 'Ambiente acolhedor e acessível'],
  },
  advocacia: {
    brand: 'Lumen Advocacia', mark: 'L', label: 'Atuação jurídica institucional', image: 'hero-advocacia.jpg', layout: 'law',
    eyebrow: 'Clareza para decisões importantes',
    headline: 'Orientação jurídica com método, responsabilidade e proximidade.',
    body: 'Atendimento consultivo e preventivo para pessoas e empresas, com comunicação objetiva em cada etapa.',
    primary: 'Solicitar atendimento', secondary: 'Áreas de atuação',
    services: [
      ['Direito empresarial', 'Apoio jurídico para contratos, relações comerciais e decisões societárias.'],
      ['Direito civil', 'Orientação responsável para demandas patrimoniais e relações privadas.'],
      ['Consultoria preventiva', 'Análise de riscos e organização jurídica antes que o problema apareça.'],
    ],
    details: ['Atendimento reservado', 'Análise individual do contexto', 'Comunicação sem juridiquês'],
  },
  contabilidade: {
    brand: 'Nexo Contábil', mark: 'N', label: 'Contabilidade consultiva', image: 'hero-contabilidade.jpg', layout: 'accounting',
    eyebrow: 'Dados organizados. Decisões melhores.',
    headline: 'Contabilidade que ajuda sua empresa a enxergar o próximo passo.',
    body: 'Rotinas contábeis, fiscais e gerenciais reunidas em uma experiência clara para quem empreende.',
    primary: 'Solicitar diagnóstico', secondary: 'Ver soluções',
    services: [
      ['Abertura e regularização', 'Orientação para estruturar o negócio desde o início.'],
      ['Fiscal e contábil', 'Obrigações acompanhadas com organização e previsibilidade.'],
      ['Gestão consultiva', 'Indicadores traduzidos em informação útil para decidir.'],
    ],
    details: ['Prazos organizados', 'Visão gerencial', 'Atendimento próximo'],
  },
  estetica: {
    brand: 'Aura Clínica', mark: 'A', label: 'Estética e bem-estar', image: 'hero-estetica.jpg', layout: 'beauty',
    eyebrow: 'Beleza com leveza e individualidade',
    headline: 'Um cuidado que respeita sua beleza natural.',
    body: 'Protocolos personalizados, ambiente acolhedor e acompanhamento atento para uma experiência segura e tranquila.',
    primary: 'Agendar conversa', secondary: 'Conhecer cuidados',
    services: [
      ['Cuidados faciais', 'Protocolos definidos conforme objetivos e características individuais.'],
      ['Bem-estar corporal', 'Experiências planejadas para conforto, autocuidado e equilíbrio.'],
      ['Avaliação personalizada', 'Uma conversa cuidadosa antes de qualquer indicação.'],
    ],
    details: ['Atendimento personalizado', 'Ambiente reservado', 'Acompanhamento cuidadoso'],
  },
  restaurante: {
    brand: 'Casa Brasa', mark: 'CB', label: 'Cozinha contemporânea', image: 'hero-restaurante.jpg', layout: 'restaurant',
    eyebrow: 'Fogo, tempo e ingredientes de verdade',
    headline: 'Sabores feitos para permanecer na memória.',
    body: 'Uma cozinha brasileira contemporânea que une técnica, afeto e o calor da brasa.',
    primary: 'Reservar uma mesa', secondary: 'Ver menu',
    services: [
      ['Costela de fogo lento', 'Mandioca cremosa, ervas frescas e molho da casa.'],
      ['Peixe na brasa', 'Legumes da estação, cítricos e manteiga tostada.'],
      ['Mesa brasileira', 'Entradas para compartilhar, preparadas conforme a estação.'],
    ],
    details: ['Terça a domingo', 'Almoço e jantar', 'Reservas recomendadas'],
  },
  educacao: {
    brand: 'Horizonte Escola Digital', mark: 'H', label: 'Educação e tecnologia', image: 'hero-educacao.jpg', layout: 'education',
    eyebrow: 'Aprender fazendo muda tudo',
    headline: 'Tecnologia, criatividade e projetos para o mundo real.',
    body: 'Cursos práticos para estudantes desenvolverem raciocínio, autonomia e confiança com ferramentas digitais.',
    primary: 'Conhecer as turmas', secondary: 'Ver metodologia',
    services: [
      ['Criação digital', 'Design, apresentações e produção de conteúdo com intenção.'],
      ['Programação', 'Lógica e construção de projetos em uma jornada progressiva.'],
      ['Inteligência artificial', 'Uso responsável de IA para pesquisar, criar e resolver problemas.'],
    ],
    details: ['Projetos práticos', 'Turmas acompanhadas', 'Aprendizagem ativa'],
  },
};

const arrow = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>`;
const check = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m5 12 4 4 10-10"/></svg>`;


function demoRibbon(){return `<div class="demo-ribbon"><span>Projeto demonstrativo</span><b>Marca fictícia</b><a href="/#projetos">← Voltar à vitrine BGTech</a></div>`}
function demoDialog(){return ''}
function siteHeader(site) {
  return `<header class="site-header"><a class="client-brand" href="#inicio"><span>${site.mark}</span><strong>${site.brand}</strong></a><nav aria-label="Navegação do modelo"><a href="#servicos">Serviços</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav><button class="mini-cta" data-demo-action>${site.primary}</button></header>`;
}

function services(site, title = 'Cuidado completo em cada etapa') {
  return `<section id="servicos" class="section services"><div class="section-heading"><span class="eyebrow">SERVIÇOS</span><h2>${title}</h2></div><div class="service-grid">${site.services.map((item, i) => `<article><span>0${i + 1}</span><h3>${item[0]}</h3><p>${item[1]}</p><a href="#contato">Saiba mais ${arrow}</a></article>`).join('')}</div></section>`;
}

function details(site, title, copy) {
  return `<section id="sobre" class="section detail-band"><div><span class="eyebrow">NOSSA FORMA DE ATENDER</span><h2>${title}</h2><p>${copy}</p></div><ul>${site.details.map(item => `<li>${check}<span>${item}</span></li>`).join('')}</ul></section>`;
}

function contact(site, title = 'Vamos conversar sobre o que você precisa?') {
  return `<section id="contato" class="section contact"><div><span class="eyebrow">PRÓXIMO PASSO</span><h2>${title}</h2><p>Experimente o formulário usando dados fictícios. Nada será enviado.</p></div><form class="demo-form"><label>Nome<input name="nome" autocomplete="off" required placeholder="Nome de exemplo"></label><label>Contato<input name="contato" required placeholder="Contato fictício"></label><label class="full">Mensagem<textarea name="mensagem" rows="3" placeholder="Conte brevemente o que procura"></textarea></label><button class="btn btn-primary full" type="submit">Testar solicitação ${arrow}</button></form></section>`;
}

function demoFooter(site) {
  return `<footer class="site-footer"><div class="client-brand"><span>${site.mark}</span><strong>${site.brand}</strong></div><p>Conteúdo e marca criados exclusivamente para esta demonstração.</p><a href="/#projetos">Projeto demonstrativo da BGTech Consulting ${arrow}</a></footer>`;
}

function dental(site) {
  return `${demoRibbon()}<div class="demo-site theme-dental">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-split"><div class="hero-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-primary" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div><div class="trust-row">${site.details.map(item => `<span>${check}${item}</span>`).join('')}</div></div><figure><img src="/modelos/assets/${site.image}" alt="Profissional em uma clínica odontológica moderna"></figure></section>
    ${services(site)}
    ${details(site, 'Uma experiência mais leve começa com informação.', 'Antes de qualquer decisão, o paciente entende as possibilidades, as etapas e os cuidados envolvidos.')}
    <section class="section steps"><span class="eyebrow">COMO FUNCIONA</span><div><article><b>01</b><h3>Conversa inicial</h3><p>Entendemos sua necessidade com calma.</p></article><article><b>02</b><h3>Avaliação</h3><p>Observamos o contexto e explicamos os caminhos.</p></article><article><b>03</b><h3>Plano de cuidado</h3><p>Organizamos as etapas de forma transparente.</p></article></div></section>
    ${contact(site, 'Seu próximo cuidado pode começar com uma conversa.')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function law(site) {
  return `${demoRibbon()}<div class="demo-site theme-law">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-overlay"><img src="/modelos/assets/${site.image}" alt="Advogado em escritório contemporâneo"><div class="overlay-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-gold" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div></div><aside><span>ATENDIMENTO</span><strong>Consultivo e preventivo</strong><p>Uma comunicação direta para compreender cenários e orientar escolhas responsáveis.</p></aside></section>
    ${services(site, 'Atuação jurídica com profundidade e contexto')}
    ${details(site, 'Segurança começa quando a informação faz sentido.', 'Cada atendimento é conduzido com discrição, análise cuidadosa e linguagem acessível, sem promessas de resultado.')}
    <section class="section law-manifesto"><blockquote>“Decisões importantes pedem clareza, responsabilidade e estratégia.”</blockquote><span>Lumen Advocacia — marca fictícia</span></section>
    ${contact(site, 'Apresente seu contexto com tranquilidade.')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function accounting(site) {
  return `${demoRibbon()}<div class="demo-site theme-accounting">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-dashboard"><div class="hero-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-primary" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div></div><div class="account-visual"><img src="/modelos/assets/${site.image}" alt="Consultoria contábil para pequena empresa"><div class="insight-card"><span>VISÃO DO NEGÓCIO</span><strong>Clareza para planejar</strong><div><i style="--h:42%"></i><i style="--h:64%"></i><i style="--h:54%"></i><i style="--h:82%"></i><i style="--h:72%"></i></div></div></div></section>
    <section class="account-pillars">${site.details.map((item, i) => `<article><b>0${i + 1}</b><span>${item}</span></article>`).join('')}</section>
    ${services(site, 'Soluções para organizar e acompanhar sua empresa')}
    ${details(site, 'Menos incerteza na rotina. Mais contexto para decidir.', 'A contabilidade deixa de ser apenas obrigação quando os dados se transformam em uma visão clara do negócio.')}
    ${contact(site, 'Vamos entender o momento da sua empresa?')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function beauty(site) {
  return `${demoRibbon()}<div class="demo-site theme-beauty">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-beauty"><figure><img src="/modelos/assets/${site.image}" alt="Atendimento em clínica de estética contemporânea"><figcaption>Cuidado personalizado em um ambiente sereno.</figcaption></figure><div class="hero-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-primary" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div></div></section>
    ${services(site, 'Escolhas cuidadosas para cada momento')}
    <section id="sobre" class="section beauty-story"><div><span class="eyebrow">EXPERIÊNCIA AURA</span><h2>Tempo, atenção e cuidado em cada encontro.</h2></div><p>Uma experiência pensada para acolher, compreender objetivos e orientar possibilidades de forma responsável.</p><ul>${site.details.map(item => `<li>${item}</li>`).join('')}</ul></section>
    ${contact(site, 'Reserve um momento para cuidar de você.')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function restaurant(site) {
  return `${demoRibbon()}<div class="demo-site theme-restaurant">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-restaurant"><img src="/modelos/assets/${site.image}" alt="Chef finalizando um prato na cozinha aberta"><div class="restaurant-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-ember" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div></div><span class="vertical-note">COZINHA BRASILEIRA CONTEMPORÂNEA</span></section>
    <section id="servicos" class="section menu"><div class="section-heading"><span class="eyebrow">DESTAQUES DO MENU</span><h2>Ingredientes da estação. Preparos com tempo.</h2></div><div class="menu-grid">${site.services.map((item, i) => `<article><span>0${i + 1}</span><div><h3>${item[0]}</h3><p>${item[1]}</p></div></article>`).join('')}</div></section>
    <section id="sobre" class="restaurant-info"><div><span>HORÁRIOS</span><strong>Ter–Qui 12h–23h<br>Sex–Dom 12h–00h</strong></div><div><span>EXPERIÊNCIA</span><strong>Salão, balcão e cozinha aberta</strong></div><div><span>RESERVAS</span><strong>Mesas confirmadas com antecedência</strong></div></section>
    ${contact(site, 'Sua próxima mesa está esperando.')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function education(site) {
  return `${demoRibbon()}<div class="demo-site theme-education">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-education"><div class="hero-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-yellow" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div></div><figure><img src="/modelos/assets/${site.image}" alt="Aula prática de tecnologia com estudantes"><span>PROJETOS • CRIATIVIDADE • TECNOLOGIA</span></figure></section>
    <section class="learning-strip">${site.details.map((item, i) => `<article><b>${i + 1}</b><span>${item}</span></article>`).join('')}</section>
    ${services(site, 'Trilhas que transformam curiosidade em projeto')}
    <section id="sobre" class="section learning-path"><div><span class="eyebrow">METODOLOGIA</span><h2>Explorar. Criar. Compartilhar.</h2><p>Cada etapa combina orientação, prática e reflexão para que o estudante compreenda o processo — e não apenas repita comandos.</p></div><ol><li><b>01</b><span>Problema real</span></li><li><b>02</b><span>Construção guiada</span></li><li><b>03</b><span>Projeto autoral</span></li><li><b>04</b><span>Apresentação</span></li></ol></section>
    ${contact(site, 'Descubra qual turma combina com o estudante.')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function renderDemo(id) {
  const site = sites[id];
  if (!site) return "Modelo indisponível";
  const renderer = { dental, law, accounting, beauty, restaurant, education }[site.layout];
  return renderer(site);
}


app.innerHTML=renderDemo(page);
document.querySelectorAll('[data-demo-action]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#contato').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});document.querySelector('input[name="nome"]').focus({preventScroll:true})}));
document.querySelectorAll('.demo-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();let receipt=form.querySelector('.form-receipt');if(!receipt){receipt=document.createElement('div');receipt.className='form-receipt';receipt.setAttribute('role','status');form.append(receipt)}receipt.replaceChildren();const title=document.createElement('strong');title.textContent='Solicitação demonstrativa concluída.';const text=document.createElement('p');text.textContent='Em um projeto real, este fluxo pode encaminhar o contato à equipe. Nenhum dado foi enviado ou armazenado.';const a=document.createElement('a');a.href='https://wa.me/5511920193443?text='+encodeURIComponent('Olá! Gostei do modelo '+sites[page].brand+' e quero um site para meu negócio.');a.target='_blank';a.rel='noopener';a.textContent='Quero um site assim · Falar com a BGTech ↗';receipt.append(title,text,a)}));
document.querySelectorAll('.reveal,.motion-reveal').forEach(e=>e.classList.add('is-visible'));
