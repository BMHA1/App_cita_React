import './HomePage.scss'
import corazon from './image/corazon.png'

const HomePage = () => {

    return (
        <>
            <div className="containercGeneral-Home">
                <div className="containerCentral-Home">
                    <div className="title-Home">
                        <h1>Los Animales son Nuestras Mascotas y Nuestra Vida </h1><br />
                        <p className="text-Home">  Ayudamos a las familias a tener animales sanos para
                            poder disfrutarlos muchos años gracias a la medicina
                            preventiva y a nuestros planes de salud</p>
                    </div>
                    <div className="img1"></div>
                </div>
                <div className="containerServices-Home">
                    <div>
                        <div className="cardServices-Home">
                            <img src={corazon} alt="logo" />
                            <h3>Planes de Salud</h3>
                        </div>

                        <h3>Diagnóstico por imágen</h3>
                        <h3>Instalaciones</h3>
                    </div>
                    <div>
                        <h3>Profesionales</h3>
                        <h3>Vacunación</h3>
                        <h3>Nutrición</h3>
                    </div>

                </div>
            </div>
        </>
    )


}
export default HomePage