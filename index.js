import{S as p,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="52408507-9b8d709dfd9c7c83170b7178c",g="https://pixabay.com/api/";async function h(a,r=1,o=40){const i=`${g}?key=${y}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`,e=await fetch(i);if(!e.ok)throw new Error("Sorry, there are no images matching your search query. Please try again.");return await e.json()}const L=document.getElementById("search-form"),c=document.querySelector(".gallery"),l=document.getElementById("loader");let $=new p(".gallery a");L.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.searchQuery.value.trim();if(r){l.classList.remove("hidden"),c.innerHTML="";try{const o=await h(r);if(o.hits.length===0){n.error({title:"Hata",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=o.hits.map(({webformatURL:e,largeImageURL:t,tags:s,likes:d,views:u,comments:m,downloads:f})=>`
        <li class="gallery-item">
          <a href="${t}">
            <img src="${e}" alt="${s}" loading="lazy" />
          </a>
          <div class="info">
            <p>Likes: ${d}</p>
            <p>Views: ${u}</p>
            <p>Comments: ${m}</p>
            <p>Downloads: ${f}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",i),$.refresh()}catch{n.error({title:"Hata",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{l.classList.add("hidden")}}});
//# sourceMappingURL=index.js.map
