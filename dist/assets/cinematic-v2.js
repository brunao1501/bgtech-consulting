/* BGTech Consulting — advanced motion experience
  Real canvas generative background + 3D browser scene + kinetic type
  + scroll-linked section choreography. Falls back without CDN.
  Accessibility: reduced motion, no scroll hijacking, no synthetic achievements.
*/
(function(){
  'use strict';
  const home=document.querySelector('.home-shell');
  if(!home) return;
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine=window.matchMedia('(pointer: fine) and (hover: hover)');
  const stage=home.querySelector('.cinema-stage');
  const hero=home.querySelector('.home-hero');
  if(!hero || !stage) return;
  stage.classList.add('pro-ready');

  // Show real site model visuals within a physical-perspective browser frame.
  const projects=[
    {title:'Uma presença digital à altura da sua marca.',eyebrow:'SITE PROFISSIONAL / 01',desc:'Design claro, desempenho e uma experiência que facilita o contato com seu cliente.',name:'OdontoViva',image:'/assets/hero-dentista.jpg',href:'/dentista/'},
    {title:'Uma experiência que desperta interesse.',eyebrow:'SITE PROFISSIONAL / 02',desc:'Uma vitrine planejada para valorizar serviços, produtos e novas oportunidades.',name:'Casa Brasa',image:'/assets/hero-restaurante.jpg',href:'/restaurante/'},
    {title:'Tecnologia que organiza e aproxima.',eyebrow:'SITE PROFISSIONAL / 03',desc:'Projetos digitais sob medida para transformar informação em uma experiência intuitiva.',name:'Nexo Contábil',image:'/assets/hero-contabilidade.jpg',href:'/contabilidade/'}
  ];
  const visual=document.createElement('div');
  visual.className='pro-visual';
  visual.innerHTML=[
    '<div class="pro-wire" aria-hidden="true"></div>',
    '<div class="pro-browser" aria-label="Demonstração animada de sites criados pela BGTech">',
      '<div class="pro-browser-top"><div class="pro-browser-dots" aria-hidden="true"><i></i><i></i><i></i></div><span class="pro-browser-url">bgtech / projetos demonstrativos</span><span class="pro-browser-status">Visualização</span></div>',
      '<div class="pro-browser-content">',
        '<div class="pro-image-frame"><img class="pro-case-image" src="/assets/hero-dentista.jpg" alt="" decoding="async"></div>',
        '<div class="pro-device-brand"><i aria-hidden="true"></i><span class="pro-case-brand">OdontoViva</span></div>',
        '<div class="pro-device-tags" aria-hidden="true"><span>Início</span><span>Serviços</span><span>Contato</span></div>',
        '<span class="pro-kicker">SITE PROFISSIONAL / 01</span>',
        '<h2 class="pro-headline">Uma presença digital à altura da sua marca.</h2>',
        '<p class="pro-description">Design claro, desempenho e uma experiência que facilita o contato com seu cliente.</p>',
        '<a class="pro-inbrowser-cta" href="/dentista/">Explorar o projeto <span aria-hidden="true">↗</span></a>',
        '<span class="pro-case-count">01 / 03</span>',
        '<div class="pro-case-progress" aria-hidden="true"><i class="active"></i><i></i><i></i></div>',
      '</div>',
    '</div>',
    '<div class="pro-floating pro-floating-a" aria-hidden="true"><span>EXPERIÊNCIA DIGITAL</span><strong>Design + Performance</strong></div>',
    '<div class="pro-floating pro-floating-b" aria-hidden="true"><span>SOLUÇÕES CONECTADAS</span><strong>Design • Sistemas • IA</strong><div class="pro-bar-flow"><i style="--height:48%;--delay:0s"></i><i style="--height:73%;--delay:.2s"></i><i style="--height:57%;--delay:.5s"></i><i style="--height:91%;--delay:.7s"></i><i style="--height:69%;--delay:.4s"></i><i style="--height:100%;--delay:.9s"></i></div></div>',
    '<div class="pro-sequence" aria-hidden="true"><b>BGTECH</b> / DIGITAL EXPERIENCE</div>'
  ].join('');
  stage.appendChild(visual);
  const browser=visual.querySelector('.pro-browser');
  const image=visual.querySelector('.pro-case-image');
  const brand=visual.querySelector('.pro-case-brand');
  const eyebrow=visual.querySelector('.pro-kicker');
  const headline=visual.querySelector('.pro-headline');
  const description=visual.querySelector('.pro-description');
  const link=visual.querySelector('.pro-inbrowser-cta');
  const count=visual.querySelector('.pro-case-count');
  const dots=Array.from(visual.querySelectorAll('.pro-case-progress i'));
  let active=0, caseTimer=null, outOfView=false;

  function paintCase(index){
    const p=projects[index];
    active=index;
    brand.textContent=p.name;
    eyebrow.textContent=p.eyebrow;
    headline.textContent=p.title;
    description.textContent=p.desc;
    image.src=p.image;
    link.href=p.href;
    link.setAttribute('aria-label','Abrir demonstração '+p.name);
    count.textContent=String(index+1).padStart(2,'0')+' / 03';
    dots.forEach((dot,i)=>dot.classList.toggle('active',i===index));
  }
  function switchCase(index){
    if(reduce.matches) return;
    const gsap=window.gsap;
    const targets=[brand,eyebrow,headline,description,image,link];
    if(gsap){
      gsap.to(targets,{opacity:0,y:12,duration:.38,ease:'power2.in',overwrite:true,onComplete:function(){
        paintCase(index);
        gsap.fromTo(targets,{opacity:0,y:19},{opacity:1,y:0,duration:.8,ease:'power3.out',stagger:.045,overwrite:true});
        gsap.fromTo(image,{scale:1.085},{scale:1.015,duration:5.8,ease:'none'});
      }});
    } else {
      targets.forEach(el=>{el.style.transition='opacity .4s,transform .4s';el.style.opacity='0';el.style.transform='translateY(8px)'});
      window.setTimeout(function(){paintCase(index);targets.forEach(el=>{el.style.opacity='1';el.style.transform='translateY(0)'})},420);
    }
  }
  function stopCases(){if(caseTimer!==null){window.clearInterval(caseTimer);caseTimer=null;}}
  function startCases(){
    if(reduce.matches||document.hidden||outOfView||caseTimer!==null) return;
    caseTimer=window.setInterval(function(){switchCase((active+1)%projects.length)},5800);
  }
  const heroVisibility=new IntersectionObserver(entries=>{
    outOfView=!entries[0].isIntersecting;
    outOfView ? stopCases() : startCases();
  },{threshold:.05});
  heroVisibility.observe(hero);
  document.addEventListener('visibilitychange',()=>{document.hidden?stopCases():startCases()});
  reduce.addEventListener('change',()=>{if(reduce.matches){stopCases();paintCase(0)}else{startCases()}});

  // Real-time generative light field: capped DPR, frame rate, particle count.
  if(!reduce.matches){
    const canvas=document.createElement('canvas');
    canvas.className='pro-atmosphere';
    canvas.setAttribute('aria-hidden','true');
    hero.prepend(canvas);
    const ctx=canvas.getContext('2d',{alpha:true});
    if(ctx){
      let w=0,h=0,dpr=1,t=0,raf=0,prev=0,visible=true,points=[];
      const countDots=()=>window.innerWidth<620?24:48;
      function resize(){
        dpr=Math.min(window.devicePixelRatio||1,1.6);
        w=hero.clientWidth;h=hero.clientHeight;
        canvas.width=Math.max(1,Math.round(w*dpr));
        canvas.height=Math.max(1,Math.round(h*dpr));
        ctx.setTransform(dpr,0,0,dpr,0,0);
        const n=countDots();
        points=Array.from({length:n},(_,i)=>({
          x:(i*.61803398875%1)*w,y:(i*.754877666%1)*h,
          speed:.32+(i%9)*.075,rad:.7+(i%4)*.38,seed:i*.87
        }));
      }
      resize();
      const ro=new ResizeObserver(resize);ro.observe(hero);
      function draw(now){
        if(!visible||document.hidden||reduce.matches) return;
        raf=requestAnimationFrame(draw);
        if(now-prev<30) return;
        const delta=Math.min((now-prev)||33,45);prev=now;t+=delta*.001;
        ctx.clearRect(0,0,w,h);
        const originX=w*.73,originY=h*.46;
        for(let j=0;j<4;j++){
          ctx.beginPath();
          for(let x=0;x<w;x+=12){
            const p=x/w;
            const y=originY+Math.sin(p*8+t*(.15+j*.04)+j*.6)*(30+j*20)+(p-.5)*h*.32+(j-1)*28;
            if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
          }
          ctx.strokeStyle='rgba(38,147,240,'+(.055+j*.012)+')';
          ctx.lineWidth=1;
          ctx.stroke();
        }
        for(let i=0;i<points.length;i++){
          const p=points[i];
          const x=p.x+Math.sin(t*p.speed+p.seed)*14;
          const y=p.y+Math.cos(t*p.speed+p.seed)*17;
          if(x<w*.35)continue;
          ctx.beginPath();ctx.arc(x,y,p.rad,0,Math.PI*2);
          ctx.fillStyle='rgba(102,206,250,'+(.2+.17*Math.sin(t+p.seed))+')';ctx.fill();
        }
      }
      const canvasObserver=new IntersectionObserver(entries=>{
        visible=entries[0].isIntersecting;
        if(visible&&!raf)raf=requestAnimationFrame(draw);
        if(!visible&&raf){cancelAnimationFrame(raf);raf=0}
      },{threshold:0});
      canvasObserver.observe(hero);
      // no leaks when hero drops out of viewport
      document.addEventListener('visibilitychange',()=>{
        if(!document.hidden&&visible&&!raf)raf=requestAnimationFrame(draw);
        if(document.hidden&&raf){cancelAnimationFrame(raf);raf=0}
      });
    }
  }

  // Device 3D tilt. Touch users see a stable legible layout.
  if(fine.matches&&!reduce.matches){
    let frame=0,rx=0,ry=0;
    stage.addEventListener('pointermove',function(e){
      const rect=stage.getBoundingClientRect();
      const x=Math.max(-1,Math.min(1,((e.clientX-rect.left)/rect.width-.5)*2));
      const y=Math.max(-1,Math.min(1,((e.clientY-rect.top)/rect.height-.5)*2));
      rx=-y*2.6;ry=x*3.6;
      if(frame)return;
      frame=requestAnimationFrame(()=>{browser.style.setProperty('--rx',rx.toFixed(2)+'deg');browser.style.setProperty('--ry',ry.toFixed(2)+'deg');frame=0});
    },{passive:true});
    stage.addEventListener('pointerleave',function(){browser.style.setProperty('--rx','0deg');browser.style.setProperty('--ry','0deg')});
  }

  // GSAP powers choreographed typography, cinematic entrance and scroll stories.
  // The page is fully functional with native observer/CSS fallback.
  function initGsap(){
    if(!window.gsap||reduce.matches) return;
    const gsap=window.gsap;
    const trigger=window.ScrollTrigger;
    if(trigger) gsap.registerPlugin(trigger);
    const h=home.querySelector('.hero-title');
    const intro=home.querySelector('.home-kicker.hero-enter');
    const paragraphs=home.querySelectorAll('.home-hero-copy > p,.home-hero-actions,.hero-signals');
    const lines=h?Array.from(h.querySelectorAll('span')):[];
    const timeline=gsap.timeline({defaults:{ease:'power3.out'}});
    timeline.from(intro,{y:18,opacity:0,duration:.65},.05)
      .from(lines,{y:76,opacity:0,rotateX:9,duration:1.04,stagger:.12},.14)
      .from(paragraphs,{y:24,opacity:0,duration:.74,stagger:.1},.49)
      .from(browser,{y:110,rotateY:-13,opacity:0,scale:.91,duration:1.36,ease:'power4.out'},.21)
      .from(visual.querySelectorAll('.pro-floating'),{x:25,y:27,opacity:0,duration:.9,stagger:.16},.8);

    if(!trigger) return;
    gsap.to(visual,{yPercent:-9,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:true}});
    gsap.to('.home-hero .hero-light-b',{x:-160,y:110,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:true}});
    const serviceCards=home.querySelectorAll('.home-service-card');
    serviceCards.forEach(card=>{
      gsap.fromTo(card,{rotateX:6,y:58},{rotateX:0,y:0,duration:.9,ease:'power3.out',
        scrollTrigger:{trigger:card,start:'top 90%',toggleActions:'play none none reverse'}});
    });
    home.querySelectorAll('.home-models .model-card').forEach((card,i)=>{
      gsap.fromTo(card,{y:55,scale:.963,rotateX:5},{y:0,scale:1,rotateX:0,duration:.85,delay:(i%2)*.08,ease:'power3.out',
        scrollTrigger:{trigger:card,start:'top 93%',toggleActions:'play none none reverse'}});
    });
    home.querySelectorAll('.home-statement > span').forEach((word,i)=>{
      gsap.fromTo(word,{y:38,opacity:.2},{y:0,opacity:1,duration:.75,delay:i*.07,ease:'power2.out',
        scrollTrigger:{trigger:'.home-statement',start:'top 80%',toggleActions:'play none none reverse'}});
    });
    gsap.to('.home-statement',{ '--statement-x':'74%',ease:'none',scrollTrigger:{trigger:'.home-statement',start:'top bottom',end:'bottom top',scrub:true}});
  }
  // Defer to allow media and layout measurement; never block first paint.
  if(document.readyState==='complete') initGsap();
  else window.addEventListener('load',initGsap,{once:true});
})();