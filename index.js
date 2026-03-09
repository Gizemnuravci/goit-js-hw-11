import{S as h,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="52408507-9b8d709dfd9c7c83170b7178c",y="https://pixabay.com/api/";async function g(s,t=1,o=40){const a=`${y}?key=${p}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`;try{const e=await fetch(a);if(!e.ok)throw new Error(`Sorry, there are no images matching your search query. Plea ${e.status}`);return await e.json()}catch(e){throw console.error("Sorry, there are no images matching your search query. Plea",e),e}}const L=document.getElementById("search-form"),c=document.querySelector(".gallery"),l=document.getElementById("loader");let $=new h(".gallery a");L.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.searchQuery.value.trim();if(t){l.classList.remove("hidden"),c.innerHTML="";try{const o=await g(t);if(o.hits.length===0){n.error({title:"Hata",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const a=o.hits.map(({webformatURL:e,largeImageURL:r,tags:i,likes:u,views:d,comments:m,downloads:f})=>`
        <li class="gallery-item">
          <a href="${r}">
            <img src="${e}" alt="${i}" loading="lazy" />
          </a>
          <div class="info">
            <p>Likes: ${u}</p>
            <p>Views: ${d}</p>
            <p>Comments: ${m}</p>
            <p>Downloads: ${f}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",a),$.refresh()}catch{n.error({title:"Hata",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{l.classList.add("hidden")}}});
//# sourceMappingURL=index.js.map
