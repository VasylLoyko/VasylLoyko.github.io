

function cambiarFondo(){

    var fondo = document.getElementById("cuerpo1");

    if (fondo.classList.contains("cuerpo")){

        fondo.classList.remove("cuerpo");
        fondo.className += "cuerpo2";
    }
    else if(fondo.classList.contains("cuerpo2")){

        fondo.classList.remove("cuerpo2");
        fondo.className += "cuerpo";
    }
}


function cambiarBoton(){
    
    var circulo = document.getElementById("circ");
    var spain = document.getElementById("spain1");
    var britain = document.getElementById("britain1");

    if(spain.classList.contains("spain")){

        spain.classList.remove("spain");
        spain.className += "spain2";

        britain.classList.remove("english");
        britain.className += "english2";

        circulo.classList.remove("circulo");
        circulo.className += "circulo2";
    }

    else if(spain.classList.contains("spain2")){

        spain.classList.remove("spain2");
        spain.className += "spain";

        britain.classList.remove("english2");
        britain.className += "english";

        circulo.classList.remove("circulo2");
        circulo.className += "circulo";
    }
}


function cambiarTextos(){

    var texto = document.getElementsByTagName("h4");

    if (texto[0].classList.contains("cuatro0") ){

        texto[0].classList.remove("cuatro0");
        texto[1].classList.remove("cuatro0");
        
        texto[0].className +="cuatro";
        texto[1].className +="cuatro";
    }
    else if(texto[0].classList.contains("cuatro")){

        texto[0].classList.remove("cuatro");
        texto[1].classList.remove("cuatro");

        texto[0].className +="cuatro0";
        texto[1].className +="cuatro0";
    }
}


function toEnglish(){

    var estudiante = document.getElementsByTagName("h2");
    var desarrollador = document.getElementsByTagName("h3");
    var perfil = document.getElementsByTagName("h4");
    var nombre = document.getElementsByTagName("p");
    
    estudiante[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  </svg> Student`;

    desarrollador[0].innerHTML = "Web Development";

    perfil[0].innerHTML = "Profile";
    perfil[1].innerHTML = "Skills";

    nombre[0].innerHTML = "Name: Vasyl";
    nombre[1].innerHTML = "Last name: Loyko";
    nombre[8].innerHTML = "English";
    nombre[9].innerHTML = "Second year as student of the Web Development cycle at the IES Luis Vives center.";
    nombre[10].innerHTML = "I do practices in Client Environment with HTML5, CSS3 and JavaScript. I also use Bootstrap for adaptive design.";
    nombre[11].innerHTML = "For Databases I use Oracle/MySql together with Java and beggining nowdays with PHP, working with the model-view-controller.";
    nombre[12].innerHTML = "I try to be creative and innovative when creating projects that satisfy the user experience. I am organized and methodological because I like to be efficient and I attach importance to the teamwork as well as self-criticism.";
    nombre[13].innerHTML = "In addition, being self-taught is key in our field due to the continuous change and evolution of technologies, so I also attach importance to dealing with this type of situations.";
}

function toSpanish(){

    var estudiante = document.getElementsByTagName("h2");
    var desarrollador = document.getElementsByTagName("h3");
    var perfil = document.getElementsByTagName("h4");
    var nombre = document.getElementsByTagName("p");
    
    estudiante[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  </svg>Estudiante`;

    desarrollador[0].innerHTML = "Desarrollo de Aplicaciones Web";

    perfil[0].innerHTML = "Perfil";
    perfil[1].innerHTML = "Habilidades";

    nombre[0].innerHTML = "Nombre: Vasyl";
    nombre[1].innerHTML = "Apellidos: Loyko";
    nombre[8].innerHTML = "Inglés";
    nombre[9].innerHTML = "Segundo año como estudiante del ciclo de Desarrollo de Aplicaciones Web en el centro IES Luis Vives.";
    nombre[10].innerHTML = "Realizo prácticas en Entorno Cliente con HTML5, CSS3 y JavaScript, usando Bootstrap para diseño adaptable.";
    nombre[11].innerHTML = "En Bases de Datos utilizo Oracle/MySql junto con Java y empezando con PHP, trabajando con el modelo-vista-controlador.";
    nombre[12].innerHTML = "Intento ser creativo e innovador a la hora de crear proyectos que satisfagan la experiencia de usuario. Soy organizado y metodológico porque me gusta ser eficiente y le doy importancia al trabajo en equipo así como a la autocrítica.";
    nombre[13].innerHTML = "Además, ser autodidacta es clave en nuestro ámbito debido al continuo cambio y evolución de las tecnologías, por lo que también le doy importancia a desenvolverme en ese tipo de situaciones.";
}

function cambiarIdioma(){

    var circulo = document.getElementById("circ");

   cambiarBoton();
   cambiarFondo();
   cambiarTextos();

   if(circulo.classList.contains("circulo2")){

    toEnglish();
   }
   else{

    toSpanish();
   }
}