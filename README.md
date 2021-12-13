# Gestión de citas 

## Requerimientos para poder utilizar el proyecto en tu pc 🚀

* Instalar Node.js (es un entorno en tiempo de ejecución multiplataforma) [ Enlace de descarga](https://nodejs.org/es/download/) 

* Clona el repositorio  
```git clone git@github.com:BMHA1/App_cita_React.git```
* Instala Node-Modules para descargar las dependecias necesarias  
```npm install```
* Para iniciar el servidor de desarrollo de React  
```npm start ```


## Tecnologías Utilizadas 🔧

* react: es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.  
```create-react-app nombre de "Nombre del proyecto```

* react-router-dom: Permite implementar enrutamiento dinámico en una aplicación web, para instalar escriba el código  
```npm install react-router-dom```
* redux: Es un librería de Javascript que nos permite generar un estado general en nuestro proyecto, el siguiente comando te permite descargar.  

```npm install redux```

* react-redux: Existe 3 formas de usar redux, ya que es una libreria independiente de react e instalando react-redux, podeis usar la metodología no agnostica de redux.  

```npm install react-redux```

* SASS: Es un lenguaje de hoja de estilos en cascada (Hay que tener node.js instalado)  
```npm install node-sass```




## Estructura del proyecto ⚙️

         ├───SRC
            ├───Container
            |      ├──AdminPage
            |      ├──HomePage
            |      ├──Login
            |      ├──ProfileAdmin
            |      ├──ProfileDoctor
            |      ├──ProfilePet
            |      ├──ProfileUser
            |      ├──Register
            |      └──HomePage
            |      
            |      
            ├──Components
            |         ├──Boton
            |         ├──CardAppo
            |         ├──CardPet
            |         ├──CardUser
            |         ├──Error
            |         ├──Header
            |         ├──ListAllPets
            |         ├──ListAppointments
            |         ├──ListPet
            |         ├──ListUser
            |         ├──Loading
            |         └──Header
            ├───Services
            |        ├──Redux
            |        |    ├──Action
            |        |    |    ├──ActionAdmin
            |        |    |    ├──ActionAdmin
            |        |    |    ├──ActionAppoinments
            |        |    |    ├──ActionDoctor
            |        |    |    ├──ActionPets
            |        |    |    └──ActionUser 
            |        |    |
            |        |    └──Reducers
            |        |    |      ├──AdminReducers
            |        |    |      ├──AppoinmentsReducers
            |        |    |      ├──DoctorReducers
            |        |    |      ├──DoctorReducers
            |        |    |      ├──PetsReducers
            |        |    |      └──UserReducers
            |        |    └── store    
            |        |
            |        └──ApiConsumer
            |                 ├──ApiAdmin
            |                 ├──ApiAppoinments
            |                 ├──ApiDoctor
            |                 ├──ApiPets
            |                 └──ApiUser
            ├───App
            ├───Index
            └───Package.json
            
            
 * Index: Este fichero es el Container principal, que es padre de App.js
 * App.js: En App.js se encuentra todas las Rutas principales de la aplicación. 
 * Redux: En la siguiente carpeta, tenemos 2 carpetas Action y reducers además un fichero store.js
    * store.js : En este fichero se encuentra el estado general de redux.
    * Reducers: En esta carpeta tenemos los distintos reductores, siguiendo la misma metodología he utilizado uno para cada endpoints.
    * Apiconsumer: He separado los Apiconsumer para cada uno de los endpoints, en cada uno de los ficheros tendremos los metodos que llaman a la api.
    * Action: En las action tengo definidos los objetos con el payload y type 
       
    

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
<!-- ç -->
