const imageContainerE1 = document.querySelector(".image-container");
const btnE1 = document.querySelector(".btn");


btnE1.addEventListener("click",()=>{
  let imageNum = 10;  
  addNewImage(imageNum);
});

function addNewImage(imageNum){

    for (let i = 0; i < imageNum; i++) {
        const newImageE1 = document.createElement("img");
        newImageE1.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imageContainerE1.appendChild(newImageE1);
            
    }
    const newImageE1 = document.createElement("img");
    newImageE1.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imageContainerE1.appendChild(newImageE1);
}