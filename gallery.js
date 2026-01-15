const galleryListElement = document.getElementById("gallery-list");
const gallery = ["ineedthis.jpg", "images671.jpg", "Untitledbreak.jpg", "Untitledpizza.jpg", "Untitledpasta.jpg", "Untitledtaco.jpg"];
let element = "";
for (let index = 0; index < gallery.length; index++) {
    element += `<li class="gallery-item">
                        <img src="${gallery[index]}" alt="Gallery1" onclick="viewimg('${gallery[index]}','gallery'+${index})" class="gallery-image" >
                    </li>`;
}

galleryListElement.innerHTML = element;
const telloverlay = document.getElementById("overlay");
const imgLookElement = document.getElementById("imgview");
function viewimg(img, name) {

    imgLookElement.innerHTML = ` <img src="${img}" class="imageorimg" > <span onclick="closework()" id="icons-clear" class="material-icons">
        clear        
            </span>`;

    telloverlay.style.display = "block";
    imgLookElement.style.display = "block";
}
function closework() {
    imgLookElement.style.display = "none";
    telloverlay.style.display = "none";

}