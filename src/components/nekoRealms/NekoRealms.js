

const NekoRealms = () => {
    return (
        <>
            <section className="realms">
                <div className="container">
                    <div className="d-flex justify-content-center mb-5">
                        <div className="section-title">
                            <div className="section-main-title">
                                <span className="title">nekoverse realms</span>
                            </div>
                        </div>
                    </div>
                    <div id="carouselRealms" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item" data-bs-interval={2000}>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="text-uppercase">REMEDY WOODS</h4>
                                    <p>A vibrant wild west, Remedy Woods is a restoration motherland within Nekoverse. This
                                        magnificent
                                        forest is the birthplace of massive ancient Anima Trees, the source of all Anima
                                        Spirit Gems.</p>
                                </div>
                                <img src="/images/neko-verse/Nature-min.jpg" className="d-block w-100 rounded-3" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval={2000}>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="text-uppercase">Neverest Peninsula</h4>
                                    <p>The underwater region of Nekoverse, Neverest Peninsula is home to most Elite practice
                                        of Magic.</p>
                                </div>
                                <img src="/images/neko-verse/Watter-min.jpg" className="d-block w-100 rounded-3" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval={2000}>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="text-uppercase">INFERNO HIGHLANDS</h4>
                                    <p>Drawn from fire and lava, rage never escapes from this territory. Far beyond Inferno
                                        Highland lies Firelord Spire, the hidden place to most legendary weapons of
                                        Nekoverse</p>
                                </div>
                                <img src="/images/neko-verse/fire-min.jpg" className="d-block w-100 rounded-3" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval={2000}>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="text-uppercase">Foothill of Honor</h4>
                                    <p>To be cast into Foothill of Honor is the prestige of all Nekos. Beyond the realm of
                                        looming valleys, this land has trained the most relentless Neko there has ever been.
                                    </p>
                                </div>
                                <img src="/images/neko-verse/Earth-min.jpg" className="d-block w-100 rounded-3" alt="..." />
                            </div>
                            <div className="carousel-item active" data-bs-interval={2000}>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="text-uppercase">City of Greed</h4>
                                    <p>Nekoverse economic paradigm are all discovered within Cities of Greed. Here, in the
                                        birthplace of most fearful Neko guilds, those that join allies with one another will
                                        form ever-standing empires.</p>
                                </div>
                                <img src="/images/neko-verse/City-min.jpg" className="d-block w-100 rounded-3" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval={2000}>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="text-uppercase">Chaos Land</h4>
                                    <p>Final Destinations of the most honorable Nekos.
                                        Chaos Land is the domain to the most elite warriors.</p>
                                </div>
                                <img src="/images/neko-verse/Chaos land-min.jpg" className="d-block w-100 rounded-3" alt="..." />
                            </div>
                        </div>
                        <div className="carousel-indicators pt-3 position-relative mx-0">
                            <button type="button" data-bs-target="#carouselRealms" data-bs-slide-to={0} className>
                                <img src="/images/neko-verse/Nature-min.jpg" className="d-block w-100 rounded-3" alt="..." />
                            </button>
                            <button type="button" data-bs-target="#carouselRealms" data-bs-slide-to={1} className>
                                <img src="/images/neko-verse/Watter-min.jpg" className="d-block w-100 rounded-3" alt="..." />
                            </button>
                            <button type="button" data-bs-target="#carouselRealms" data-bs-slide-to={2} className>
                                <img src="/images/neko-verse/fire-min.jpg" className="d-block w-100 rounded-3" alt="..." />
                            </button>
                            <button type="button" data-bs-target="#carouselRealms" data-bs-slide-to={3} className>
                                <img src="/images/neko-verse/Earth-min.jpg" className="d-block w-100 rounded-3" alt="..." />
                            </button>
                            <button type="button" data-bs-target="#carouselRealms" data-bs-slide-to={4} className="active" aria-current="true">
                                <img src="/images/neko-verse/City-min.JPG" className="d-block w-100 rounded-3" alt="..." />
                            </button>
                            <button type="button" data-bs-target="#carouselRealms" data-bs-slide-to={5} className>
                                <img src="/images/neko-verse/Chaos land-min.JPG" className="d-block w-100 rounded-3" alt="..." />
                            </button>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselRealms" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselRealms" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NekoRealms;