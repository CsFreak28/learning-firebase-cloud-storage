import { storage } from "./firebase.config";
import { ref, uploadBytes, getBlob } from "@firebase/storage";
const button = document.querySelector(".submitFile");
let get;
const imagesRef = ref(storage, "images/foodies");
console.log(imagesRef.bucket);
button.addEventListener("click", () => {
  const reader = new FileReader();
  const inputFile = document.querySelector("input[type=file]").files.item(0);
  // const value = reader.readAsDataURL(inputFile);
  reader.onload = function() {
    console.log(this.result);
  };
  // console.log(storage);
  // console.log(inputFile);
  // uploadBytes(imagesRef, inputFile).then(() => {
  //   console.log("file uploaded successfully");
  // });
  getBlob(imagesRef).then((blobFile) => {
    console.log(blobFile);
    reader.readAsDataURL(blobFile);
  });
});
