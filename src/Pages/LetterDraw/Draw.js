import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import styles from '../../styles/LetterDraw.module.css';
import GoHome from '../../commponents/GoHome';
import Button from '../../commponents/Button';
import LetterList from '../../commponents/LetterDraw/LetterList';
import Popup from "../../commponents/LetterDraw/Popup"

function Draw() {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setPopupOpen(true); 
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div style={{height:"100vh", overflow:"hidden"}}>
            <GoHome/>
            <div className={styles['container']}>
                <h1 className={styles['text']}>해원님도 누군가 작성한<br/><span style={{color:"var(--primary-color)"}}>편지</span>를 뽑아보세요!</h1>
                <div className={styles['draw-container']}>
                    <div style={{display:"flex"}}>
                        <LetterList />
                    </div>
                    <button className={styles['btn-style']} onClick={handleOpenPopup}>자세히보기</button>
                </div>
                <Button text="이 편지로 할래요!"/>
            </div>
            {isPopupOpen && <Popup onClose={handleClosePopup} />}
        </div>
    );
}

export default Draw;
