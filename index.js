import{a as u,S as f,i as n}from"./assets/vendor-BLPZKqeQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="50362686-a19d598e286bdc8c634e59341",p="https://pixabay.com/api/";async function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await u.get(p,{params:o})).data}catch(e){throw console.error("Error fetching images:",e),e}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a");function g(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const d=document.querySelector(".form"),v=d.elements["search-text"];d.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){n.warning({message:"Please enter a search query."});return}L(),w();try{const e=await y(o);e.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!"}):g(e.hits)}catch{n.error({message:"Error fetching images."})}finally{b()}});
//# sourceMappingURL=index.js.map
