// promesas//

var saludar = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        let saludo = "hola muy buenas a todos";

        if (saludo){
            resolve(saludo);
        }else{reject('no hay saludos disponible');}
        }, 2000);
     

    
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(error =>{
    alert(error);
});