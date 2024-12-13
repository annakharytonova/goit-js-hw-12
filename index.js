import{a as b,i as l,S as L}from"./assets/vendor-DEenWwFD.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();function v(t){const i=document.querySelector(".gallery-list");if(!i){console.error("Gallery element not found in the DOM."),iziToast.error({title:"Error",message:"Gallery element not found in the DOM.",position:"topRight",backgroundColor:"#cd0d0d"});return}const a=t.map(({webformatURL:s,largeImageURL:e,tags:o,likes:n,views:f,comments:p,downloads:y})=>`<li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${s}" alt="${o}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <h4>Likes:</h4>
            <p>${n}</p>
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
      </li>`).join("");i.insertAdjacentHTML("beforeend",a)}const w="47381737-77b313e1304caa98d6d0e16f2",S="https://pixabay.com/api/";async function q(t,i,a=15){const s=new URLSearchParams({key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:a});try{const e=await b.get(S,{params:s});return console.log(e.data),e.data}catch(e){console.log(e.message),l.error({title:"Error",position:"topRight",backgroundColor:"#cd0d0d",message:`${e.message}`})}}const m=document.querySelector("form"),C=m.querySelector("input"),d=document.querySelector(".gallery-list"),O=document.querySelector(".loader"),r=document.querySelector("button.button-load-more");r.classList.add("button-is-hidden");m.addEventListener("submit",P);r.addEventListener("click",R);let c=1;const h=15;let u="";async function P(t){if(t.preventDefault(),I(),u=C.value.trim(),!u.trim()){l.warning({title:"Caution",position:"topRight",backgroundColor:"#FF0000",message:"Please enter a search word!"});return}c=1,r.classList.remove("button-is-hidden"),await g()}async function R(){await g();const t=d.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}async function g(){r.classList.add("button-is-hidden");try{$();const t=await q(u,c,h);if(t.hits.length===0){l.show({title:"No results",position:"topRight",backgroundColor:"#cd0d0d",message:"Sorry, there are no images matching your search query. Please, try again!"}),r.classList.add("button-is-hidden");return}v(t.hits),k(),c*h>=t.totalHits?(r.classList.add("button-is-hidden"),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#2196F3"})):r.classList.remove("button-is-hidden"),c+=1}catch{l.error({title:"Error",message:"Failed to load images. Please try again later.",position:"topRight",backgroundColor:"#cd0d0d"}),r.classList.add("button-is-hidden")}finally{E()}}function $(){d&&O.classList.remove("is-hidden")}function k(){new L(".gallery-list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}function E(){const t=document.querySelector(".loader");t&&t.classList.add("is-hidden")}function I(){d&&(d.innerHTML="")}
//# sourceMappingURL=index.js.map
