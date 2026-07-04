import { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Content.module.css';
import berkasback1 from '../assets/BerkasBack1.png';
import berkasback from '../assets/BerkasBack.png';
import notespaper from '../assets/NotesPaper.png';
import notespaper1 from '../assets/NotesPaper1.png';
import notespaper2 from '../assets/NotesPaper2.png';
import notespaper3 from '../assets/NotesPaper3.png';
import notespaper4 from '../assets/NotesPaper4.png';
import stickynotes from '../assets/StickyNotes1.png';
import fotodiky1 from '../assets/FotoDiky1.png';
import fotodiky from '../assets/FotoDiky.png';
import saturn from '../assets/Saturn.png';
import sticker3 from '../assets/Sticker3alt.png';
import fotoalatmusik from '../assets/FotoAlatMusik.png';
import frame from '../assets/Frame 16.png';
import sticker1 from '../assets/Sticker11.png';
import sticker2 from '../assets/Sticker222.png';
import sticker22 from '../assets/Sticker2222.png';
import sticker5 from '../assets/Sticker55.png';
import logothegarfied from '../assets/LogoTheGarfied.png';
import logothesaturn from '../assets/LogoTheSaturn.png';
import logomengutara from '../assets/LogoMengutara.png';
import logoemail from '../assets/LogoEmail.svg';
import logoinstagram from '../assets/LogoInstagram.svg';

function Content() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const onSticker3ImageClick = useCallback(() => {
        const anchor = document.querySelector("[data-scroll-to='project']");
        if (anchor) {
            anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    }, []);

    const onSticker3ImageClick1 = useCallback(() => {
        const anchor = document.querySelector("[data-scroll-to='contact']");
        if (anchor) {
            anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    }, []);

    const onLogoTheGarfiedImageClick = useCallback(() => {
        window.open("https://open.spotify.com/artist/6D1zdLPPMj2IhBqwD9pkmo?si=S1YlpP8gSyiXJ7WCJd4arg");
    }, []);

    const onLogoTheSaturnImageClick = useCallback(() => {
        window.open("https://open.spotify.com/artist/3iIXKB2m9r2kBlnrFNUsZA?si=1LOISpoWSPegmu_Mz609gQ");
    }, []);

    const onLogoTheGarfiedIconClick = useCallback(() => {
        window.open("https://open.spotify.com/artist/6D1zdLPPMj2IhBqwD9pkmo?si=S1YlpP8gSyiXJ7WCJd4arg");
    }, []);

    const onLogoTheSaturnIconClick = useCallback(() => {
        window.open("https://open.spotify.com/artist/3iIXKB2m9r2kBlnrFNUsZA?si=1LOISpoWSPegmu_Mz609gQ");
    }, []);

    return (
        <div className={styles.content}>
            <div className={styles.contact} data-scroll-to="contact" />
            <div className={styles.project} data-scroll-to="project" />
            <div className={styles.about} />

            {/* ==========================================
               DESKTOP VIEWPORT
               ========================================== */}
            {!isMobile && (
                <div className={styles.maincontent}>
                    <img className={styles.berkasbackIcon} src={berkasback1} alt="" />
                    <img className={styles.berkasbackIcon2} src={berkasback} alt="" />
                    <b className={styles.aboutMe}>about me</b>
                    <b className={styles.myProject}>my project</b>

                    <img className={styles.notespaperIcon} src={notespaper} alt="" />
                    <img className={styles.notespaperIcon2} src={notespaper2} alt="" />
                    <img className={styles.notespaperIcon3} src={notespaper1} alt="" />
                    <img className={styles.notespaperIcon4} src={notespaper3} alt="" />
                    <img className={styles.notespaperIcon5} src={notespaper4} alt="" />

                    <img className={styles.sticker1Icon} src={sticker1} alt="" />
                    <b className={styles.contact2}>contact</b>
                    <img className={styles.sticker2Icon} src={sticker2} alt="" />

                    <div className={styles.hiImDiky}>hi, i’m Diky Nugroho<br /></div>
                    <div className={styles.imAMusician}>
                        I’m a musician. I write, sing, record, play and listen to music. Basically, my entire life revolves around music.<br />
                        As an independent artist, I handle everything from the first lyric to the final mix, turning raw ideas into fully produced tracks under my projects. <br />
                        <br />
                        <br />
                    </div>
                    <div className={styles.forMeMusic}>For me, music isn't just a hobby—it's how I build my world.</div>

                    <img className={styles.fotodikyIcon} src={fotodiky} alt="" />
                    <img className={styles.fotodiky1Icon} src={fotodiky1} alt="" />
                    <img className={styles.saturnIcon} src={saturn} alt="" />
                    <img className={styles.sticker3Icon} src={sticker3} alt="" onClick={onSticker3ImageClick} />
                    <img className={styles.sticker3Icon2} src={sticker3} alt="" onClick={onSticker3ImageClick1} />

                    <div className={styles.myprojectcontainer}>
                        <img className={styles.myprojectcontainerChild} src={frame} alt="" />
                        <img className={styles.sticker2Icon2} src={sticker22} alt="" />
                        <img className={styles.sticker5Icon} src={sticker5} alt="" />
                        <img className={styles.stickynotes3Icon} src={stickynotes} alt="" />
                        <img className={styles.stickynotes2Icon} src={stickynotes} alt="" />
                        <img className={styles.stickynotes1Icon} src={stickynotes} alt="" />
                        <img className={styles.logothegarfiedIcon} src={logothegarfied} alt="" onClick={onLogoTheGarfiedImageClick} />
                        <img className={styles.logothesaturnIcon} src={logothesaturn} alt="" onClick={onLogoTheSaturnImageClick} />
                        <img className={styles.logomengutaraIcon} src={logomengutara} alt="" />
                        <div className={styles.theGarfied}>The Garfied</div>
                        <div className={styles.theSaturn}>The Saturn</div>
                        <i className={styles.comingSoon}>Coming Soon</i>
                    </div>

                    <img className={styles.sticker2Icon3} src={sticker22} alt="" />
                    <img className={styles.logoemailIcon} src={logoemail} alt="" />
                    <img className={styles.logoinstagramIcon} src={logoinstagram} alt="" />
                    <a className={styles.diknugwisgmailcom} href="mailto:diknugwis@gmail.com" target="_blank">diknugwis@gmail.com</a>
                    <b className={styles.nugdik}>@nug.dik</b>

                    <div className={styles.footerbox} />
                    <b className={styles.dikyNugrohoAll}>© 2026 Diky Nugroho. All Rights Reserved.</b>
                    <img className={styles.fotoalatmusikIcon} src={fotoalatmusik} alt="" />
                </div>
            )}

            {/* ==========================================
               MOBILE VIEWPORT
               ========================================== */}
            {isMobile && (
                <>
                    <div className={styles.contact} />
                    <div className={styles.project} />
                    <div className={styles.about} />
                    <div className={styles.footerbox} />
                    <b className={styles.dikyNugrohoAll}>© 2026 Diky Nugroho. All Rights Reserved.</b>
                    <div className={styles.berkasbackParent}>
                        <img className={styles.berkasbackIcon} src={berkasback1} alt="" />
                        <img className={styles.berkasbackIcon2} src={berkasback1} alt="" />
                        <img className={styles.notespaperIcon} src={notespaper2} alt="" />

                        <img className={styles.notespaperIcon2} src={notespaper2} alt="" />
                        <img className={styles.notespaperIcon3} src={notespaper1} alt="" />
                        <img className={styles.vectorIcon} src={logoemail} alt="" />
                        <img className={styles.logoinstagramIcon} src={logoinstagram} alt="" />
                        <a className={styles.diknugwisgmailcom} href="mailto:diknugwis@gmail.com" target="_blank">diknugwis@gmail.com</a>
                        <b className={styles.nugdik}>@nug.dik</b>
                        <b className={styles.project2}>project</b>
                        <b className={styles.contact2}>contact</b>
                        <img className={styles.fotodikyIcon} src={fotodiky} alt="" />
                        <img className={styles.sticker1Icon} src={sticker1} alt="" />
                        <img className={styles.notespaperIcon4} src={notespaper} alt="" />
                        <img className={styles.notespaperIcon5} src={notespaper} alt="" />
                        <img className={styles.fotoalatmusikIcon} src={fotoalatmusik} alt="" />
                        <img className={styles.sticker5Icon} src={sticker5} alt="" />
                        <div className={styles.hiImDiky}>hi, i’m Diky Nugroho<br /></div>
                        <img className={styles.saturnIcon} src={saturn} alt="" />
                        <div className={styles.imAMusician}>
                            I’m a musician. I write, sing, record, play and listen to music. Basically, my entire life revolves around music.<br />
                            As an independent artist, I handle everything from the first lyric to the final mix, turning raw ideas into fully produced tracks under my projects. <br />
                            <br />
                            <br />
                        </div>
                        <div className={styles.forMeMusic}>For me, music isn't just a hobby—it's how I build my world.</div>
                        <img className={styles.fotodiky1Icon} src={fotodiky1} alt="" />
                        <div className={styles.myprojectcontainer}>
                            <img className={styles.stickynotes3Icon} src={stickynotes} alt="" />
                            <img className={styles.stickynotes2Icon} src={stickynotes} alt="" />
                            <img className={styles.stickynotes1Icon} src={stickynotes} alt="" />
                            <img className={styles.logothegarfiedIcon} src={logothegarfied} alt="" onClick={onLogoTheGarfiedIconClick} />
                            <img className={styles.logothesaturnIcon} src={logothesaturn} alt="" onClick={onLogoTheSaturnIconClick} />
                            <img className={styles.logomengutaraIcon} src={logomengutara} alt="" />
                            <div className={styles.theGarfied}>The Garfied</div>
                            <div className={styles.theSaturn}>The Saturn</div>
                            <i className={styles.comingSoon}>Coming Soon</i>
                        </div>
                        <img className={styles.frameChild} src={frame} alt="" />
                        <img className={styles.sticker2Icon} src={sticker22} alt="" />
                        <img className={styles.sticker5Icon2} src={sticker5} alt="" />
                    </div>
                </>
            )}
        </div>
    );
}

export default Content;
