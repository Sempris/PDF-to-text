const inputFile = document.getElementById("inputFile");
const btnConvert = document.getElementById("btnConvert");
const resultText = document.getElementById("resultText");

btnConvert.addEventListener("click", () => {
  const formData = new FormData();

  formData.append("pdfFile", inputFile.files[0]);

  fetch("/extract-text", {
    method: "post",
    body: formData,
  })
    .then((response) => {
      return response.text();
    })
    .then((extractedText) => {
      resultText.value = extractedText.trim();
    });
});
