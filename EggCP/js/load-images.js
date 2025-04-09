document.addEventListener("DOMContentLoaded", () => {
  const imageGallery = document.getElementById("image-gallery");
  if (!imageGallery) return;

  const entryId = document.body.dataset.entry;
  if (!entryId) return;

  const folder = `../assets/${entryId}/`;

  const possibleImageNames = Array.from({ length: 10 }, (_, i) => `image${i + 1}`);
  const extensions = ["jpg", "jpeg", "png", "webp", "gif"];

  possibleImageNames.forEach(name => {
    extensions.forEach(ext => {
      const img = new Image();
      img.src = `${folder}${name}.${ext}`;
      img.loading = "lazy";

      img.onload = () => {
        imageGallery.appendChild(img);
      };

      img.onerror = () => {
        // Ignore missing image
      };
    });
  });
});
