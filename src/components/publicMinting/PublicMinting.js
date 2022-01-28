

const PublicMinting = () => {
    return (
        <>
            <section id="neko-ogirin-quad">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="section-title">
              <div className="section-main-title">
                <span className="title">origin quad public minting</span>
              </div>
            </div>
          </div>
          <h3 className="text-white py-4 text-center countdown">
          </h3>
          <div id="carouselOriginQuad" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/public-maintain/fff-min.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/public-maintain/nnn-min.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/public-maintain/www-min.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/public-maintain/eee-min.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="carousel-indicators pt-3 position-relative">
              <button type="button" data-bs-target="#carouselOriginQuad" data-bs-slide-to={0} className="active" aria-current="true">
                <img src="/images/public-maintain/fire_group03-min.png" className="d-block w-100" alt="..." />
              </button>
              <button type="button" data-bs-target="#carouselOriginQuad" data-bs-slide-to={1}>
                <img src="/images/public-maintain/plant_group07-min.png" className="d-block w-100" alt="..." />
              </button>
              <button type="button" data-bs-target="#carouselOriginQuad" data-bs-slide-to={2}>
                <img src="/images/public-maintain/water_group-min.png" className="d-block w-100" alt="..." />
              </button>
              <button type="button" data-bs-target="#carouselOriginQuad" data-bs-slide-to={3}>
                <img src="/images/public-maintain/earth_group01-min.png" className="d-block w-100" alt="..." />
              </button>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselOriginQuad" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselOriginQuad" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
        </>
    );
};

export default PublicMinting;