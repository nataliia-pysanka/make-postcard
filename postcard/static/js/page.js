//const left_box = document.getElementById('left-box')
//const right_box = document.getElementById('right-box')
const dropArea = document.getElementById('slide')
const header = document.getElementById('page-header')

const button = document.getElementById("browse_btn");
const input = document.getElementById("input");
const text = document.getElementById("text");
const dragText = document.getElementById("drop_text");

const main = document.getElementById("main");
let file;
let dropAreaWidth;
let dropAreaHeight;

start();
window.addEventListener('resize', start);

function start(){
    dropArea.style.height = `${document.documentElement.clientHeight - header.getBoundingClientRect().height -40}px`
    dropAreaHeight = dropArea.getBoundingClientRect().height
    dropArea.style.width = `${(dropAreaHeight * 148)/ 106}px`
    dropAreaWidth = dropArea.getBoundingClientRect().width
}

button.onclick = () => input.click();

input.onchange = (e) => {
  file = e.target.files[0];
  dropArea.classList.add("active");
  showImage();
};

dropArea.ondragover = (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.style.display = "none";
};


dropArea.ondragleave = () => {
  dropArea.classList.remove("active");
  dragText.style.display = "block";
};

dropArea.ondrop = (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  showImage();
};

function calcSize() {

}

showImage = () => {
  let fileType = file.type;
  let validFiletypes = ["image/jpeg", "image/jpg", "image/png"];

  if(validFiletypes.includes(fileType)){
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = ()=>{
        let fileURL = fileReader.result;
        dropArea.style.backgroundImage = `url(${fileURL})`;
//        let image = `<img src="${fileURL}" alt="image" width="${dropAreaWidth}" height="${dropAreaHeight}">`;
//        dropArea.innerHTML = image;
        }
    }
  else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
  }
}

//font-size: calc( (100vw - 30rem)/(80 - 30) * (1.5 - 1) + 1rem);