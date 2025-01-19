import{S as u,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m=t=>`
      <li class="gallery-card">
        <a href="${t.largeImageURL}" class="gallery-link">
          <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"/>
        </a>
        <ul class="info-card-list">
            <li class="info-card-item">Likes <p> ${t.likes} </p></li>
            <li class="info-card-item">Views <p>${t.views}</p></li>
            <li class="info-card-item">Comments <p>${t.comments}</p></li>
            <li class="info-card-item">Downloads <p>${t.downloads}</p></li>
        </ul>
      </li>

    `,h=t=>fetch(`https://pixabay.com/api/?key=48308646-4d458c48d5d2f9bc699dc7008&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}),d=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),n=document.querySelector(".gallery-load"),p=t=>{t.preventDefault();const o=t.currentTarget.elements.user_gallery.value.trim();c.innerHTML="",d.reset(),(()=>{n.classList.remove("hidden")})(),console.log("показываю загрузку"),h(o).then(s=>{(()=>{n.classList.add("hidden")})(),console.log("заканч загрузку");const r=s.hits.map(l=>m(l)).join("");c.innerHTML=r,console.log(s),s.hits.length===0&&a.show({message:"❌ Sorry, there are no images matching your search query. Please, try again!",color:"red",position:"topRight"}),f.refresh()}).catch(s=>{a.show({message:`❌ Something went wrong: ${s.message}`,color:"red",position:"topRight"})})};d.addEventListener("submit",p);let f=new u(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
