import React from 'react';

const NekoProfession = () => {
    return (
        <>
            <section className="profession-farmer">
                <div className="overflow-hidden">
                    <div className="d-flex justify-content-center mb-5">
                        <div className="section-title">
                            <div className="section-main-title">
                                <span className="title">NEKO PROFESSIONS</span>
                            </div>
                            <div className="section-sub-title">
                                <p>Choose your own path in Nekoverse by selecting a Neko Profession.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                        <div className="profession-farmer-slider" style={{ height: '0px' }}>
                            <img src="/images/nicko-profession/pro-farmer1.png" alt="" className="item" data-id={0} loading="lazy" style={{ opacity: '0.6', zIndex: 0, transform: 'translate(351.5px, 0px) scale(0.73, 0.73)' }} />
                            <img src="/images/nicko-profession/pro-farmer2.png" alt="" className="item" data-id={1} loading="lazy" style={{ opacity: 1, zIndex: 999, transform: 'translate(651.5px, 0px)' }} />
                            <img src="/images/nicko-profession/pro-farmer3.png" alt="" className="item" data-id={2} loading="lazy" style={{ opacity: '0.6', zIndex: 0, transform: 'translate(951.5px, 0px) scale(0.73, 0.73)' }} />
                            <img src="/images/nicko-profession/pro-farmer4.png" alt="" className="item" data-id={3} loading="lazy" style={{ opacity: '0.3', zIndex: 0, transform: 'translate(651.5px, 0px) scale(0.5, 0.5)' }} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex justify-content-between align-items-center profession-farmer-mobile-slider-controllers">
                                <div className="tabs d-flex">
                                    <div className="pointer tab-item me-3" style={{ opacity: '0.5', fontWeight: 'normal' }}>Farmer
                                    </div>
                                    <div className="pointer tab-item me-3" style={{ opacity: 1, fontWeight: 'bold' }}>Crafter</div>
                                    <div className="pointer tab-item me-3" style={{ opacity: '0.5', fontWeight: 'normal' }}>Breeder
                                    </div>
                                    <div className="pointer tab-item" style={{ opacity: '0.5', fontWeight: 'normal' }}>Necromancer
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profession-farmer-slider-description d-block py-4">
                            <p className="content">Engineer a wide range of items and gems that enhances Neko's attributes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NekoProfession;