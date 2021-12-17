# Gestión de citas 

Ultimo proyecto del bootcamp, nos solicitan desarrollar una App para gestionar las citas de una clinica veterinaria, el usuario posee muchas mascotas y el mismo puede elegir un doctor determinado para elegir la cita. 

   Además la app cuenta limitaciones segun el role de quien utiliza la app, el administrador por ejemplo tiene acceso a administrar tanto a los usuarios, citas y doctores de la aplicación. 


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

* Material UI: Es una libreria que contiene componetes de react diseñados, nos beneficia a agilizar el diseño. 
para la instalación adjunto un link que contendrá los pasos para integrar Mui en tus proyectos futuro 
[ Instrucciones de descarga:](https://mui.com/getting-started/installation/) 


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
      

