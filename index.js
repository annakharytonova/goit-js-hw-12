import{a as b,i as n,S as L}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function v(t){const r=document.querySelector(".gallery-list");if(!r){console.error("Gallery element not found in the DOM.");return}const s=t.map(({webformatURL:i,largeImageURL:e,tags:o,likes:a,views:f,comments:p,downloads:y})=>`<li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${i}" alt="${o}" width="360px" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <h4>Likes:</h4>
            <p>${a}</p>
          </div>
          <div class="info-item">
            <h4>Views:</h4>
            <p>${f}</p>
          </div>
          <div class="info-item">
            <h4>Comments:</h4>
            <p>${p}</p>
          </div>
          <div class="info-item">
            <h4>Downloads:</h4>
            <p>${y}</p>
          </div>
        </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",s)}const w="47381737-77b313e1304caa98d6d0e16f2",S="https://pixabay.com/api/";async function q(t,r,s=15){const i=new URLSearchParams({key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s});try{const e=await b.get(S,{params:i});return console.log(e.data),e.data}catch(e){console.log(e.message),n.error({title:"Error",position:"topRight",backgroundColor:"#cd0d0d",message:`${e.message}`})}}const m=document.querySelector("form"),C=m.querySelector("input"),g=document.querySelector(".gallery-list"),P=document.querySelector(".loader"),l=document.querySelector("button.button-load-more");l.classList.add("button-is-hidden");m.addEventListener("submit",I);l.addEventListener("click",O);let c=1;const u=15;let d="";async function I(t){if(t.preventDefault(),d=C.value.trim(),!d.trim()){n.warning({title:"Caution",position:"topRight",backgroundColor:"#FF0000",message:"Please enter a search word!"});return}c=1,l.classList.remove("button-is-hidden"),await h()}async function O(){await h();const t=g.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}async function h(){try{R();const t=await q(d,c,u);if(t.hits.length===0){n.show({title:"No results",position:"topRight",backgroundColor:"#cd0d0d",message:"Sorry, there are no images matching your search query. Please, try again!"});return}v(t.hits),$(),c*u>=t.totalHits?(l.classList.add("button-is-hidden"),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#2196F3"})):l.classList.remove("button-is-hidden"),c+=1}catch{n.error({title:"Error",message:"Failed to load images. Please try again later.",position:"topRight",backgroundColor:"#cd0d0d"})}finally{k()}}function R(){g&&P.classList.remove("is-hidden")}function $(){new L(".gallery-list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}function k(){const t=document.querySelector(".loader");t&&t.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
