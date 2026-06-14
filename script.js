(function(){
/* ============================================================
   ССЫЛКИ — чтобы добавить сайт в код, просто допиши строку
   {n:"Название", u:"https://адрес"} — иконка появится сама.
   Либо нажми «+ Добавить» прямо на странице.
   ============================================================ */
const DATA=[
  {id:"social", title:"Соцсети", color:"--c-social", links:[
    {n:"YouTube",        u:"https://www.youtube.com/"},
    {n:"Facebook",       u:"https://www.facebook.com/"},
    {n:"Instagram",      u:"https://www.instagram.com/"},
    {n:"Twitter / X",    u:"https://www.twitter.com/"},
    {n:"ВКонтакте",      u:"https://vk.com/id551649082/"},
    {n:"Discord",        u:"https://discord.com/channels/1007000829741506630/1007000829741506633"},
    {n:"TikTok",         u:"https://www.tiktok.com/explore"},
    {n:"Reddit",         u:"https://www.reddit.com/"},
    {n:"Pinterest",      u:"https://ru.pinterest.com/"}
  ]},
  {id:"news", title:"Новости и полезное", color:"--c-news", links:[
    {n:"StartPage",        u:"https://news.startpage.co.il/russian/"},
    {n:"Я Плакалъ",        u:"https://www.yaplakal.com/"},
    {n:"Хабр",             u:"https://habr.com/ru/articles/"},
    {n:"MSPoweruser",      u:"https://mspoweruser.com/"},
    {n:"Neurohive",        u:"https://neurohive.io/ru/"},
    {n:"DNS Клуб",         u:"https://club.dns-shop.ru/"},
    {n:"Remontka.Pro",     u:"https://remontka.pro/"},
    {n:"Код Дурова",       u:"https://kod.ru/"},
    {n:"Комнаты",          u:"https://letsconvene.im/app/#/"},
    {n:"Переводчик",       u:"https://translate.google.com/?hl=ru&sl=ru&tl=en&op=translate"},
    {n:"Translit",         u:"https://translit.ru/"},
    {n:"FMHY",             u:"https://fmhy.net/"}
  ]},
  {id:"ai", title:"ИИ-чаты и ассистенты", color:"--c-ai", links:[
    {n:"Claude",          u:"https://claude.ai/new"},
    {n:"ChatGPT",         u:"https://chat.openai.com/"},
    {n:"Gemini",          u:"https://gemini.google.com/u/1/app?hl=ru"},
    {n:"Google AI Studio",u:"https://aistudio.google.com/"},
    {n:"Playground",      u:"https://platform.openai.com/playground"},
    {n:"You.com",         u:"https://you.com/search?q=who+are+you&tbm=youchat&cfr=chat/"},
    {n:"Groq",            u:"https://groq.com/"},
    {n:"Mistral AI",      u:"https://chat.mistral.ai/chat"},
    {n:"Perplexity",      u:"https://www.perplexity.ai/"},
    {n:"Poe",             u:"https://poe.com/"},
    {n:"Нейро (Яндекс)",  u:"https://ya.ru/?npr=1&utm_referrer=https%3A%2F%2Fyandex.ru%2F&neuro=1"},
    {n:"Copilot",         u:"https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx/"},
    {n:"Andi",            u:"https://andisearch.com/"},
    {n:"ВсегоGPT",        u:"https://overallgpt.com/"},
    {n:"DeepSeek",        u:"https://chat.deepseek.com/"},
    {n:"Grok",            u:"https://x.com/i/grok/"},
    {n:"GitHub Copilot",  u:"https://github.com/copilot"},
    {n:"My-Page",         u:"https://github.com/Itsik300/My-Page"},
    {n:"My-Website",      u:"https://github.com/Itsik300/My-Website-"},
    {n:"PageAI",          u:"https://github.com/Itsik300/PageAI"},
    {n:"Qwen Chat",       u:"https://chat.qwenlm.ai/"},
    {n:"Kimi AI",         u:"https://kimi.ai/chat/empty/"},
    {n:"Arena AI",        u:"https://arena.ai/text/direct"},
    {n:"HuggingChat",     u:"https://huggingface.co/chat/"},
    {n:"Inception Chat",  u:"https://chat.inceptionlabs.ai/"},
    {n:"Together AI Chat",u:"https://chat.together.ai/"},
    {n:"NotebookLM",      u:"https://notebooklm.google.com/?authuser=1"},
    {n:"Z.aiChat",        u:"https://chat.z.ai/"},
    {n:"Woozlit",         u:"https://www.woozlit.com/"}
  ]},
  {id:"img", title:"Изображения и генерация", color:"--c-img", links:[
    {n:"Shakker AI",          u:"https://www.shakker.ai/aigenerator"},
    {n:"Акулы нейросетей",    u:"https://myneuralnetworks.ru/generating_images_from_text/"},
    {n:"Kling AI",            u:"https://klingai.com/"},
    {n:"Krea",                u:"https://www.krea.ai/apps/image/flux"},
    {n:"Ideogram",            u:"https://ideogram.ai/t/explore"},
    {n:"Reve",                u:"https://app.reve.com/home"},
    {n:"Design Arena",        u:"https://www.designarena.ai/"},
    {n:"ГенерКартинок",       u:"https://app.nichetensor.com/?feature=textToImage"},
    {n:"FLUX.1-pro",          u:"https://glif.app/@001/glifs/clzgvha5a00041aepvz2h4zi4"},
    {n:"FLUX.1-schnell",      u:"https://huggingface.co/spaces/black-forest-labs/FLUX.1-schnell"},
    {n:"BlinkShot AI",        u:"https://www.blinkshot.io/"},
    {n:"Google Flow",         u:"https://labs.google/fx/ru/tools/flow/project/53d391fd-d0f0-4eb6-b9fb-6c8294e0c296"},
    {n:"Bing Images",         u:"https://www.bing.com/images?FORM=HDRSC2"},
    {n:"ZonerAI",             u:"https://zonerai.com/ru"},
    {n:"ИИ Карандаш",         u:"https://crayonai.net/ai-assistant"},
    {n:"iLoveIMG",            u:"https://www.iloveimg.com/ru"},
    {n:"Glyphy",              u:"https://glyphy.io/?hl=en"},
    {n:"i2IMG",               u:"https://www.i2img.com/ru/?hl=en"},
    {n:"Boxicons",            u:"https://boxicons.com/"},
    {n:"Удаление вод. знаков",u:"https://www.vidmore.com/ru/watermark-remover/#"}
  ]}
];

/* ---------- Автоматическая иконка по адресу сайта ---------- */
function normalizeUrl(u){
  u=u.trim();
  if(!/^https?:\/\//i.test(u)) u="https://"+u;
  return u;
}
function linkKey(link){
  return normalizeUrl(link.u).replace(/\/+$/,'').toLowerCase();
}
function nameKey(link){
  return link.n.trim().toLowerCase();
}
function favicon(url){
  try{
    const normalized=normalizeUrl(url);
    const host=new URL(normalized).hostname;
    if(host==="notebooklm.google.com"||host.endsWith(".notebooklm.google.com")){
      return NOTEBOOKLM_ICON;
    }
    return "https://www.google.com/s2/favicons?domain_url="+encodeURIComponent(normalized)+"&sz=64";
  }catch(e){return "";}
}
// запасная иконка-глобус, если фавиконка не загрузилась
const NOTEBOOKLM_ICON="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#fff"/><path d="M14 44V34c0-11 9-20 20-20h16v30" fill="none" stroke="#050505" stroke-width="7" stroke-linejoin="round"/><path d="M14 44v-7c0-8.5 6.8-15.5 15.4-15.5H42V44" fill="none" stroke="#050505" stroke-width="7" stroke-linejoin="round"/><path d="M14 44v-3.5c0-6.6 5.4-12 12-12h8V44" fill="none" stroke="#050505" stroke-width="7" stroke-linejoin="round"/></svg>');
const FALLBACK="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%239AA3C0" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>');

/* ---------- Пользовательские сайты (localStorage) ---------- */
const LS_KEY="mySites";
function loadCustom(){try{return JSON.parse(localStorage.getItem(LS_KEY))||{};}catch(e){return {};}}
function saveCustom(c){localStorage.setItem(LS_KEY,JSON.stringify(c));}
let custom=loadCustom();

/* ---------- Отрисовка ---------- */
const main=document.getElementById('links');
function makeTile(link,tintVar,isCustom,catId,idx){
  const a=document.createElement('a');
  a.className='tile'+(isCustom?' custom':'');
  a.style.setProperty('--tint','var('+tintVar+')');
  a.href=normalizeUrl(link.u);
  a.target='_blank';a.rel='noopener';
  const img=document.createElement('img');
  img.loading='lazy';img.alt='';
  img.src=favicon(link.u)||FALLBACK;
  img.onerror=()=>{img.onerror=null;img.src=FALLBACK;};
  const sp=document.createElement('span');
  sp.textContent=link.n;
  a.append(img,sp);
  if(isCustom){
    const del=document.createElement('button');
    del.className='del';del.type='button';del.textContent='✕';
    del.title='Удалить сайт';
    del.addEventListener('click',e=>{
      e.preventDefault();e.stopPropagation();
      if(confirm('Удалить «'+link.n+'»?')){
        custom[catId].splice(idx,1);
        saveCustom(custom);
        render();filter();
      }
    });
    a.append(del);
  }
  return a;
}
function render(){
  main.innerHTML='';
  DATA.forEach(cat=>{
    const sec=document.createElement('section');
    sec.style.setProperty('--tint','var('+cat.color+')');
    sec.dataset.cat=cat.id;

    const head=document.createElement('div');
    head.className='sec-head';
    head.innerHTML='<span class="dot" style="background:var('+cat.color+')"></span>'+
                   '<h2>'+cat.title+'</h2><span class="count"></span>';
    const add=document.createElement('button');
    add.className='addbtn';add.type='button';add.textContent='+ Добавить';
    add.addEventListener('click',()=>openDlg(cat.id));
    head.append(add);

    const grid=document.createElement('div');
    grid.className='grid';
    const builtInUrls=new Set(cat.links.map(linkKey));
    const builtInNames=new Set(cat.links.map(nameKey));
    cat.links.forEach(l=>grid.append(makeTile(l,cat.color,false)));
    (custom[cat.id]||[]).forEach((l,i)=>{
      if(builtInUrls.has(linkKey(l))||builtInNames.has(nameKey(l))) return;
      grid.append(makeTile(l,cat.color,true,cat.id,i));
    });

    sec.append(head,grid);
    main.append(sec);
  });
  updateCounts();
}
function updateCounts(){
  document.querySelectorAll('#links section').forEach(s=>{
    s.querySelector('.count').textContent=s.querySelectorAll('.tile:not(.hidden)').length;
  });
}

/* ---------- Диалог добавления ---------- */
const dlg=document.getElementById('addDlg'),
      dlgName=document.getElementById('dlgName'),
      dlgUrl=document.getElementById('dlgUrl'),
      dlgPrev=document.getElementById('dlgPreview');
let dlgCat=null;
function openDlg(catId){
  dlgCat=catId;dlgName.value='';dlgUrl.value='';dlgPrev.innerHTML='';
  dlg.showModal();dlgName.focus();
}
dlgUrl.addEventListener('input',()=>{
  const src=favicon(dlgUrl.value);
  dlgPrev.innerHTML=src?'<img src="'+src+'" alt=""> Иконка подтянется автоматически':'';
});
document.getElementById('dlgCancel').addEventListener('click',()=>dlg.close());
document.getElementById('dlgSave').addEventListener('click',()=>{
  const n=dlgName.value.trim(),u=dlgUrl.value.trim();
  if(!n||!u){alert('Заполните название и адрес сайта.');return;}
  try{new URL(normalizeUrl(u));}catch(e){alert('Похоже, адрес сайта некорректный.');return;}
  (custom[dlgCat]=custom[dlgCat]||[]).push({n,u});
  saveCustom(custom);
  dlg.close();
  render();filter();
});
dlg.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();document.getElementById('dlgSave').click();}});

