const left_box = document.getElementById('left-box')
const right_box = document.getElementById('right-box')
const dropArea = document.getElementById('slide')

const button = document.getElementById("browse_btn");
const input = document.getElementById("input");
const dragText = document.getElementById("text");
let file;

start();
window.addEventListener('resize', start);

function start(){
    left_box.style.left = "0px"
    right_box.style.left = `${document.documentElement.clientWidth - 250}px`
    dropArea.style.left = "250px"
    //dropArea.style.height = `${scr_height - 190}px`
}

button.onclick = () => input.click();

input.onchange = (e) => {
  file = e.files[0];
  dropArea.classList.add("active");
  showImage();
};

//on drag over
dropArea.ondragover = (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
//  dragText.textContent = "Release to Upload File";
};

//on drag leave
dropArea.ondragleave = () => {
  dropArea.classList.remove("active");
//  dragText.textContent = "Drag & Drop to Upload File";
};

//on drop
dropArea.ondrop = (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  showImage();
};

showImage = () => {
  let fileType = file.type;
  let validFiletypes = ["image/jpeg", "image/jpg", "image/png"];

  if(validFiletypes.includes(fileType)){
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = ()=>{
        let fileURL = fileReader.result;
        let image = `<img src="${fileURL}" alt="image">`;
        dropArea.innerHTML = image;
        }
    }
  else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
//    dragText.textContent = "Drag & Drop to Upload File";
  }
}

//font-size: calc( (100vw - 30rem)/(80 - 30) * (1.5 - 1) + 1rem);