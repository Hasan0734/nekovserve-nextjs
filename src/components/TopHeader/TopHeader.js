
const TopHeader = () => {
    return (
        <>
            <section className="mb-5 overflow-hidden top-section">
                <div className=" ">
               
                    <div className="wrapper d-flex justify-content-center position-relative">
                        <div className="container pt-5 pt-sm-0" style={{ position: 'absolute' }}>
                        </div>
                        <img className="circle-spin" src="/images/topSection/big_circle.png" />
                        <img className="circle-spin-r" src="/images/topSection/small_circle.png" />
                        <img className="img-main" src="/images/topSection/big_group_1.png" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopHeader;