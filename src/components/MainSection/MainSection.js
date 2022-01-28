
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import GamePlay from "../gamePlay/gamePlay";
import MediaGallery from "../MediaGallery/MediaGallery";
import NekoElement from "../neko-element/NekoElement";
import NekoAttribute from "../nekoAttribute/nekoAttribute";
import NekoBreeding from "../nekoBreeding/NekoBreeding";
import NekoCharacter from "../nekoCharacter/NekoCharacter";
import NekoProfession from "../nekoProfession/nekoProfession";
import NekoRealms from "../nekoRealms/NekoRealms";
import NekoVerse from "../nekoVerse/NekoVerse";
import NekoWorld from "../nekoWorld/NekoWorld";
import OurTeam from "../ourTeam/OurTeam";
import Partners from "../Partners/Partners";
import PublicMinting from "../publicMinting/publicMinting";
import Roadmap from "../roadmap/Roadmap";

const MainSection = () => {
    return (
        <>
            <div className="other-section-content">
                <NekoWorld></NekoWorld>
              <NekoElement></NekoElement>
              <NekoAttribute></NekoAttribute>
                <NekoProfession></NekoProfession>
                <NekoBreeding></NekoBreeding>
                <NekoRealms></NekoRealms>
                <GamePlay></GamePlay>
                <NekoVerse></NekoVerse>
                <NekoCharacter></NekoCharacter>
                <PublicMinting></PublicMinting>
                <Roadmap></Roadmap>
                <OurTeam></OurTeam>
                <Partners></Partners>
                <MediaGallery></MediaGallery>
                <FAQ></FAQ>
                <Footer></Footer>
            </div>
        </>
    );
};

export default MainSection;