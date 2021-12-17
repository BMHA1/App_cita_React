import './HomePage.scss'
import corazon from './image/corazon.png'
import perrito from './image/perrito-1.png'
import gato from './image/gato-1.png'
import curita1 from './image/curita.png'
import inyeccion2 from './image/inyeccion.png'
import huesos from './image/huesos.png'
import { Grid, Typography, Box, useMediaQuery } from '@mui/material'


const HomePage = () => {
    const isActive = useMediaQuery('(min-width:900px)');

    return (
        <>
            <div className="containerGeneral-Home">
                <div className="containerCentral-Home">
                    <div className="title-Home">
                        <Grid container justify='center'>
                            <Grid item sx={12} md={7}>
                                <Grid item md={12}>
                                    <Box sx={{ lineHeight: 'normal', m: 1, letterSpacing: 3, typography: 'subtitle2', fontSize: '2.0em' }}>Los Animales son... <br />nuestras mascotas y nuestra vida!</Box>
                                </Grid>
                                <Grid item md={12}>
                                    <Typography component="div">
                                        <Box sx={{ lineHeight: 'normal', m: 1, letterSpacing: 3 }}>
                                            Ayudamos a las familias a tener animales sanos para
                                            poder disfrutarlos muchos años  gracias a la medicina
                                            preventiva y a nuestros planes de salud.</Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item sx={12} md={2}  >
                                <Box  >
                                    {isActive ? <img
                                        src={'https://www.hogarmania.com/img/mascotas/mascotas-listados.jpg'}
                                        alt='{item.title}'
                                        loading="lazy"
                                        width={630}
                                        height={320}
                                    /> :
                                        <img
                                            src={'https://assets.entrepreneur.com/content/3x2/2000/1607626854-perritos-covid1.jpg?crop=16:9'}
                                            alt='{item.title}'
                                            loading="lazy"
                                            width={350}
                                            height={180}
                                        />
                                    }

                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                {/* //container de services */}
                <div className="containerServices-Home">
                    <div className="containerServices-Home-row">
                        <div className="cardServices-Home">
                            <img src={corazon} alt="logo" />
                            <h4>Planes de Salud</h4>
                            <p>Escoge uno de nuestros planes, basados en medicina preventiva, para que tu animal esté siempre protegido.</p>
                        </div>
                        <div className="cardServices-Home">
                            <img src={perrito} alt="logo" />
                            <h3>Diagnóstico por imágen</h3>
                            <p>Menos esperas que nunca.Contamos con las últimas tecnologías, lo que nos permite acelerar los diagnósticos.</p>
                        </div>
                    </div>
                    <div className="containerServices-Home-row">
                        <div className="cardServices-Home">
                            <img src={gato} alt="logo" />
                            <h3>Instalaciones</h3>
                            <p>Hemos diseñado nuestro espacio para ofrecer el máximo confort a nuestros pacientes, contando con zonas diferenciadas para perros y gatos. Minimizamos el estrés en nuestros pacientes felinos gracias a contar con sala de espera , consulta y hospitalización específica para ellos.</p>
                        </div>
                        <div className="cardServices-Home">
                            <img src={curita1} alt="logo" />
                            <h3>Profesionales</h3>
                            <p>Te atenderán profesionales altamente cualificadas. La salud de tu animal está en buenas manos.</p>
                        </div>
                    </div>
                    <div className="containerServices-Home-row">

                        <div className="cardServices-Home">
                            <img src={inyeccion2} alt="logo" />
                            <h3>Vacunación</h3>
                            <p>No solo es inmunizar, es realizar una exploración completa para asegurarnos de que tu animal esté perfectamente sano para su inmunización.¡Nosotros te lo recordamos! Actualizamos el historial y calendario de vacunación de tu animal, para que esté siempre protegido.</p>
                        </div>
                        <div className="cardServices-Home">
                            <img src={huesos} alt="logo" />
                            <h3>Nutrición</h3>
                            <p>Al igual que las personas, somos lo que comemos. Te asesoramos sobre la mejor composición nutricional para tu animal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default HomePage