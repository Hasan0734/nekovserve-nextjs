import NekoAttribute from "../nekoAttribute/nekoAttribute";
import NekoElement from "../nekoElement/NekoElement";
import NekoWorld from "../nekoWorld/NekoWorld";

const MainSection = () => {
    return (
        <>
            <div className="other-section-content">
                <NekoWorld></NekoWorld>
              {/* <NekoElement></NekoElement> */}
              {/* <NekoAttribute></NekoAttribute> */}
                
            </div>
        </>
    );
};

export default MainSection;