/* ---------- Часы, дата, приветствие ---------- */
const clock=document.getElementById('clock'),
      dateEl=document.getElementById('datestr'),
      greet=document.getElementById('greet');
function tick(){
  const n=new Date(),p=v=>String(v).padStart(2,'0');
  clock.innerHTML=p(n.getHours())+':'+p(n.getMinutes())+'<span class="sec">:'+p(n.getSeconds())+'</span>';
  dateEl.textContent=n.toLocaleDateString('ru-RU',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}
tick();setInterval(tick,1000);
const h=new Date().getHours();
const word=h<5?'Доброй ночи':h<12?'Доброе утро':h<18?'Добрый день':'Добрый вечер';
greet.innerHTML=word+', <em>Игорь</em>';

/* ---------- Иконка почты в шапке (тоже автоматически) ---------- */
const mailBtn=document.getElementById('mailBtn');
const mi=document.createElement('img');
mi.src=favicon(mailBtn.href);mi.alt='';
mailBtn.prepend(mi);

/* ---------- Тема ---------- */
const root=document.documentElement,btn=document.getElementById('themeBtn');
function applyTheme(t){
  root.dataset.theme=t;
  btn.textContent=(t==='dark'?'☀️ Светлая':'🌙 Тёмная');
  localStorage.setItem('theme',t);
}
applyTheme(localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'));
btn.addEventListener('click',()=>applyTheme(root.dataset.theme==='dark'?'light':'dark'));

/* ---------- Поисковые системы (иконки тоже автоматически) ---------- */
const engines=[...document.querySelectorAll('.engine')];
engines.forEach(b=>{
  const img=document.createElement('img');
  img.src=favicon(b.dataset.url);img.alt='';
  img.onerror=()=>{img.onerror=null;img.src=FALLBACK;};
  b.prepend(img);
});
let engineUrl=engines[0].dataset.url;
const q=document.getElementById('q');
const searchBtn=document.getElementById('searchBtn');
engines.forEach(b=>b.addEventListener('click',()=>{
  engines.forEach(x=>x.setAttribute('aria-pressed','false'));
  b.setAttribute('aria-pressed','true');
  engineUrl=b.dataset.url;
  q.focus();
}));

/* ---------- Поиск + живой фильтр ---------- */
const nores=document.getElementById('noresults');
function runSearch(){
  const value=q.value.trim();
  if(!value){q.focus();return;}
  window.open(engineUrl+encodeURIComponent(value),'_blank','noopener');
}
function filter(){
  const v=q.value.trim().toLowerCase();
  let any=false;
  document.querySelectorAll('.tile').forEach(t=>{
    const hit=!v||t.textContent.toLowerCase().includes(v)||t.href.toLowerCase().includes(v);
    t.classList.toggle('hidden',!hit);
    if(hit)any=true;
  });
  document.querySelectorAll('#links section').forEach(s=>{
    s.classList.toggle('hidden',s.querySelectorAll('.tile:not(.hidden)').length===0&&v!=='');
  });
  updateCounts();
  nores.querySelector('b').textContent=v;
  nores.classList.toggle('show',!any&&v!=='');
}
q.addEventListener('input',filter);
q.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&q.value.trim()){
    e.preventDefault();
    runSearch();
  }
  if(e.key==='Escape'){q.value='';filter();q.blur();}
});
searchBtn.addEventListener('click',runSearch);
document.addEventListener('keydown',e=>{
  if(e.key==='/'&&document.activeElement!==q&&!dlg.open){e.preventDefault();q.focus();}
});

render();
})();
