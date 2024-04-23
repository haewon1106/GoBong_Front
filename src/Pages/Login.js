import React from 'react';
import { Icon } from '@iconify/react';
import Button from '../commponents/Button';
import Logo from '../commponents/Logo';
import styles from '../styles/Login.module.css'

function Login() {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img className={styles['background-img']} alt="login_img" src="images/loginImg.png" />
            <div className={styles['gradient']}></div>
            <div className={styles['login-container']}>
                <div style={{paddingTop:"50%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <p style={{margin:"0"}}><span style={{fontWeight:"bold"}}>익명</span>의 누군가에게 전하는 나의 편지</p>
                    <Logo/>
                </div>
                <Button/>
                <div>
                    <p style={{fontSize:"14px"}}>아직 회원이 아니라면? <span onClick={() => ('/join')} style={{color:"var(--primary-color)"}}>회원가입 바로가기</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login;