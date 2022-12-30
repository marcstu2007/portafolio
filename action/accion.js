
function mensaje(){
    event.preventDefault();
    // const ejemplo = document.createElement("textarea");
    // ejemplo.textContent="Hola a todos";
    // document.body.append(ejemplo);
    const text = document.getElementById("text");
    
    if (text.value.length == 0){
        alert("Por favor ingresa un mensaje en minusculas o sin acentos");
    }else{

        if (error()==true){
            alert("Hubo un error, no puedes usar tildes y mayusculas");
            return
        }
  
       if (document.getElementById("muneco")){
            const muneco = document.getElementById("muneco");
            muneco.remove();
        
            const noEncontrado = document.getElementById("noEncontrado");
            noEncontrado.remove();
        
            const msgEncriptar = document.getElementById("msgEncriptar");
            msgEncriptar.remove();
        
            const textSalida = document.getElementById("textSalida");
            textSalida.style.display="block";
        
            const btnCopiar = document.getElementById("btnCopiar");
            btnCopiar.style.display="block";
        }
        let mensaje =""
        for(var i=0;i<text.value.length;i++ ){
            let textoC = text.value.substr(i,1);
            
            switch ( textoC){
                case "a":
                    textoC ="ai";
                    break;
                case "e":
                    textoC ="enter";
                    break;
                case "i":
                    textoC ="imes";
                    break;
                case "o":
                    textoC ="ober";
                    break;
                case "u":
                    textoC ="ufat";
                    break;
            }
            mensaje+=textoC;
        }
        textSalida.value=mensaje;
    }
}

function desencriptar(){
    event.preventDefault();
    const text = document.getElementById("text");
    
    if (error()==true){
        alert("Hubo un error, no puedes usar tildes y mayusculas");
        return
    }

    if (text.value.length == 0){
        alert("Por favor ingresa un mensaje en minusculas o sin acentos");
    }else{
  
       if (document.getElementById("muneco")){
            const muneco = document.getElementById("muneco");
            muneco.remove();
        
            const noEncontrado = document.getElementById("noEncontrado");
            noEncontrado.remove();
        
            const msgEncriptar = document.getElementById("msgEncriptar");
            msgEncriptar.remove();
        
            const textSalida = document.getElementById("textSalida");
            textSalida.style.display="block";
        
            const btnCopiar = document.getElementById("btnCopiar");
            btnCopiar.style.display="block";
        }
        let mensaje =""
        for(var i=0;i<text.value.length;i++ ){
            let textoC = text.value.substr(i,1);
            
            switch ( textoC){
                case "a":
                    if (text.value.substr(i,2)=="ai")
                    {
                        i++;    
                    }
                    break;
                case "e":
                if (text.value.substr(i,5)=="enter")
                {
                    i=i+4;
                }
                break;
                case "i":
                    if (text.value.substr(i,4)=="imes")
                    {
                    i=i+3;
                }
                    break;
                case "o":
                    if (text.value.substr(i,4)=="ober")
                    {
                        i=i+3;
                    }
                    break;
                case "u":
                    if (text.value.substr(i,4)=="ufat")
                    {
                        i=i+3;
                    }
                    break;
            }
            mensaje+=textoC;
        }
        textSalida.value=mensaje;
    }
}
function copiar(){
    const textSalida = document.getElementById("textSalida").value;
    navigator.clipboard.writeText( textSalida );
}

function error(){
    const acentos = ["Á","É","Í","Ó","Ú","Ü","Ñ","á","é","í","ó","ú","ü","ñ"];
    const text = document.getElementById("text");
    for(var i=0;i<text.value.length;i++){
        for(var j=0; j<acentos.length;j++){
            if (text.value.substr(i,1)==acentos[j]){
                console.log(text.value.substr(i,1))
                return true;
            }
        }
        if (esLetra(text.value.substr(i,1))){
            if(text.value.substr(i,1)==text.value.substr(i,1).toUpperCase()){
                if(text.value.substr(i,1)!=' '){
                    console.log("--'"+text.value.substr(i,1)+"'")
                return true;
                }
                
            }
        }
    }
}

const esLetra = (caracter) => {
	let ascii = caracter.toUpperCase().charCodeAt(0);
	return ascii > 64 && ascii < 91;
};