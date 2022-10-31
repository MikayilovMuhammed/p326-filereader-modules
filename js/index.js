import { imageUploader, tst } from "./imageUploader.js";
import tst2 from "./test.js";
const uploadIcon = document.querySelector(".icon i");
const inputFile = document.querySelector("input");

uploadIcon.addEventListener("click", function () {
  //   console.log(this.nextElementSibling);
  this.nextElementSibling.click();
});

inputFile.addEventListener("change", function (e) {
  const { files } = e.target;

  imageUploader(files);
});

tst();

tst2();
