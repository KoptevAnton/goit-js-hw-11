import{i as c,S as u}from"./assets/vendor-f33cd494.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="44646887-2aa33964a79eef97580c1a22f",p="https://pixabay.com/api/",g=n=>{const t=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:21});return fetch(`${p}?${t}`).then(a=>{if(!a.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return a.json()})},h=n=>n.map(({tags:t,webformatURL:a,largeImageURL:s,likes:e,views:r,comments:o,downloads:d})=>`
          <li class="card-container">
            <a href=${s} class="card-container__link js-card-link">
              <img loading="lazy" class="card-container__photo" src="${a}" alt="${t}" >
            </a>
            <div class="card-container__thumb">
              <div class="card-container__meta">
                <span class="card-container__title">Likes</span>
                <span class="card-container__info">${e}</span>
              </div>
              <div class="card-container__meta">
                <span class="card-container__title">Views</span>
                <span class="card-container__info">${r}</span>
              </div>
              <div class="card-container__meta">
                <span class="card-container__title">Comments</span>
                <span class="card-container__info">${o}</span>
              </div>
              <div class="card-container__meta">
                <span class="card-container__title">Downloads</span>
                <span class="card-container__info">${d}</span>
              </div>
            </div>
          </li>
        `).join(""),i=document.querySelector(".gallery"),f=document.querySelector(".search-form"),l=document.querySelector(".loader");function y(n){n.preventDefault();const t=n.target.elements.searchKeyword.value.trim();if(i.innerHTML="",t==="")return c.error({message:"The field in which you enter the text cannot be empty",position:"center",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(250, 250, 251, 1)",iconUrl:"./img/octagon.svg",messageSize:"16",messageLineHeight:"24"});i.innerHTML="",l.classList.remove("is-hidden"),g(t).then(a=>{a.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(250, 250, 251, 1)",iconUrl:"./img/octagon.png",messageSize:"16",messageLineHeight:"24"}),i.innerHTML=h(a.hits),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(a=>console.log(a)).finally(()=>{n.target.reset(),l.classList.add("is-hidden")})}f.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
