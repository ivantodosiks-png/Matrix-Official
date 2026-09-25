const characters = [
  ['characters-01.png','Neo','The One / Operative','An anomaly who can perceive and reshape the code.'],
  ['characters-02.png','Trinity','First Mate / Hacker','A lethal operative and elite digital infiltrator.'],
  ['characters-03.png','Morpheus','Captain / Commander','Leader of the resistance and believer in the prophecy.'],
  ['characters-04.png','Agent Smith','Security Program','A relentless system enforcer with root authority.'],
  ['characters-05.png','The Oracle','Intuitive Program','A guide balancing choice, knowledge and human intuition.'],
  ['characters-06.png','Cypher','Hovercraft Operator','A compromised crew member seduced by the simulation.']
];
const scenes = [
  ['media-01.png','Sequence 01 // The rooftop dodge'],['media-02.png','Sequence 02 // The red pill'],['media-03.png','Sequence 03 // The lobby shootout'],['media-04.png','Sequence 04 // Dojo construct'],['media-05.png','Sequence 05 // Helicopter extraction']
];
const reviews = [
  ['Marcus V.','Film Scholar','The defining science-fiction masterpiece of our generation.','The Wachowskis synthesize cyberpunk, martial arts philosophy and Hong Kong kinetic ballet into an unmistakable cinematic language.'],
  ['Elena R.','Verified Viewer','Visually revolutionary, philosophically deep.','Keanu Reeves brings measured vulnerability to Thomas Anderson, while Laurence Fishburne commands every frame with mythic gravity.'],
  ['David K.','Cinema Critic','Rewrote the action film playbook forever.','By merging martial arts choreography with the philosophy of hyperreality, the filmmakers created an authentic milestone.']
];

document.querySelector('#character-grid').innerHTML = characters.map(([img,name,role,text],i)=>`<article class="character-card"><img src="assets/${img}" alt="${name}"><div><span class="eyebrow">Coordinate: 0${i+1} // Active</span><h3>${name}</h3><small class="mono">${role}</small><p>${text}</p></div></article>`).join('');
document.querySelector('#gallery').innerHTML = scenes.map(([img,title])=>`<figure><img src="assets/${img}" alt="${title}"><figcaption>${title}</figcaption></figure>`).join('');
const renderReviews=()=>document.querySelector('#reviews-list').innerHTML=reviews.map(([name,role,title,text])=>`<article class="review-card"><header><span>${name} // ${role}</span><span>★★★★★ 5.0</span></header><h3>“${title}”</h3><p>${text}</p><small class="mono">HASH: SHA256 // VERIFIED_PASS</small></article>`).join('');renderReviews();

const pages=[...document.querySelectorAll('.page')], links=[...document.querySelectorAll('.nav a')];
function route(){const id=(location.hash||'#home').slice(1);const page=document.getElementById(id)||document.getElementById('home');pages.forEach(p=>p.classList.toggle('active',p===page));links.forEach(a=>a.classList.toggle('active',a.hash==='#'+page.id));document.querySelector('.nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');window.scrollTo(0,0);document.title=`${page.id[0].toUpperCase()+page.id.slice(1)} — The Matrix`;}
addEventListener('hashchange',route);route();
document.querySelector('.menu-toggle').addEventListener('click',e=>{const nav=document.querySelector('.nav');nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'))});
const modal=document.querySelector('#trailer-modal');document.querySelectorAll('.trailer-open').forEach(b=>b.addEventListener('click',()=>modal.showModal()));document.querySelector('.modal-close').addEventListener('click',()=>modal.close());modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
document.querySelector('#review-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);reviews.unshift([d.get('name'),'Verified Viewer',d.get('headline'),d.get('body')]);renderReviews();e.currentTarget.reset();e.currentTarget.querySelector('.form-status').textContent='REVIEW INGESTED // HASH VERIFIED';});
