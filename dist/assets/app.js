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

const homeServices = [
  {
    number: '01',
    title: 'Sites profissionais',
    copy: 'Experiências rápidas, responsivas e construídas para transformar atenção em oportunidade de negócio.',
    detail: 'Landing pages • Sites institucionais • Portfólios',
    icon: `<svg aria-hidden="true" viewBox="0 0 48 48"><rect x="5" y="8" width="38" height="28" rx="4"/><path d="M5 16h38M17 42h14M24 36v6M11 12h1M16 12h1"/></svg>`,
  },
  {
    number: '02',
    title: 'Sistemas sob medida',
    copy: 'Soluções digitais organizadas em torno do seu processo, da sua equipe e do resultado que você precisa alcançar.',
    detail: 'Painéis • Portais • Ferramentas internas',
    icon: `<svg aria-hidden="true" viewBox="0 0 48 48"><path d="m17 13-11 11 11 11M31 13l11 11-11 11M28 7l-8 34"/></svg>`,
  },
  {
    number: '03',
    title: 'Agentes e automações com IA',
    copy: 'Fluxos inteligentes para reduzir tarefas repetitivas, organizar informações e apoiar o atendimento.',
    detail: 'Automação • Integrações • Inteligência artificial',
    icon: `<svg aria-hidden="true" viewBox="0 0 48 48"><circle cx="24" cy="24" r="8"/><path d="M24 5v7M24 36v7M5 24h7M36 24h7M10.5 10.5l5 5M32.5 32.5l5 5M37.5 10.5l-5 5M15.5 32.5l-5 5"/></svg>`,
  },
  {
    number: '04',
    title: 'Consultoria em tecnologia',
    copy: 'Clareza para escolher ferramentas, priorizar investimentos e transformar uma necessidade em plano de ação.',
    detail: 'Diagnóstico • Estratégia • Implementação',
    icon: `<svg aria-hidden="true" viewBox="0 0 48 48"><path d="M8 9h32v23H22L12 40v-8H8z"/><path d="M15 17h18M15 23h12"/></svg>`,
  },
  {
    number: '05',
    title: 'Suporte e evolução',
    copy: 'Acompanhamento para manter computadores, ferramentas e projetos digitais funcionando com segurança e continuidade.',
    detail: 'Suporte • Manutenção • Evolução contínua',
    icon: `<svg aria-hidden="true" viewBox="0 0 48 48"><path d="M39 28a15 15 0 1 1-2-13"/><path d="M39 7v10H29M18 24l4 4 9-10"/></svg>`,
  },
];

function brandLogo() {
  return `<a class="bg-brand" href="/" aria-label="BGTech Consulting — início"><img src="/assets/bgtech-consulting.png" alt="BGTech Consulting"></a>`;
}

function demoRibbon() {
  return `<div class="demo-ribbon"><span>Projeto demonstrativo</span><b>Marca fictícia</b><a href="/">Desenvolvido pela BGTech Consulting ${arrow}</a></div>`;
}

function demoDialog() {
  return `<dialog class="demo-dialog" id="demo-dialog">
    <form method="dialog">
      <span class="dialog-kicker">BGTech Consulting</span>
      <h2>Este recurso faz parte da demonstração.</h2>
      <p>Em um projeto real, este botão pode abrir o WhatsApp, enviar um formulário ou integrar uma agenda. A BGTech Consulting adapta a experiência ao seu negócio.</p>
      <div class="dialog-actions"><button class="btn btn-ghost">Continuar no modelo</button><a class="btn btn-primary" href="/">Ver outros modelos</a></div>
    </form>
  </dialog>`;
}

