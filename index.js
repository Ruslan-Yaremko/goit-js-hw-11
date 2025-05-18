import{a as u,S as d,i as n}from"./assets/vendor-DxEWe7lX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="50362686-a19d598e286bdc8c634e59341",m="https://pixabay.com/api/";async function p(s){const o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(m,{params:o})).data.hits}const c=document.querySelector(".gallery"),l=document.querySelector("#loader");let y=new d(".gallery a");function g(s){const o=s.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const w=document.querySelector(".form");document.querySelector(".gallery");w.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){n.error({title:"Error",message:"Please enter a search term."});return}h(),L();try{const r=await p(o);r.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!"}):g(r)}catch{n.error({message:"Failed to fetch images. Try again later."})}finally{b()}});
//# sourceMappingURL=index.js.map
