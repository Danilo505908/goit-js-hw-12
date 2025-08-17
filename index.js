import{a as g,S as L,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const b=g.create({baseURL:"https://pixabay.com/api/",params:{key:"51756879-33acfcb6aa2bec76bd89378fe",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function m(r,t){return(await b.get("",{params:{q:r,page:t}})).data}let w=new L(".gallery a");function f(r){const t=document.querySelector(".gallery"),n=r.map(s=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
            <img
                class="gallery-image"
                src="${s.webformatURL}"
                alt="${s.tags}"
            />
            <div class="gallery-box">
                <p>Likes <span>${s.likes}</span></p>
                <p>Views <span>${s.views}</span></p>
                <p>Comments <span>${s.comments}</span></p>
                <p>Downloads <span>${s.downloads}</span></p>
            </div>
        </a>
    </li>`).join("");t.insertAdjacentHTML("beforeend",n),w.refresh()}function S(){document.querySelector(".gallery").innerHTML=""}function y(){document.querySelector(".loader").classList.remove("is-hidden")}function p(){document.querySelector(".loader").classList.add("is-hidden")}function h(){document.querySelector(".load-more").classList.remove("is-hidden")}function d(){document.querySelector(".load-more").classList.add("is-hidden")}const q=document.querySelector(".form"),v=document.querySelector(".load-more");let i="",a=1,u=0;q.addEventListener("submit",async r=>{if(r.preventDefault(),i=r.target.elements.searchText.value.trim(),!!i){a=1,S(),d(),y();try{const t=await m(i,a);if(u=t.totalHits,t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}f(t.hits),a*15<u&&h()}catch{l.error({message:"An error occurred while fetching images. Please try again."})}finally{p()}}});v.addEventListener("click",async()=>{a+=1,y(),d();try{const r=await m(i,a);f(r.hits),P(),a*15>=u?(l.info({message:"We're sorry, but you've reached the end of search results."}),d()):h()}catch{l.error({message:"An error occurred while fetching images. Please try again."})}finally{p()}});function P(){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
