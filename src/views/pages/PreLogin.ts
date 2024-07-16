import { LgLogoMainIcon } from '../../resources/assets/icons';
const PreLogin = () => {
  return `
 <div class = "pk-form-prelogin">
  <div class = "form-prelogin">
    <div class = "form-prelogin-title">
    <figure><img src = "${LgLogoMainIcon}"></figure>
        <p>Enjoy the newest movies</p>
    </div>
    <div class = "form-prelogin-behavior">
    <button class = "btn-primary btn-log">Log in</button>
    <p>No account ? <span class = "btn-signup" >Sign up</span></p>
    </div>
 </div>
 <div class  = "con-form-login hidden">
    <form class="form-log">
      <input class = "username-input" type = "text" placeholder = "Username" name="name">
      <input class = "userpassword-input" type = "password" placeholder = "Password" name="password">
      <button type="submit" class = "btn-submit-login">Submit</button>
    </form>
 </div>
 <div class  = "con-form-regist hidden">
    <form class="form-res">
      <input class = "username-input" type = "text" placeholder = "Username" name="name">
      <input class = "userpassword-input" type = "password" placeholder = "Password" name="password">
      <input class = "useremail-input" type = "email" placeholder = "Email" name="email">
      <button type="submit" class = "btn-submit-regist">Submit</button>
    </form>
 </div>
`;
};

export default PreLogin;
