

let formRegistroJs= document.getElementById("formRegistro")

let usuarios;

formRegistroJs.addEventListener("submit", (e) =>{

    e.preventDefault();

    let inputs = e.target.children;

    let nombreCliente= inputs[1].value;

    let correoElectronico= inputs[3].value;

    let clave = inputs[5].value;

    let usuariosCargados={
        
        nombre: nombreCliente,

        email: correoElectronico,

        clave: clave

    }



    let usuariosStorage= localStorage.getItem("usuarios")

    if(usuariosStorage){

        usuarios = JSON.parse(usuariosStorage);

    }else if(nombreCliente === '' || correoElectronico === '' || clave === ''){

        
        let mensaje= document.createElement("p")

        mensaje.innerHTML= `
         <p>Datos incompletos</p>
        `;

        formRegistroJs.append(mensaje)

        
    }else{

        usuarios=[]

    }

    usuarios.push(usuariosCargados);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

})




