export const createGalleryCardTemplate = imgInfo => {
  return `
      <li class="gallery-card">
        <a href="${imgInfo.largeImageURL}" class="gallery-link">
          <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}"/>
        </a>
        <ul class="info-card-list">
            <li class="info-card-item">Likes <p> ${imgInfo.likes} </p></li>
            <li class="info-card-item">Views <p>${imgInfo.views}</p></li>
            <li class="info-card-item">Comments <p>${imgInfo.comments}</p></li>
            <li class="info-card-item">Downloads <p>${imgInfo.downloads}</p></li>
        </ul>
      </li>

    `;
};
