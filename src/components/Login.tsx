import React from 'react';
import BSL_logo from "../assets/logos/BSL_logo.svg";
import findPW_logo from "../assets/logos/findPW_logo.svg";
import signup_logo from "../assets/logos/signup_logo.svg";
import { LoginStyled } from './LoginStyled';

type LoginProps = {
  onClickHandler: (event: React.MouseEvent<HTMLInputElement>) => void;
  setEmail: (Email:string) => void;
  setPw: (Pw:string) => void;
  setRemember: (Remember:boolean) => void;
}


const Login: React.FC<LoginProps> = (props)  => {
  
  
  return(
  <LoginStyled done={true}>
  <div className='bg_shadow'>
    <div className='login_popup'>
      <img className='logo' src={BSL_logo}></img>
      <h2>로그인</h2>
      <form>
        <input placeholder='이메일' onChange={(e)=>props.setEmail(e.target.value)}/><br/>
        <input placeholder='비밀번호' onChange={(e)=>props.setPw(e.target.value)}/><br/>
        <label htmlFor="auto-login">
          <input type='checkbox' id="auto-login" onChange={(e)=>props.setRemember(e.target.checked)}/> 자동로그인
        </label><br/>
        <input type='submit' value="login" onClick={(event)=>props.onClickHandler(event)}/>
      </form>
      <div className='findPW'>
        <img src={findPW_logo}/> 비밀번호 찾기
      </div>
      <div className='signup'>
        <img src={signup_logo}/> 회원가입 하기
      </div>
    </div>
  </div>
  </LoginStyled>
  )
  
  
}



export default Login;