
const NekoAttribute = () => {
    return (
        <>
            <section id="neko-attributes">
                <div className="container">
                    <div className="d-flex justify-content-center mb-5">
                        <div className="section-title">
                            <div className="section-main-title">
                                <span className="title">Neko Attributes</span>
                            </div>
                            <div className="section-sub-title">
                                <p>Each Neko will have unique stats, and can be equipped with equipments and skills.</p>
                            </div>
                        </div>
                    </div>
                    <div id="carouselAttributes" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators pt-5">
                            <button type="button" data-bs-target="#carouselAttributes" data-bs-slide-to={0} className="active" aria-current="true">
                            </button>
                            <button type="button" data-bs-target="#carouselAttributes" data-bs-slide-to={1} className>
                            </button>
                            <button type="button" data-bs-target="#carouselAttributes" data-bs-slide-to={2} className>
                            </button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item carousel-item-next carousel-item-start">
                                <img src="/images/niko-attribute/att1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/niko-attribute/att2.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item active carousel-item-start">
                                <img src="/images/niko-attribute/att3.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselAttributes" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselAttributes" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NekoAttribute;