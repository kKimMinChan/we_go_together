//https://jnarin-development-story.tistory.com/102
//이거 참고해서 제작할 예정



const LOGIN_SUBMIT = 'login/LOGIN_SUBMIT' as const;
const LOGIN_RESET = 'login/LOGIN_RESET' as const

export const loginSubmit = (state:{email:string,pw:string,remember:boolean}) => ({
  type:LOGIN_SUBMIT,
  state: state
});
export const loginReset = () => ({
  type:LOGIN_RESET
});


type LoginAction =
| ReturnType<typeof loginSubmit>
| ReturnType<typeof loginReset>;

export type LoginState = {
  email: string,
  pw: string,
  remember: boolean;
};

const initialState: LoginState = {
  email:"",
  pw:"",
  remember: false
}

export default function login(
  state: LoginState = initialState,
  action: LoginAction
): LoginState {
  switch (action.type){
    case LOGIN_SUBMIT:
      return {...action.state};
    case LOGIN_RESET:
      return { email:"", pw:"", remember:false};
    default:
      return state;
  }
}