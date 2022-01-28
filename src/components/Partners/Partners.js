

const Partners = () => {
    return (
        <>
            <section id="partners">
                <div className="container my-5 pb-5">
                    <div className="d-flex justify-content-center mb-5">
                        <div className="section-title">
                            <div className="section-main-title">
                                <span className="title">partners</span>
                            </div>
                        </div>
                    </div>
                    <div className="align-items-center d-flex gx-0 gx-md-5 gy-5 row">
                        <div className="col-6 col-md-3 offset-md-0">
                            <a href="https://solanart.io/collections/nekoverse" className="w-100 px-3 px-md-0" target="_blank">
                                <img className="w-100" src="/images/partner/solanart.png" alt="/resources/home/images/nekos/partners/solanart.png" />
                            </a>
                        </div>
                        <div className="col-6 col-md-3 offset-md-0">
                            <a href="https://www.magiceden.io/marketplace/nekoverse" className="w-100 px-3 px-md-0" target="_blank">
                                <img className="w-100" src="/images/partner/me.svg" />
                            </a>
                        </div>
                        <div className="col-6 col-md-3 offset-md-0">
                            <a href="https://ftx.com/vi/nfts/collection/Nekoverse/25/1" className="w-100 px-3 px-md-0" target="_blank">
                                <img className="w-100" src="/images/partner/ftx.svg" alt="/image/partner/ftx.svg" />
                            </a>
                        </div>
                        <div className="col-6 col-md-3 offset-md-0">
                            <a href="https://solsea.io/collection/61a7b0d8e3df38d9cb88c9e9" className="w-100 px-3 px-md-0" target="_blank">
                                <img className="w-100" src="/images/partner/solsea.svg" alt="/image/partner/solsea.svg" />
                            </a>
                        </div>
                    </div>
                    <div className="align-items-center d-flex justify-content-center mt-5 flex-column text-white">
                        <h6 className="mb-3">Powered by</h6>
                        <div className="col-8 col-md-3 offset-0 offset-md-0">
                            <img className="w-100" src="/images/partner/solana.svg" alt="solana" />
                        </div>
                        <h6 className="mb-3 mt-5">Block Explorer</h6>
                        <div className="col-8 col-md-3 offset-0 offset-md-0">
                            <a href="https://solscan.io/collection/3b2ccd352b8afc78df46c80141e3682c05c44a86da99b2e8325faeeb5956bd45#trades" className="w-100 px-3 px-md-0" target="_blank">
                                <img className="w-100" src="/images/partner/solscan.svg" alt="solscan" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partners;