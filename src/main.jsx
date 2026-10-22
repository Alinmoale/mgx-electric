import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const iconPaths = {
 home:'m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8',
 building:'M4 21V3h12v18M16 9h4v12M8 7h4M8 11h4M8 15h4M8 19h4',
 factory:'M3 21V10l6 3V9l6 4V3h4l2 18H3ZM7 17h1m4 0h1m4 0h1',
 panel:'M5 3h14v18H5V3ZM9 7h6M9 11h2m3 0h1M9 15h2m3 0h1',
 gauge:'M4 18a9 9 0 1 1 16 0M12 13l4-5M5 14H3m18 0h-2M7 7 6 6m6-2V3M9 21h6',
 wrench:'M14 6a5 5 0 0 0-6 6l-5 5a2.1 2.1 0 0 0 3 3l5-5a5 5 0 0 0 6-6l-3 3-3-3 3-3Z',
 shield:'M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Zm-4 9 3 3 5-6',
 badge:'m12 3 3 2 4 1 1 4-1 4-3 2-4 2-4-2-3-2-1-4 1-4 4-1 3-2Zm-4 8 3 3 5-5',
 bolt:'m13 2-9 12h7l-1 8 10-13h-7l1-7Z',
 message:'M21 11a8 8 0 0 1-8 8H7l-4 3V11a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8ZM7 9h10M7 13h6',
 arrow:'M6 18 18 6M6 6h12v12',
 down:'M12 4v16m-6-6 6 6 6-6',up:'M12 20V4m-6 6 6-6 6 6',
 check:'m5 12 4 4L19 6',menu:'M4 6h16M4 12h16M4 18h16',close:'m6 6 12 12M6 18 18 6',
};
function Icon({name,className=''}){return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={iconPaths[name]}/></svg>}
const Arrow = () => <Icon name="arrow"/>;
function Logo(){return <a className="logo" href="#acasa" aria-label="MGX Instalații electrice — acasă"><img src="/mgx-logo.png" alt="MGX Instalații Electrice" width="1800" height="882" /></a>}
function HeroElectricity(){
 const effectRef=useRef(null);
 useEffect(()=>{
  const effect=effectRef.current;
  const hero=effect.closest('.hero');
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0;
  function move(event){
   if(event.pointerType==='touch'||motion.matches) return;
   window.cancelAnimationFrame(frame);
   frame=window.requestAnimationFrame(()=>{
    const rect=hero.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width;
    const y=(event.clientY-rect.top)/rect.height;
    effect.style.setProperty('--pointer-x',`${x*100}%`);
    effect.style.setProperty('--pointer-y',`${y*100}%`);
    effect.style.setProperty('--electric-x',`${(x-.5)*22}px`);
    effect.style.setProperty('--electric-y',`${(y-.5)*16}px`);
    effect.classList.add('is-interacting');
   });
  }
  function leave(){window.cancelAnimationFrame(frame);effect.classList.remove('is-interacting');effect.style.setProperty('--electric-x','0px');effect.style.setProperty('--electric-y','0px');}
  hero.addEventListener('pointermove',move);
  hero.addEventListener('pointerleave',leave);
  return ()=>{window.cancelAnimationFrame(frame);hero.removeEventListener('pointermove',move);hero.removeEventListener('pointerleave',leave);};
 },[]);
 return <div className="hero-electric-field" ref={effectRef} aria-hidden="true"><div className="hero-electric-glow"/><svg className="hero-electricity" viewBox="0 0 900 800" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <defs><linearGradient id="hero-circuit-fade" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffc400" stopOpacity="0"/><stop offset=".5" stopColor="#ffc400" stopOpacity=".18"/><stop offset="1" stopColor="#ffc400" stopOpacity="0"/></linearGradient></defs>
  <g className="hero-circuit-tracks"><path d="M520-40v180l-95 95v145l110 110v350"/><path d="M780-40v265l-105 105v190l80 80v240"/><path d="M920 130H735l-90 90H530l-85 85H250"/></g>
  <g className="hero-circuit-pulses"><path pathLength="1000" d="M520-40v180l-95 95v145l110 110v350"/><path pathLength="1000" d="M780-40v265l-105 105v190l80 80v240"/><path pathLength="1000" d="M920 130H735l-90 90H530l-85 85H250"/></g>
  <g className="hero-circuit-nodes"><circle cx="425" cy="380" r="3"/><circle cx="675" cy="330" r="3"/><circle cx="530" cy="220" r="3"/></g>
 </svg></div>;
}
function PageCircuits(){
 return <div className="page-circuits" aria-hidden="true">{['left','right'].map(side=><svg key={side} className={`page-circuit page-circuit-${side}`} viewBox="0 0 70 1200" preserveAspectRatio="none" fill="none">
  <path className="page-circuit-track" d="M16-100V140l30 30v180l-26 26v220l26 26v180l-30 30v568M52-200V70L30 92v200l28 28v180l-26 26v200l26 26v220l-28 28v400"/>
  <path className="page-circuit-flow" pathLength="1000" d="M16-100V140l30 30v180l-26 26v220l26 26v180l-30 30v568"/>
  <path className="page-circuit-flow secondary" pathLength="1000" d="M52-200V70L30 92v200l28 28v180l-26 26v200l26 26v220l-28 28v400"/>
 </svg>)}</div>;
}
function ElectricIntro(){
 const [visible,setVisible]=useState(()=>!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(()=>{
  if(!visible) return;
  const timer=window.setTimeout(()=>setVisible(false),2100);
  return ()=>window.clearTimeout(timer);
 },[visible]);
 if(!visible) return null;
 return <div className="electric-intro" aria-hidden="true">
  <div className="intro-grid"/>
  <svg className="intro-circuit" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
   <path className="circuit-track" d="M0 250H180L225 205H350L395 250H480M720 250H805L850 295H975L1020 250H1200"/>
   <path className="circuit-energy" d="M0 250H180L225 205H350L395 250H480M720 250H805L850 295H975L1020 250H1200"/>
  </svg>
  <div className="intro-brand"><div className="intro-logo"><img src="/mgx-logo.png" alt="" width="1800" height="882"/></div><span className="intro-caption">ENERGIE ÎN FIECARE CONEXIUNE</span><div className="intro-charge"><span/></div></div>
 </div>;
}
const services = [
  ['home','Instalații rezidențiale','Instalații electrice pentru case și apartamente. Circuite, prize și iluminat adaptate felului în care locuiești.'],
  ['building','Spații comerciale','Soluții pentru birouri și spații comerciale, de la distribuția energiei până la iluminatul funcțional.'],
  ['factory','Instalații industriale','Instalații pentru spații de producție și echipamente, cu atenție la cerințele fiecărui proiect.'],
  ['panel','Tablouri electrice','Montaj, organizare și modernizare tablouri electrice, pentru o distribuție clară și sigură.'],
  ['gauge','Verificări PRAM','Verificări și măsurători pentru evaluarea instalației și identificarea problemelor de siguranță.'],
  ['wrench','Mentenanță și reparații','Diagnosticarea defecțiunilor, intervenții și întreținere pentru instalații care funcționează corect.'],
];
const photo = (id, w=1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const images = {hero:photo('photo-1621905251189-08b45d6a269e',1800), home:photo('photo-1600210492486-724fe5c67fb0',900), office:photo('photo-1497366754035-f200968a6e72',900)};
function App(){
 const [menu,setMenu]=useState(false);
 const [activeSection,setActiveSection]=useState('acasa');
 useEffect(()=>{
  const sections=[...document.querySelectorAll('main section[id]')];
  let frame=0;
  function updateSection(){
   const marker=document.querySelector('.header').getBoundingClientRect().height+window.innerHeight*.2;
   let current=sections[0].id;
   for(const section of sections){
    if(section.getBoundingClientRect().top<=marker) current=section.id;
   }
   if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-2) current=sections.at(-1).id;
   setActiveSection(current);
   frame=0;
  }
  function scheduleUpdate(){if(!frame) frame=window.requestAnimationFrame(updateSection);}
  updateSection();
  window.addEventListener('scroll',scheduleUpdate,{passive:true});
  window.addEventListener('resize',scheduleUpdate);
  return ()=>{window.cancelAnimationFrame(frame);window.removeEventListener('scroll',scheduleUpdate);window.removeEventListener('resize',scheduleUpdate);};
 },[]);
 useEffect(()=>{
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(motion.matches || !('IntersectionObserver' in window)) return;
  const groups=[
   ...document.querySelectorAll('.about-grid, .section-heading, .service-grid, .project-grid, .process-grid, .contact-grid, .quote-band .container'),
  ];
  const elements=groups.flatMap(group=>[...group.children]);
  document.querySelectorAll('.process > .container > .eyebrow, .process > .container > h2').forEach(element=>elements.push(element));
  groups.forEach(group=>[...group.children].forEach((element,index)=>element.style.setProperty('--reveal-delay',`${Math.min(index,3)*85}ms`)));
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
   });
  },{threshold:0,rootMargin:'0px 0px -45px 0px'});
  elements.forEach(element=>{
   // Keep content already in view visible, including direct section links.
   if(element.getBoundingClientRect().top<window.innerHeight-45) return;
   element.classList.add('scroll-reveal');
   observer.observe(element);
  });
  function disableMotion(event){if(event.matches){elements.forEach(element=>element.classList.remove('scroll-reveal'));observer.disconnect();}}
  motion.addEventListener('change',disableMotion);
  return ()=>{observer.disconnect();motion.removeEventListener('change',disableMotion);elements.forEach(element=>{element.classList.remove('scroll-reveal','is-visible');element.style.removeProperty('--reveal-delay');});};
 },[]);
 const [copied,setCopied]=useState(false);
 function copyBrief(){navigator.clipboard?.writeText('Bună ziua! Doresc o ofertă pentru o lucrare de instalații electrice. Tipul spațiului: __. Lucrarea necesară: __. Termenul dorit: __.').then(()=>setCopied(true)).catch(()=>setCopied(false));}
 return <>
 <ElectricIntro/>
 <PageCircuits/>
 <header className="header"><div className="container nav"><Logo/><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label={menu?'Închide meniul':'Deschide meniul'}><span className="menu-bars" aria-hidden="true"><span/><span/><span/></span></button><nav className={menu?'open':''} aria-label="Navigare principală">{[['acasa','Acasă'],['despre','Despre noi'],['servicii','Servicii'],['proiecte','Proiecte'],['contact','Contact']].map(([id,label])=><a key={id} href={`#${id}`} className={activeSection===id?'active':undefined} aria-current={activeSection===id?'location':undefined} onClick={()=>setMenu(false)}>{label}</a>)}<a className="button small" href="#contact" onClick={()=>setMenu(false)}>Ofertă rapidă <Arrow/></a></nav></div></header>
 <main>
 <section id="acasa" className="hero"><img className="hero-image" src={images.hero} alt="Lucrări la o instalație electrică"/><HeroElectricity/><div className="container hero-content"><p className="eyebrow"><i/> MGX · INSTALAȚII ELECTRICE</p><h1>Energie pentru<br/>proiectele tale.<br/><span>Siguranță la fiecare pas.</span></h1><p className="hero-text">Instalații electrice pentru locuințe, spații comerciale și industriale. De la primul circuit, până la ultimul detaliu.</p><div className="actions"><a className="button" href="#servicii">Descoperă serviciile <Arrow/></a><a className="button outline" href="#contact">Hai să discutăm <Arrow/></a></div><div className="hero-bottom"><span>PRECIZIE. RESPONSABILITATE. ENERGIE.</span><a href="#despre">Descoperă MGX <Icon name="down"/></a></div></div></section>
 <div className="trust-strip"><div className="container trust-grid">{[['shield','Siguranță','Atenție la fiecare conexiune'],['badge','Calitate','Execuție îngrijită, de la început'],['bolt','Eficiență','Soluții potrivite proiectului'],['message','Comunicare','Claritate în fiecare etapă']].map(([icon,title,text])=><div className="trust-item" key={title}><span className="line-icon"><Icon name={icon}/></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div>
 <section id="despre" className="section about"><div className="container about-grid"><div className="about-photo"><img src={images.hero} alt="Electrician lucrând cu atenție la echipamente" loading="lazy"/><div className="photo-tag"><Icon name="bolt"/> O lucrare bună începe<br/>cu atenția la detalii.</div></div><div><p className="eyebrow dark">01 / DESPRE MGX</p><h2>În spatele fiecărui<br/>spațiu, o instalație<br/><em>bine făcută.</em></h2><p className="body-copy">Confortul de zi cu zi începe cu lucrurile pe care nu le vezi. Cu circuite gândite corect, conexiuni sigure și o execuție atentă.</p><p className="body-copy">La MGX, abordăm fiecare lucrare pornind de la nevoile spațiului tău. Îți explicăm soluțiile și urmărim fiecare detaliu, de la planificare până la verificarea finală.</p><div className="about-notes"><span><Icon name="check"/> Soluții adaptate spațiului</span><span><Icon name="check"/> Atenție la siguranță</span><span><Icon name="check"/> Execuție și verificare</span></div><a className="text-link" href="#contact">Să vorbim despre proiectul tău <Arrow/></a></div></div></section>
 <section id="servicii" className="section services"><div className="container"><div className="section-heading"><div><p className="eyebrow dark">02 / CE PUTEM FACE PENTRU TINE</p><h2>Soluții electrice.<br/><em>De la A la Z.</em></h2></div><p>O instalație nouă sau un spațiu care are nevoie de o schimbare? Găsim soluția potrivită pentru lucrarea ta.</p></div><div className="service-grid">{services.map(([icon,title,desc],i)=><article className="service-card" key={title}><div className="card-top"><span className="service-icon" aria-hidden="true"><Icon name={icon}/></span><span className="card-number">0{i+1}</span></div><h3>{title}</h3><p>{desc}</p><a href="#contact" aria-label={`Discută despre ${title.toLowerCase()}`}>Discută proiectul <Arrow/></a></article>)}</div></div></section>
 <section className="quote-band"><div className="container"><Icon name="bolt" className="big-bolt"/><div><h2>Ai un proiect în minte?</h2><p>Primul pas e simplu. Spune-ne de ce ai nevoie.</p></div><a href="#contact" className="button">Cere o ofertă <Arrow/></a></div></section>
 <section id="proiecte" className="section projects"><div className="container"><div className="section-heading"><div><p className="eyebrow">03 / POSIBILITĂȚI PENTRU SPAȚIUL TĂU</p><h2>Același standard.<br/><em>În orice spațiu.</em></h2></div><p>De la atmosfera unei locuințe la funcționalitatea unui spațiu de lucru. Imagini de inspirație pentru tipurile de lucrări pe care le putem discuta.</p></div><div className="project-grid">{[[images.home,'01','Rezidențial','Confortul începe acasă.'],[images.office,'02','Comercial','Energie pentru afacerea ta.'],[images.hero,'03','Instalații și tablouri','Fiecare circuit contează.']].map(([img,n,title,desc])=><article className="project-card" key={n}><div className="project-photo"><img src={img} alt={title} loading="lazy"/><span>IMAGINE DE PREZENTARE</span></div><div className="project-caption"><div><small>{n} / {title}</small><h3>{desc}</h3></div><a href="#contact" aria-label={`Solicită informații pentru ${title}`}><Arrow/></a></div></article>)}</div></div></section>
 <section className="section process"><div className="container"><p className="eyebrow dark">04 / CUM LUCRĂM</p><h2>Clar, de la prima discuție<br/><em>până la ultima verificare.</em></h2><div className="process-grid">{[['01','Discutăm','Ne spui ce ai nevoie și înțelegem cerințele spațiului.'],['02','Stabilim soluția','Clarificăm lucrarea, etapele și detaliile ofertei.'],['03','Executăm','Realizăm instalația cu atenție la fiecare detaliu.'],['04','Verificăm','Verificăm lucrarea și îți explicăm ce trebuie să știi.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
 <section id="contact" className="section contact"><div className="container contact-grid"><div><p className="eyebrow">05 / HAI SĂ VORBIM</p><h2>Proiectul tău.<br/>Următoarea<br/><em>conexiune.</em></h2><p className="body-copy">O întrebare, o renovare sau o instalație de la zero? Pregătește câteva detalii și hai să găsim punctul de pornire.</p></div><div className="contact-panel"><span className="contact-label">DATE DE CONTACT ÎN CURS DE ACTUALIZARE</span><p className="phone-placeholder">07XX XXX XXX</p><p>Numărul de telefon va fi disponibil în curând.</p><div className="brief"><h3>Ce să incluzi în cererea de ofertă</h3><ul><li>Tipul spațiului: locuință, birou sau spațiu industrial</li><li>Lucrarea de care ai nevoie</li><li>Termenul dorit și detalii utile</li></ul><button className="button" onClick={copyBrief}>{copied?'Mesaj copiat':'Copiază un model de mesaj'} {copied?<Icon name="check"/>:<Arrow/>}</button><span className="copy-status" role="status">{copied?'Poți completa mesajul și îl poți trimite când datele de contact sunt disponibile.':''}</span></div></div></div></section>
 </main><footer><div className="container footer-top"><Logo/><p>Instalații electrice.<br/>Gândite corect. Executate cu grijă.</p><a href="#acasa">Înapoi sus <Icon name="up"/></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} MGX Electric. Toate drepturile rezervate.</span><span>Puterea detaliilor bine făcute.</span></div></footer>
 </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
