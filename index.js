import{a as c,S as i,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=c.create({baseURL:"https://pixabay.com/api/",params:{key:"51756879-33acfcb6aa2bec76bd89378fe",image_type:"photo",orientation:"horizontal",safesearch:!0}});function d(s){return u.get("",{params:{q:s}}).then(a=>a.data)}let y=new i(".gallery a");function p(s){const a=document.querySelector(".gallery"),o=s.map(r=>`<li class="gallery-item">
                <a class="gallery-link" href="${r.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${r.webformatURL}"
                        data-source="${r.largeImageURL}"
                        alt="${r.tags}"
                    />
                    <div class="gallery-box">
                        <p class="gallery-box-text">Likes <span class="gallery-box-span">${r.likes}</span></p>
                        <p class="gallery-box-text">Views <span class="gallery-box-span">${r.views}</span></p>
                        <p class="gallery-box-text">Comments <span class="gallery-box-span">${r.comments}</span></p>
                        <p class="gallery-box-text">Downloads <span class="gallery-box-span">${r.downloads}</span></p>
                    </div>
                </a>
            </li>`).join("");a.insertAdjacentHTML("beforeend",o),y.refresh()}function f(){const s=document.querySelector(".gallery");s.innerHTML=""}function m(){document.querySelector(".loader").classList.remove("is-hidden")}function g(){document.querySelector(".loader").classList.add("is-hidden")}const h=document.querySelector(".form");h.addEventListener("submit",async s=>{s.preventDefault();const a=s.target.elements.searchText.value.trim();if(a){f(),m();try{const o=await d(a);o.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!"}):p(o.hits)}catch{n.error({message:"An error occurred while fetching images. Please try again."})}finally{g()}}});
//# sourceMappingURL=index.js.map
