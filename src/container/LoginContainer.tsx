import React,{useState} from "react";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import login, { LoginState, loginSubmit } from "../store/modules/login";

type LoginContainerProps = {};

const LoginContainer: React.FC<LoginContainerProps> = () => {
  
  const getLoginState = useSelector((state: LoginState) => state);
  const dispatch = useDispatch();
  console.log(getLoginState)

  const [email,setEmail] = useState<string>("");
  const [pw,setPw] = useState<string>("");
  const [remember,setRemember] = useState<boolean>(false);


  const onClickHandler = (event:React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault()
    dispatch(loginSubmit({email,pw,remember}))
    console.log(getLoginState)
  }

  return(
    <Login
    onClickHandler={onClickHandler}
    setEmail={setEmail} setPw={setPw} setRemember={setRemember}/>
  ) 
}

export default LoginContainer                                                   