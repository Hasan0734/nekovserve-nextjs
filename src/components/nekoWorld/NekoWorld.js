import Image from "next/image";
import Planet from '../../assets/image/planet.webp'
const NekoWorld = () => {
    return (
        <>
            <section className="about-neko-world">

                <div className="container pt-5">
                    <div className="row mt-5">
                        <div className="col-12 col-md-6">
                            <div className="section-content">
                                <div className="main-line">
                                    <p>What <span className="hightline">lies</span></p>
                                    <p>beyond <span className="hightline">the world</span></p>
                                    <p>that we know?</p>
                                </div>
                                <div className="sub-line">
                                    <p>
                                        Nekoverse, the resting lands of all Nekos, governed by three
                                        mythical Gods, called the Ancient Triad.
                                    </p>
                                    <p>
                                        With a single act of destruction, the Ancient Triad has set a
                                        curse upon the Nekoverse - only those that prevail, shall
                                        remain their being.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="align-items-center d-flex justify-content-center planet">
                                <Image src={Planet} alt="" className="planet-img" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default NekoWorld;