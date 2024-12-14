import{a as w,i as l,S}from"./assets/vendor-DEenWwFD.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function q(t){const i=document.querySelector(".gallery-list");if(!i){console.error("Gallery element not found in the DOM."),iziToast.error({title:"Error",message:"Gallery element not found in the DOM.",position:"topRight",backgroundColor:"#cd0d0d"});return}const n=t.map(({webformatURL:s,largeImageURL:e,tags:o,likes:a,views:b,comments:L,downloads:v})=>`<li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${s}" alt="${o}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <h4>Likes:</h4>
            <p>${a}</p>
          </div>
          <div class="info-item">
            <h4>Views:</h4>
            <p>${b}</p>
          </div>
          <div class="info-item">
            <h4>Comments:</h4>
            <p>${L}</p>
          </div>
          <div class="info-item">
            <h4>Downloads:</h4>
            <p>${v}</p>
          </div>
        </div>
      </li>`).join("");i.insertAdjacentHTML("beforeend",n)}const C="47381737-77b313e1304caa98d6d0e16f2",O="https://pixabay.com/api/";async function P(t,i,n=15){const s=new URLSearchParams({key:C,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:n});try{const e=await w.get(O,{params:s});return console.log(e.data),e.data}catch(e){console.log(e.message),l.error({title:"Error",position:"topRight",backgroundColor:"#cd0d0d",message:`${e.message}`})}}const f=document.querySelector("form"),R=f.querySelector("input"),d=document.querySelector(".gallery-list"),p=document.querySelector(".loader"),r=document.querySelector("button.button-load-more");r.classList.add("button-is-hidden");f.addEventListener("submit",$);r.addEventListener("click",k);let c=1;const m=15;let h="";async function $(t){if(t.preventDefault(),I(),h=R.value.trim(),!h.trim()){l.warning({title:"Caution",position:"topRight",backgroundColor:"#FF0000",message:"Please enter a search word!"});return}c=1,r.classList.remove("button-is-hidden"),u(),await y(),g()}async function k(){u(),await y(),g();const t=d.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}async function y(){r.classList.add("button-is-hidden");try{u();const t=await P(h,c,m);if(t.hits.length===0){l.show({title:"No results",position:"topRight",backgroundColor:"#cd0d0d",message:"Sorry, there are no images matching your search query. Please, try again!"}),r.classList.add("button-is-hidden");return}q(t.hits),E(),c*m>=t.totalHits?(r.classList.add("button-is-hidden"),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#2196F3"})):r.classList.remove("button-is-hidden"),c+=1}catch{u(),l.error({title:"Error",message:"Failed to load images. Please try again later.",position:"topRight",backgroundColor:"#cd0d0d"}),r.classList.add("button-is-hidden")}finally{g()}}function u(){d&&p.classList.remove("is-hidden")}function E(){new S(".gallery-list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}function g(){const t=document.querySelector(".loader");t&&t.classList.add("is-hidden")}function I(){d&&(d.innerHTML="")}console.log("Loader visibility:",p.classList.contains("is-hidden")?"Hidden":"Visible");
//# sourceMappingURL=index.js.map
