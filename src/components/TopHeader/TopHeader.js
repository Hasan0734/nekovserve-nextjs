
import BigCircle from '../../assets/image/topSection/big_circle.png'
import smCircle from '../../assets/image/topSection/small_circle.png'
import Main from '../../assets/image/topSection/big_group_1.png'
import Image from 'next/image';
const TopHeader = () => {
    return (
        <>
            <section className="mb-5 overflow-hidden top-section">
                <div className="">

                    <div className="wrapper d-flex justify-content-center position-relative">
                        <div className="container pt-5 pt-sm-0" style={{ position: 'absolute' }}>
                        </div>
                        <div  className="circle-spin ">
                            <Image src={BigCircle} />
                        </div>
                        <div className="circle-spin-r ">
                            <Image  src={smCircle} />
                        </div>
                        <div  className="img-main ">
                            <Image src={Main} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopHeader;