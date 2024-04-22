import ilustration from "../../assets/ilustration.svg"

export default function Home(){
    return(
        <section className="container py-5">
            <div className="row p-6 d-flex justify-content-between align-items-center">
                <div className="col-6 d-flex justify-content-center flex-column align-items-start h-100">
                    <h1 className="text-primary">Mais saúde para você</h1>
                    <h5 className="mb-5 text-left mt-3">Aqui você encontra tudo sobre saúde, esporte e bem estar.</h5>
                    <button type="button" class="btn rounded btn-primary align">Saber mais</button>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <img src={ilustration} className="img-fluid" />
                </div>
            </div>
        </section>
    )
}