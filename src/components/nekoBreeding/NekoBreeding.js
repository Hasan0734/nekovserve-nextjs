
import { useState, useEffect } from 'react';

const NekoBreeding = () => {
    const [image, setImage] = useState(1)
    const [count, setCount] = useState(0)

    let  index = 1
    useEffect(() => {

       
        setInterval(() => {
            if (index === 7) {
               index = 1
            }
            setImage(index)
            index++
    
        }, 500);
    },index);


    return (
        <>
            <section className="neko-mutation">
                <div className="container">
                    <div className="row  px-3">
                        <div className="col-12 text-center text-white my-5">
                            <div className="d-flex justify-content-center mb-5">
                                <div className="section-title">
                                    <div className="section-main-title">
                                        <span className="title">NEKO BREEDING</span>
                                    </div>
                                    <div className="section-sub-title">
                                        <p>Merging Neko with different elements will result in all-new Neko breed.Invaded by species unknown to the Nekoverse, these colonists are armed with powerful psionic technologies.</p>
                                        Having dispatched their most elite troops to establish their territories on Nekoverse, their Cryo Chamber Lab, storing fertilized eggs and frozen embryos, is a domain of endless mutant forms to all Nekos.<p />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-relative w-100" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                            <img src="https://nekoverse.net/resources/home/images/incubator.webp" className="w-100" />
                            <img id="neko-variation" className="position-absolute  neko-card-floating" src={`/images/neko-variants/${image}.png`} style={{ width: '45%', margin: 'auto', top: '25%', left: 0, right: 0, bottom: 0 }} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default NekoBreeding;