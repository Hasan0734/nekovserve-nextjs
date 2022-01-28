import React from 'react';

const GamePlay = () => {
    return (
        <>
            <section className="gameplay">
                <div className="container">
                    <div className="d-flex justify-content-center mb-5">
                        <div className="section-title">
                            <div className="section-main-title">
                                <span className="title">game plays</span>
                            </div>
                        </div>
                    </div>
                    <div id="carouselGamePlays" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval={2000}>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="text-uppercase">Battling</h4>
                                    <p>Only the one that prevail shall remain!. Battle with AI/other players to claim your honor and unlock rare items and NFTs.</p>
                                </div>
                                <img src="/images/gameplays/battle-min.png" className="d-block w-100 rounded-3" alt="..." />
                            </div>
                            <div className="carousel-item " data-bs-interval={2000}>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="text-uppercase">Resource Harvesting</h4>
                                    <p>Explore the vast world of Nekoverse and extract the richness of the environment by harvesting resources.</p>
                                </div>
                                <img src="/images/gameplays/havest-min.png" className="d-block w-100 rounded-3" alt="..." />
                            </div>
                            <div className="carousel-item " data-bs-interval={2000}>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="text-uppercase">Item Crafting</h4>
                                    <p>Become a master craftsman in Nekoverse by crafting valuable items.</p>
                                </div>
                                <img src="/images/gameplays/craft-min.png" className="d-block w-100 rounded-3" alt="..." />
                            </div>
                        </div>
                        <div className="carousel-indicators pt-3  position-relative">
                            <button type="button" data-bs-target="#carouselGamePlays" data-bs-slide-to={0} className="active" aria-current="true">
                                <img src="/images/gameplays/battle-min.png" className="d-block w-100 rounded-3" alt="..." />
                            </button>
                            <button type="button" data-bs-target="#carouselGamePlays" data-bs-slide-to={1} aria-current="true">
                                <img src="/images/gameplays/havest-min.png" className="d-block w-100 rounded-3" alt="..." />
                            </button>
                            <button type="button" data-bs-target="#carouselGamePlays" data-bs-slide-to={2} aria-current="true">
                                <img src="/images/gameplays/craft-min.png" className="d-block w-100 rounded-3" alt="..." />
                            </button>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselGamePlays" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselGamePlays" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GamePlay;