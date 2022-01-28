


const NekoElement = () => {
    return (
        <>
            <section id="neko-elements">
                <div className="container">
                    <div className="d-flex justify-content-center mb-5">
                        <div className="section-title">
                            <div className="section-main-title">
                                <span className="title">Neko Elements</span>
                            </div>
                            <div className="section-sub-title">
                                <p>The Ancient Triad are the creators of all Neko elements.</p>
                                <p>
                                    To bring balance to Nekoverse, they have divided all elements
                                    into 3 classes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row text-center text-white">
                            <div className="col-12 col-md-4 mb-5">
                                <img src="/images/neko-element/frame1.png" style={{ maxWidth: '60%' }} alt="" loading="lazy" />
                                <h3 className="mb-3 mt-5"><b>ORIGIN QUAD</b></h3>
                                <div>
                                    ORIGIN QUAD
                                    Being the prime elements of all universes, Origin Quad are the defenders of nature.
                                    They are comprised of 4 elements: Fire-Nature-Earth-Water.
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-5">
                                <div className="mt-0 pt-0 mt-md-5 pt-md-5">
                                    <img src="/images/neko-element/frame2.png" style={{ maxWidth: '60%' }} alt="" loading="lazy" />
                                    <h3 className="mb-3 mt-5"><b>PANCHA TRIAD</b></h3>
                                    <div>
                                        Closely connected to the wild, the Pancha triad are the chosen ones to have mythical
                                        powers, many of which is still unknown to Nekoverse.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-5">
                                <img src="/images/neko-element/frame3.png" style={{ maxWidth: '60%' }} alt="" loading="lazy" />
                                <h3 className="mb-3 mt-5"><b>VOID DYAD</b></h3>
                                <div>
                                    Regarded as the root of all elements. Should the Void Dyad be summoned, all of
                                    Nekoverse balance and peace will be consumed.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NekoElement;