function hub() {
  const process = [
    ['01', 'Escuta', 'Entendemos seu negócio, o público e o desafio antes de propor qualquer tecnologia.'],
    ['02', 'Estratégia', 'Organizamos prioridades, estrutura, conteúdo e o caminho mais eficiente para o projeto.'],
    ['03', 'Criação', 'Transformamos a direção aprovada em uma experiência funcional, clara e responsiva.'],
    ['04', 'Validação', 'Revisamos cada detalhe com você e refinamos o projeto antes da publicação.'],
    ['05', 'Evolução', 'A entrega pode continuar com suporte, melhorias e novas integrações.'],
  ];

  return `<div class="home-shell" id="home-shell">
    <div class="home-scroll-progress" aria-hidden="true"><span id="scroll-progress"></span></div>
    <div class="home-noise" aria-hidden="true"></div>
    <header class="home-header">
      <div class="home-nav">${brandLogo()}
        <button class="home-menu-toggle" type="button" aria-expanded="false" aria-controls="home-menu" aria-label="Abrir menu"><span></span><span></span></button>
        <nav id="home-menu" aria-label="Navegação principal"><a href="#inicio">Início</a><a href="#solucoes">Soluções</a><a href="#modelos">Modelos de sites</a><a href="#processo">Como funciona</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav>
        <a class="home-nav-cta" href="#contato">Solicitar proposta ${arrow}</a>
      </div>
    </header>
    <main>
      <section id="inicio" class="home-hero">
        <div class="hero-light hero-light-a" aria-hidden="true"></div><div class="hero-light hero-light-b" aria-hidden="true"></div>
        <div class="home-hero-inner">
          <div class="home-hero-copy">
            <span class="home-kicker hero-enter" style="--enter-delay:.05s"><i></i>Tecnologia para negócios que querem avançar</span>
            <h1 class="hero-title"><span style="--enter-delay:.12s">Sua presença</span><span style="--enter-delay:.2s">no digital</span><span class="gradient-line" style="--enter-delay:.28s">começa aqui.</span></h1>
            <p class="hero-enter" style="--enter-delay:.38s">A BGTech Consulting transforma ideias em sites, sistemas e soluções inteligentes — com estratégia, proximidade e uma experiência construída para o seu negócio.</p>
            <div class="home-hero-actions hero-enter" style="--enter-delay:.46s"><a class="home-btn home-btn-primary" href="#solucoes">Conhecer soluções ${arrow}</a><a class="home-btn home-btn-ghost" href="#modelos">Explorar modelos</a></div>
            <div class="hero-signals hero-enter" style="--enter-delay:.54s"><span>${check}Projeto sob medida</span><span>${check}Experiência responsiva</span><span>${check}Acompanhamento próximo</span></div>
          </div>
          <div class="cinema-stage hero-enter" style="--enter-delay:.28s" aria-label="Seleção de projetos demonstrativos da BGTech Consulting">
            <span class="stage-label stage-label-top"><i></i>BGTECH CONSULTING / DIGITAL EXPERIENCE</span>
            <div class="cinema-screen">
              <div class="cinema-screen-bar" aria-hidden="true"><span><i></i><i></i><i></i></span><b>BGTech Consulting • Projetos demonstrativos</b></div>
              <div class="cinema-slides">
                <figure class="cinema-slide cinema-slide-one"><img src="/assets/hero-digital-presence.jpg" alt="Site profissional apresentado em notebook e celular"><figcaption><span>Presença digital</span><strong>Estratégia que ganha forma.</strong></figcaption></figure>
                <figure class="cinema-slide cinema-slide-two"><img src="/assets/hero-restaurante.jpg" alt="Experiência digital criada para o segmento de gastronomia"><figcaption><span>Gastronomia</span><strong>Experiências que despertam interesse.</strong></figcaption></figure>
                <figure class="cinema-slide cinema-slide-three"><img src="/assets/hero-educacao.jpg" alt="Experiência digital criada para o segmento de educação"><figcaption><span>Educação</span><strong>Tecnologia para aprender e evoluir.</strong></figcaption></figure>
              </div>
              <div class="cinema-timeline" aria-hidden="true"><span></span><span></span><span></span></div>
            </div>
            <span class="stage-index">PROJETOS / 01—03</span><span class="stage-cross stage-cross-a" aria-hidden="true"></span><span class="stage-cross stage-cross-b" aria-hidden="true"></span>
          </div>
        </div>
        <a class="scroll-cue" href="#solucoes"><span></span>Descobrir</a>
      </section>

      <div class="home-marquee" aria-label="Áreas de atuação"><div><span>Sites profissionais</span><i>✦</i><span>Sistemas sob medida</span><i>✦</i><span>Inteligência artificial</span><i>✦</i><span>Consultoria em tecnologia</span><i>✦</i><span>Suporte e evolução</span><i>✦</i><span>Sites profissionais</span><i>✦</i><span>Sistemas sob medida</span><i>✦</i><span>Inteligência artificial</span><i>✦</i><span>Consultoria em tecnologia</span><i>✦</i><span>Suporte e evolução</span><i>✦</i></div></div>

      <section id="solucoes" class="home-section home-solutions">
        <div class="home-section-intro motion-reveal"><span class="home-kicker"><i></i>Soluções</span><h2>Tecnologia que resolve o que realmente importa.</h2><p>Cada projeto começa pelo contexto. A ferramenta vem depois — escolhida e construída para apoiar um objetivo claro.</p></div>
        <div class="home-service-list">
          ${homeServices.map((service, i) => `<article class="home-service-card motion-reveal" style="--reveal-delay:${i * 70}ms"><span class="service-number">${service.number}</span><div class="service-icon">${service.icon}</div><div><h3>${service.title}</h3><p>${service.copy}</p><small>${service.detail}</small></div><a href="#contato" aria-label="Conversar sobre ${service.title}">${arrow}</a></article>`).join('')}
        </div>
      </section>

      <section class="home-proof motion-reveal" aria-label="Diferenciais da BGTech Consulting"><article><strong>6</strong><span>modelos navegáveis para explorar</span></article><article><strong>5</strong><span>frentes de solução conectadas</span></article><article><strong>1</strong><span>estratégia construída para cada negócio</span></article></section>

      <section id="modelos" class="home-models">
        <div class="home-models-heading motion-reveal"><div><span class="home-kicker"><i></i>Portfólio demonstrativo</span><h2>Veja antes de imaginar.</h2></div><p>Explore experiências completas criadas para diferentes segmentos. As marcas são fictícias; a qualidade e as possibilidades são reais.</p></div>
        <div class="model-grid" aria-label="Modelos de sites">
          ${models.map((model, i) => `<article class="model-card model-${model.id} reveal" style="--delay:${i * 60}ms">
            <a href="/${model.id}/" class="model-image"><img src="/assets/${model.image}" alt="Prévia do modelo ${model.title}"><span>Abrir demonstração ${arrow}</span></a>
            <div class="model-content"><div><span class="model-number">0${i + 1}</span><span class="model-category">${model.title}</span></div><h3>${model.brand}</h3><p>${model.tone}</p><ul>${model.tags.map(tag => `<li>${tag}</li>`).join('')}</ul></div>
          </article>`).join('')}
        </div>
      </section>

      <section class="home-statement motion-reveal"><span>ESTRATÉGIA</span><span class="statement-plus">+</span><span>TECNOLOGIA</span><span class="statement-plus">+</span><span>PROXIMIDADE</span><p>Não é sobre colocar sua empresa na internet. É sobre construir uma presença que represente, organize e movimente o seu negócio.</p></section>

      <section id="processo" class="home-section home-process">
        <div class="process-heading motion-reveal"><span class="home-kicker"><i></i>Como funciona</span><h2>Do primeiro contato à evolução do projeto.</h2><p>Um processo direto, colaborativo e fácil de acompanhar.</p></div>
        <ol class="process-list">${process.map((item, i) => `<li class="motion-reveal" style="--reveal-delay:${i * 60}ms"><b>${item[0]}</b><span>${item[1]}</span><p>${item[2]}</p></li>`).join('')}</ol>
      </section>

      <section id="sobre" class="home-about">
        <div class="about-portrait motion-reveal"><div class="portrait-frame"><img src="/assets/bruno-bgtech-consulting.jpg" alt="Bruno Santos, fundador da BGTech Consulting"></div><span class="portrait-caption"><i></i>Estratégia, tecnologia e acompanhamento próximo</span></div>
        <div class="about-copy motion-reveal"><span class="home-kicker"><i></i>Sobre a BGTech Consulting</span><h2>Tecnologia boa aproxima. Não complica.</h2><p>A BGTech Consulting foi criada para transformar necessidades reais em soluções digitais claras, funcionais e alinhadas ao momento de cada negócio.</p><p>Por trás de cada projeto existe escuta, planejamento e uma construção cuidadosa — do primeiro esboço à experiência publicada.</p><div class="about-signature"><strong>Bruno Santos</strong><span>Fundador da BGTech Consulting • Engenharia de Software e Tecnologia</span></div></div>
      </section>

      <section id="contato" class="home-contact">
        <div class="contact-copy motion-reveal"><span class="home-kicker"><i></i>Próximo passo</span><h2>Seu próximo projeto pode começar com uma conversa.</h2><p>Conte o que você deseja construir. O formulário prepara um briefing curto e abre o WhatsApp da BGTech Consulting com a mensagem pronta para revisão.</p><div class="contact-promise"><span>${check}Sem proposta genérica</span><span>${check}Solução alinhada ao momento do negócio</span><span>${check}Comunicação clara em cada etapa</span></div>
          <div class="contact-channels" aria-label="Canais de contato da BGTech Consulting">
            <a class="contact-channel contact-channel-primary" href="https://wa.me/${bgtechContact.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da BGTech Consulting e gostaria de conversar sobre um projeto.')}" target="_blank" rel="noopener"><span><small>WhatsApp</small><strong>${bgtechContact.whatsappDisplay}</strong></span>${arrow}</a>
            <a class="contact-channel" href="${bgtechContact.instagramUrl}" target="_blank" rel="noopener"><span><small>Instagram</small><strong>${bgtechContact.instagramDisplay}</strong></span>${arrow}</a>
            <a class="contact-channel" href="mailto:${bgtechContact.email}"><span><small>E-mail</small><strong>${bgtechContact.email}</strong></span>${arrow}</a>
          </div>
        </div>
        <form class="home-lead-form motion-reveal" id="home-lead-form">
          <label>Seu nome<input name="nome" autocomplete="name" required placeholder="Como podemos chamar você?"></label>
          <label>Empresa ou projeto<input name="empresa" autocomplete="organization" placeholder="Nome do negócio"></label>
          <label>O que você procura<select name="solucao" required><option value="">Selecione uma solução</option>${homeServices.map(service => `<option>${service.title}</option>`).join('')}<option>Quero entender a melhor opção</option></select></label>
          <label>Seu contato<input name="contato" required placeholder="Telefone, e-mail ou @ do Instagram"></label>
          <label class="full">Conte um pouco sobre o desafio<textarea name="mensagem" rows="4" required placeholder="O que você precisa resolver ou construir?"></textarea></label>
          <button class="home-btn home-btn-primary full" type="submit">Preparar minha mensagem ${arrow}</button>
          <small class="full">A mensagem não é enviada automaticamente. Você poderá revisá-la antes de abrir o WhatsApp.</small>
        </form>
      </section>
    </main>
    <footer class="home-footer"><div>${brandLogo()}<p>Sua presença no digital começa aqui.</p></div><nav aria-label="Navegação do rodapé"><a href="#solucoes">Soluções</a><a href="#modelos">Modelos</a><a href="#processo">Processo</a><a href="#sobre">Sobre</a></nav><div class="footer-end"><span>© ${new Date().getFullYear()} BGTech Consulting</span><div class="footer-contact-links"><a href="https://wa.me/${bgtechContact.whatsappNumber}" target="_blank" rel="noopener">WhatsApp</a><a href="${bgtechContact.instagramUrl}" target="_blank" rel="noopener">Instagram</a><a href="mailto:${bgtechContact.email}">E-mail</a></div><a href="#inicio">Voltar ao topo ${arrow}</a></div></footer>
    <dialog class="lead-dialog" id="lead-dialog"><form method="dialog"><span class="dialog-kicker">BGTech Consulting</span><h2>Seu briefing está pronto.</h2><p>Revise a mensagem abaixo. Você pode copiá-la ou seguir para o WhatsApp da BGTech Consulting.</p><pre id="lead-summary"></pre><div class="dialog-actions"><button class="btn btn-ghost" value="close">Continuar no site</button><button class="btn btn-ghost" type="button" id="copy-lead">Copiar mensagem</button><button class="btn btn-primary" type="button" id="send-whatsapp">Enviar pelo WhatsApp</button></div></form></dialog>
    <a class="whatsapp-float" href="https://wa.me/${bgtechContact.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da BGTech Consulting e gostaria de conversar sobre um projeto.')}" target="_blank" rel="noopener" aria-label="Conversar com a BGTech Consulting pelo WhatsApp">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.8 7.4L3 20.3l1.3-4.5A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.2 7.7c.4 3.9 4.1 7.5 8 8.1l1.1-2.2-2.7-1.2-1.2 1.1a9.2 9.2 0 0 1-3-3L11.5 9 10.3 6.5 8.2 7.7Z"/></svg>
      <span><small>Fale conosco</small>WhatsApp</span>
    </a>
  </div>`;
}

