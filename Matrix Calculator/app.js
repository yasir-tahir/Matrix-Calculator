const boxes1 = document.querySelector("#input-boxes1");
const boxes2 = document.querySelector("#input-boxes2");
const form = document.querySelector("#input");
const sum = document.querySelector("#sumbtn");
const resultDiv = document.querySelector("#result");

let matrixLength;

form.addEventListener("submit" ,(event) => { 
    event.preventDefault();

     matrixLength = Number(event.target.children[0].value);
   
    boxes1.innerHTML = '';
    boxes2.innerHTML = '';


   for(let i = 0; i < matrixLength; i++){
    for(let j = 0; j < matrixLength; j++){

        
    boxes1.innerHTML += `<input type="number" id="matrix1-${i}${j}" style="width: 60px; height:55px; border-radius:100%; margin:5px;  font-size:18px; font-width:bolder; padding:8px 8px 10px; " value="0">`;
    boxes2.innerHTML += `<input type="number" id="matrix2-${i}${j}" style="width: 60px; height:55px; border-radius:100%; margin:5px;  font-size:18px; font-width:bolder; padding:8px 8px 10px;" value="0">`;
    
    }

    boxes1.innerHTML += '<br>';
    boxes2.innerHTML += '<br>';
   }
  });

  sumbtn.addEventListener("click", () => {
    console.log("click hogaya");
  
    resultDiv.innerHTML = "";


for(let i = 0; i < matrixLength; i++){
    for(let j = 0; j < matrixLength; j++){
        const valueOfMatrix1 = document.querySelector(`#matrix1-${i}${j}`).value;
        const valueOfMatrix2 = document.querySelector(`#matrix2-${i}${j}`).value;
        
        const result = Number(valueOfMatrix1) + Number(valueOfMatrix2);
       
        resultDiv.innerHTML += `<input type="number"  style="width: 60px; height:55px; border-radius:100%; margin:5px;  font-size:18px; font-width:bolder; padding:8px 8px 10px;" value=${result}>`;
    
       
        console.log(result);
        
       
    }

    resultDiv.innerHTML += '<br>';
}
});
