import CardSpecialities from "../../components/card"

import bem_estar from "../../assets/bem-estar.svg"
import esporte from "../../assets/esporte.svg"
import heart from "../../assets/frame.svg"

export default function Benefits(){
    return(
        <section className="container">
            <div className='col-12 text-center p-5'>

                <div className='row'>
                    <h3>Nossos serviços</h3>
                    <p>Conheça os serviços disponibilizados pela HealthPlus:</p>
                    <div className='division-bar bg-primary'></div>
                </div>

                <div className='row mt-5'>
                    <div className='col-4'>
                        <CardSpecialities image={heart} title="Saúde" text="Melhore sua saúde com o HealthPlus!" />
                    </div>
                    <div className='col-4'>
                        <CardSpecialities image={esporte} title="Esporte" text="Adquira saúde por meio dos esportes com o HealthPlus!" />
                    </div>
                    <div className='col-4'>
                        <CardSpecialities image={bem_estar} title="Bem Estar" text="Além da saúde física, cuide da sua saúde mental com o HealthPlus!" />
                    </div>
                </div>
            </div>
        </section>
    )
}