function kit() {
  const storyFiles = [
    ['01-sites-profissionais', 'Sites profissionais'],
    ['02-sistemas-sob-medida', 'Sistemas sob medida'],
    ['03-automacao-integracoes', 'Automação e integrações'],
    ['04-consultoria-tecnologia', 'Consultoria em tecnologia'],
    ['05-estrategia-digital', 'Estratégia digital'],
    ['06-sobre-bgtech-consulting', 'Sobre a BGTech Consulting'],
  ];
  return `<div class="kit-shell">
    <header class="kit-header">${brandLogo()}<a href="/">${arrow} Voltar aos modelos</a></header>
    <main>
      <section class="kit-hero"><span class="eyebrow">KIT VISUAL PARA INSTAGRAM</span><h1>A presença da BGTech Consulting, pronta para os Destaques.</h1><p>Stories de serviços, capas de Destaques e um personagem visual que conectam a marca ao portfólio demonstrativo.</p><a class="btn btn-primary" href="/downloads/bgtech-consulting-kit-instagram.zip" download>Baixar pacote completo ${arrow}</a></section>
      <section class="kit-section"><div class="kit-heading"><span class="eyebrow">STORIES • 1080 × 1920</span><h2>Seis serviços, uma identidade consistente.</h2><p>As artes estão prontas para publicar e conduzir o público aos Destaques da BGTech Consulting.</p></div><div class="story-grid">${storyFiles.map(([file, title]) => `<article><img src="/social/stories/${file}.png" alt="${title} — BGTech Consulting"><div><h3>${title}</h3><a href="/social/stories/${file}.png" download>Baixar PNG ${arrow}</a></div></article>`).join('')}</div></section>
      <section class="kit-section kit-covers"><div class="kit-heading"><span class="eyebrow">CAPAS • 1080 × 1080</span><h2>Destaques fáceis de reconhecer.</h2><p>Ícones simples e contraste alto para funcionar bem no recorte circular do Instagram.</p></div><div class="cover-grid">${storyFiles.map(([file, title]) => `<article><img src="/social/destaques/${file}.png" alt="Capa de Destaque ${title}"><a href="/social/destaques/${file}.png" download>${title} ${arrow}</a></article>`).join('')}</div></section>
      <section class="kit-character"><div><span class="eyebrow">PERSONAGEM DA MARCA</span><h2>Proximidade humana com linguagem de tecnologia.</h2><p>A versão visual inspirada na sua foto pode apresentar a BGTech Consulting, explicar serviços e aparecer em chamadas para ação sem perder o aspecto profissional.</p><a class="btn btn-light" href="/social/personagem-bgtech-consulting.png" download>Baixar personagem ${arrow}</a></div><img src="/social/personagem-bgtech-consulting.png" alt="Personagem visual da BGTech Consulting"></section>
    </main>
    <footer class="kit-footer">${brandLogo()}<p>Kit visual criado para a BGTech Consulting.</p><a href="/">Explorar modelos de sites ${arrow}</a></footer>
  </div>`;
}

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
  return `<section id="contato" class="section contact"><div><span class="eyebrow">PRÓXIMO PASSO</span><h2>${title}</h2><p>Envie seus dados e escolha o melhor caminho para iniciar a conversa.</p></div><form class="demo-form"><label>Nome<input name="nome" autocomplete="name" required placeholder="Como podemos chamar você?"></label><label>Contato<input name="contato" required placeholder="Telefone ou e-mail"></label><label class="full">Mensagem<textarea name="mensagem" rows="3" placeholder="Conte brevemente o que procura"></textarea></label><button class="btn btn-primary full" type="submit">Enviar solicitação ${arrow}</button></form></section>`;
}

