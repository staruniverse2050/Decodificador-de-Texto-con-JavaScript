//Declarar variables que utilizaremos mas adelante//
const textarea = document.getElementById('textarea');
const btnEncrypt = document.getElementById('encrypt');
const btnDecrypt = document.getElementById('decrypt');

//Función que cancela los acentos//
function undoaccents(string){
	const accents = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return string.split('').map( character => accents[character] || character).join('').toString();	
}
//Función que reemplaza lo que se encuentre en el div actual//
let textresponse = document.getElementById("box").innerHTML;

//Funcion flecha junto con el escuchador que se encarga de encriptar el mensaje y a la vez reemplazar con elementos nuevos//
  btnEncrypt.addEventListener('click', (event) => {
    document.getElementById("box").innerHTML = `
    <textarea id="comment" disabled></textarea>
    <button id="copy" onclick="copy()">Copiar</button>`
    const commentResult = document.getElementById('comment');  

    event.preventDefault();
    commentResult.value = '';
    let characters = textarea.value;
    
    if(characters!=null){
      let letters = characters.split(' ');
      let newletters = [];
      
      for (let letter of letters) {
        letter = letter.replaceAll('e','enter');
        letter = letter.replaceAll('i','imes');
        letter = letter.replaceAll('a','ai');
        letter = letter.replaceAll('o','ober');
        letter = letter.replaceAll('u','ufat');      
        
        newletters.push(letter);    
      }
  
      const result = newletters.join(' ');
      
      commentResult.value = result;
    } 
  });
  
//Funcion flecha junto con el escuchador que se encarga de desencriptar el mensaje//
  btnDecrypt.addEventListener('click', (event) => {
    document.getElementById("box").innerHTML = `
    <textarea id="comment" disabled></textarea>
    <button id="copy" onclick="copy()">Copiar</button>`
    const commentResult = document.getElementById('comment');      
    event.preventDefault();  
    commentResult.value = '';
    let characters = textarea.value;
  
    if(characters!=null){
      let letters = characters.split(" ");
      let newletters = [];    
  
      for (let letter of letters) {
        letter  = letter.replaceAll('enter','e');
        letter  = letter.replaceAll('imes','i');
        letter  = letter.replaceAll('ai','a');
        letter  = letter.replaceAll('ober','o');
        letter  = letter.replaceAll('ufat','u');
        newletters.push(letter);    
      }
  
      const result = newletters.join(' ');
      
      commentResult.value = result;

    } 
    
    });

    //Función de copiar el texto//
    function copy() {
        //Copiar texto seleccionado//
        let content = document.getElementById('comment');
        content.select();
        document.execCommand('copy');
        
        //Copiar texto que se encuentre en el identificador (comment)//
        const message = content.value;
        navigator.clipboard.writeText(message);
    }


