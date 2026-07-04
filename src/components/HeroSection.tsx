import { useMediaQuery } from 'react-responsive';
import styles from './HeroSection.module.css';
import sticker1 from '../assets/Sticker.png';
import sticker2 from '../assets/Sticker2.png';
import sticker3 from '../assets/Sticker3.png';
import sticker4 from '../assets/Sticker4.png';
import sticker5 from '../assets/Sticker5.png';
import pasfoto from '../assets/PasFoto.jpg';
import berkastutup from '../assets/BerkasTutup.png';

function HeroSection() {
    // Detect mobile viewport (max-width: 768px)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
            {/* ==========================================
               DESKTOP VIEWPORT
               ========================================== */}
            {!isMobile && (
                <div className={styles.heroSection}>
                    <div className={styles.hero} />
                    
                    <div className={styles.backgroundtext}>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoParent}>
                                {[...Array(5)].map((_, i) => <b key={i} className={styles.dikyNugroho}>DIKY NUGROHO</b>)}
                            </div>
                        </div>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoGroup}>
                                {[...Array(5)].map((_, i) => <b key={i} className={styles.dikyNugroho}>DIKY NUGROHO</b>)}
                            </div>
                        </div>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoParent}>
                                {[...Array(5)].map((_, i) => <b key={i} className={styles.dikyNugroho}>DIKY NUGROHO</b>)}
                            </div>
                        </div>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoGroup}>
                                {[...Array(5)].map((_, i) => <b key={i} className={styles.dikyNugroho}>DIKY NUGROHO</b>)}
                            </div>
                        </div>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoParent}>
                                {[...Array(5)].map((_, i) => <b key={i} className={styles.dikyNugroho}>DIKY NUGROHO</b>)}
                            </div>
                        </div>
                    </div>

                    <div className={styles.mainherocontent}>
                        <div className={styles.title}>
                            <i className={styles.folio}>folio</i>
                            <b className={styles.port}>Port</b>
                        </div>

                        <img className={styles.berkastutupIcon} src={berkastutup} alt="" />
                        <img className={styles.sticker5Icon} src={sticker5} alt="" />
                        <img className={styles.sticker4Icon} src={sticker4} alt="" />
                        <img className={styles.sticker3Icon} src={sticker3} alt="" />
                        <img className={styles.sticker2Icon} src={sticker2} alt="" />
                        <img className={styles.sticker1Icon} src={sticker1} alt="" />
                        <img className={styles.pasfotoIcon} src={pasfoto} alt="Pas Foto" />
                        <b className={styles.dikyNugroho36}>Diky Nugroho</b>
                    </div>
                </div>
            )}

            {/* ==========================================
               MOBILE VIEWPORT
               ========================================== */}
            {isMobile && (
                <div className={styles.heroSection}>
                    <div className={styles.hero} />
                    <div className={styles.backgroundtext}>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoParent}>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                            </div>
                        </div>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoGroup}>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                            </div>
                        </div>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoParent}>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                            </div>
                        </div>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoGroup}>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                            </div>
                        </div>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoParent}>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                            </div>
                        </div>
                        <div className={styles.backgroundtextInner}>
                            <div className={styles.dikyNugrohoGroup}>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                                <b className={styles.dikyNugroho}>DIKY NUGROHO</b>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainherocontent}>
                        <div className={styles.title}>
                            <i className={styles.folio}>folio</i>
                            <b className={styles.port}>Port</b>
                        </div>
                        <img className={styles.berkastutupIcon} src={berkastutup} alt="" />
                        <b className={styles.dikyNugroho31}>Diky Nugroho</b>
                        <img className={styles.pasfotoIcon} src={pasfoto} alt="" />
                        <img className={styles.sticker5Icon} src={sticker5} alt="" />
                        <img className={styles.sticker4Icon} src={sticker4} alt="" />
                        <img className={styles.sticker3Icon} src={sticker3} alt="" />
                        <img className={styles.sticker1Icon} src={sticker1} alt="" />
                        <img className={styles.sticker2Icon} src={sticker2} alt="" />
                    </div>
                </div>
            )}
        </>
    );
}

export default HeroSection;