function demoFooter(site) {
  return `<footer class="site-footer"><div class="client-brand"><span>${site.mark}</span><strong>${site.brand}</strong></div><p>Conteúdo e marca criados exclusivamente para esta demonstração.</p><a href="/">Projeto demonstrativo da BGTech Consulting ${arrow}</a></footer>`;
}

function dental(site) {
  return `${demoRibbon()}<div class="demo-site theme-dental">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-split"><div class="hero-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-primary" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div><div class="trust-row">${site.details.map(item => `<span>${check}${item}</span>`).join('')}</div></div><figure><img src="/assets/${site.image}" alt="Profissional em uma clínica odontológica moderna"></figure></section>
    ${services(site)}
    ${details(site, 'Uma experiência mais leve começa com informação.', 'Antes de qualquer decisão, o paciente entende as possibilidades, as etapas e os cuidados envolvidos.')}
    <section class="section steps"><span class="eyebrow">COMO FUNCIONA</span><div><article><b>01</b><h3>Conversa inicial</h3><p>Entendemos sua necessidade com calma.</p></article><article><b>02</b><h3>Avaliação</h3><p>Observamos o contexto e explicamos os caminhos.</p></article><article><b>03</b><h3>Plano de cuidado</h3><p>Organizamos as etapas de forma transparente.</p></article></div></section>
    ${contact(site, 'Seu próximo cuidado pode começar com uma conversa.')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function law(site) {
  return `${demoRibbon()}<div class="demo-site theme-law">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-overlay"><img src="/assets/${site.image}" alt="Advogado em escritório contemporâneo"><div class="overlay-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-gold" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div></div><aside><span>ATENDIMENTO</span><strong>Consultivo e preventivo</strong><p>Uma comunicação direta para compreender cenários e orientar escolhas responsáveis.</p></aside></section>
    ${services(site, 'Atuação jurídica com profundidade e contexto')}
    ${details(site, 'Segurança começa quando a informação faz sentido.', 'Cada atendimento é conduzido com discrição, análise cuidadosa e linguagem acessível, sem promessas de resultado.')}
    <section class="section law-manifesto"><blockquote>“Decisões importantes pedem clareza, responsabilidade e estratégia.”</blockquote><span>Lumen Advocacia — marca fictícia</span></section>
    ${contact(site, 'Apresente seu contexto com tranquilidade.')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function accounting(site) {
  return `${demoRibbon()}<div class="demo-site theme-accounting">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-dashboard"><div class="hero-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-primary" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div></div><div class="account-visual"><img src="/assets/${site.image}" alt="Consultoria contábil para pequena empresa"><div class="insight-card"><span>VISÃO DO NEGÓCIO</span><strong>Clareza para planejar</strong><div><i style="--h:42%"></i><i style="--h:64%"></i><i style="--h:54%"></i><i style="--h:82%"></i><i style="--h:72%"></i></div></div></div></section>
    <section class="account-pillars">${site.details.map((item, i) => `<article><b>0${i + 1}</b><span>${item}</span></article>`).join('')}</section>
    ${services(site, 'Soluções para organizar e acompanhar sua empresa')}
    ${details(site, 'Menos incerteza na rotina. Mais contexto para decidir.', 'A contabilidade deixa de ser apenas obrigação quando os dados se transformam em uma visão clara do negócio.')}
    ${contact(site, 'Vamos entender o momento da sua empresa?')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function beauty(site) {
  return `${demoRibbon()}<div class="demo-site theme-beauty">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-beauty"><figure><img src="/assets/${site.image}" alt="Atendimento em clínica de estética contemporânea"><figcaption>Cuidado personalizado em um ambiente sereno.</figcaption></figure><div class="hero-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-primary" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div></div></section>
    ${services(site, 'Escolhas cuidadosas para cada momento')}
    <section id="sobre" class="section beauty-story"><div><span class="eyebrow">EXPERIÊNCIA AURA</span><h2>Tempo, atenção e cuidado em cada encontro.</h2></div><p>Uma experiência pensada para acolher, compreender objetivos e orientar possibilidades de forma responsável.</p><ul>${site.details.map(item => `<li>${item}</li>`).join('')}</ul></section>
    ${contact(site, 'Reserve um momento para cuidar de você.')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function restaurant(site) {
  return `${demoRibbon()}<div class="demo-site theme-restaurant">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-restaurant"><img src="/assets/${site.image}" alt="Chef finalizando um prato na cozinha aberta"><div class="restaurant-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-ember" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div></div><span class="vertical-note">COZINHA BRASILEIRA CONTEMPORÂNEA</span></section>
    <section id="servicos" class="section menu"><div class="section-heading"><span class="eyebrow">DESTAQUES DO MENU</span><h2>Ingredientes da estação. Preparos com tempo.</h2></div><div class="menu-grid">${site.services.map((item, i) => `<article><span>0${i + 1}</span><div><h3>${item[0]}</h3><p>${item[1]}</p></div></article>`).join('')}</div></section>
    <section id="sobre" class="restaurant-info"><div><span>HORÁRIOS</span><strong>Ter–Qui 12h–23h<br>Sex–Dom 12h–00h</strong></div><div><span>EXPERIÊNCIA</span><strong>Salão, balcão e cozinha aberta</strong></div><div><span>RESERVAS</span><strong>Mesas confirmadas com antecedência</strong></div></section>
    ${contact(site, 'Sua próxima mesa está esperando.')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function education(site) {
  return `${demoRibbon()}<div class="demo-site theme-education">${siteHeader(site)}<main>
    <section id="inicio" class="client-hero hero-education"><div class="hero-copy"><span class="eyebrow">${site.eyebrow}</span><h1>${site.headline}</h1><p>${site.body}</p><div class="hero-actions"><button class="btn btn-yellow" data-demo-action>${site.primary}</button><a class="text-link" href="#servicos">${site.secondary} ${arrow}</a></div></div><figure><img src="/assets/${site.image}" alt="Aula prática de tecnologia com estudantes"><span>PROJETOS • CRIATIVIDADE • TECNOLOGIA</span></figure></section>
    <section class="learning-strip">${site.details.map((item, i) => `<article><b>${i + 1}</b><span>${item}</span></article>`).join('')}</section>
    ${services(site, 'Trilhas que transformam curiosidade em projeto')}
    <section id="sobre" class="section learning-path"><div><span class="eyebrow">METODOLOGIA</span><h2>Explorar. Criar. Compartilhar.</h2><p>Cada etapa combina orientação, prática e reflexão para que o estudante compreenda o processo — e não apenas repita comandos.</p></div><ol><li><b>01</b><span>Problema real</span></li><li><b>02</b><span>Construção guiada</span></li><li><b>03</b><span>Projeto autoral</span></li><li><b>04</b><span>Apresentação</span></li></ol></section>
    ${contact(site, 'Descubra qual turma combina com o estudante.')}
  </main>${demoFooter(site)}</div>${demoDialog()}`;
}

function renderDemo(id) {
  const site = sites[id];
  if (!site) return hub();
  const renderer = { dental, law, accounting, beauty, restaurant, education }[site.layout];
  return renderer(site);
}

app.innerHTML = page === 'hub' ? hub() : page === 'kit' ? kit() : renderDemo(page);

document.querySelectorAll('[data-demo-action]').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('#demo-dialog')?.showModal();
  });
});

document.querySelectorAll('.demo-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const dialog = document.querySelector('#demo-dialog');
    if (dialog) {
      dialog.querySelector('h2').textContent = 'Formulário demonstrativo concluído.';
      dialog.querySelector('p').textContent = 'Em um projeto real da BGTech Consulting, esta mensagem pode seguir para e-mail, WhatsApp ou um sistema de atendimento.';
      dialog.showModal();
    }
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible'));
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .motion-reveal').forEach(element => observer.observe(element));

const menuToggle = document.querySelector('.home-menu-toggle');
const homeMenu = document.querySelector('#home-menu');
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  homeMenu?.classList.toggle('is-open', !open);
  document.body.classList.toggle('menu-open', !open);
});
homeMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  homeMenu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}));

const homeHeader = document.querySelector('.home-header');
const scrollProgress = document.querySelector('#scroll-progress');
function updateHomeScroll() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  const progress = distance > 0 ? Math.min(1, window.scrollY / distance) : 0;
  if (scrollProgress) scrollProgress.style.transform = `scaleX(${progress})`;
  homeHeader?.classList.toggle('is-scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', updateHomeScroll, { passive: true });
updateHomeScroll();

const homeLeadForm = document.querySelector('#home-lead-form');
homeLeadForm?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(homeLeadForm);
  const lines = [
    'Olá, BGTech Consulting!',
    '',
    `Meu nome é ${data.get('nome')}.`,
    data.get('empresa') ? `Empresa ou projeto: ${data.get('empresa')}.` : '',
    `Tenho interesse em: ${data.get('solucao')}.`,
    `Meu contato: ${data.get('contato')}.`,
    '',
    'O que preciso:',
    String(data.get('mensagem') || ''),
  ].filter((line, index, array) => line !== '' || array[index - 1] !== '');
  const summary = lines.join('\n');
  const summaryElement = document.querySelector('#lead-summary');
  if (summaryElement) summaryElement.textContent = summary;
  document.querySelector('#lead-dialog')?.showModal();
});

document.querySelector('#copy-lead')?.addEventListener('click', async event => {
  const button = event.currentTarget;
  const summary = document.querySelector('#lead-summary')?.textContent || '';
  try {
    await navigator.clipboard.writeText(summary);
    button.textContent = 'Mensagem copiada!';
  } catch {
    button.textContent = 'Selecione e copie a mensagem';
  }
});

document.querySelector('#send-whatsapp')?.addEventListener('click', () => {
  const summary = document.querySelector('#lead-summary')?.textContent || '';
  const whatsappUrl = `https://wa.me/${bgtechContact.whatsappNumber}?text=${encodeURIComponent(summary)}`;
  window.open(whatsappUrl, '_blank', 'noopener');
});
