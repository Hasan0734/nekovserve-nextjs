

const MediaGallery = () => {
    return (
        <>
            <section id="media_gallery">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="section-title">
              <div className="section-main-title">
                <span className="title">media gallery</span>
              </div>
            </div>
          </div>
          <div id="carouselGallery" className="carousel slide carousel-fade my-5" style={{paddingBottom: '12%'}} data-bs-ride="carousel">
            <div className="carousel-indicators pt-5 m-0">
              <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to={0} className="active" aria-current="true">
                <img src="/images/gallery/1.png" className="d-block w-100 rounded-3" alt="..." />
              </button>
              <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to={1} aria-current="true">
                <img src="/images/gallery/2.png" className="d-block w-100 rounded-3" alt="..." />
              </button>
              <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to={2} aria-current="true">
                <img src="/images/gallery/3.png" className="d-block w-100 rounded-3" alt="..." />
              </button>
              <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to={3} aria-current="true">
                <img src="/images/gallery/4.png" className="d-block w-100 rounded-3" alt="..." />
              </button>
              <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to={4} aria-current="true">
                <img src="/images/gallery/5.png" className="d-block w-100 rounded-3" alt="..." />
              </button>
              <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to={5} aria-current="true">
                <img src="/images/gallery/6.png" className="d-block w-100 rounded-3" alt="..." />
              </button>
              <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to={6} aria-current="true">
                <img src="/images/gallery/7.png" className="d-block w-100 rounded-3" alt="..." />
              </button>
              <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to={7} aria-current="true">
                <img src="/images/gallery/8.png" className="d-block w-100 rounded-3" alt="..." />
              </button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={2000}>
                <img src="/images/gallery/1.png" className="d-block w-100 rounded-3" alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src="/images/gallery/2.png" className="d-block w-100 rounded-3" alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src="/images/gallery/3.png" className="d-block w-100 rounded-3" alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src="/images/gallery/4.png" className="d-block w-100 rounded-3" alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src="/images/gallery/5.png" className="d-block w-100 rounded-3" alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src="/images/gallery/6.png" className="d-block w-100 rounded-3" alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src="/images/gallery/7.png" className="d-block w-100 rounded-3" alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src="/images/gallery/8.png" className="d-block w-100 rounded-3" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
        </>
    );
};

export default MediaGallery;