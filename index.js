import{a as d,S as f,i as n}from"./assets/vendor-BLPZKqeQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="YOUR_API_KEY";async function y(s){return(await d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a");function g(s){const o=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){n.warning({message:"Please enter a search query."});return}L(),w();try{const r=await y(o);r.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!"}):g(r.hits)}catch{n.error({message:"Error fetching images."})}finally{b()}});
//# sourceMappingURL=index.js.map
