// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Recaptcha from 'react-google-recaptcha';
import styled from 'styled-components';

const FormDiv = styled.div(
  {
    border: '0.5px dotted darkgreen',
    width: 'auto',
    padding: '0% 2% 1% 2%',
    '& label':{
      fontWeight: 'bold',
      fontSize: '1.2rem',
      margin: '',
    },
    '& input':{
      margin: '0% 0% 1% 1%',
      fontSize: '1.1rem',
      width: '97%'
    },
    '& textarea':{
      margin: '0% 0% 1% 1%',
      resize: 'none',
      width: '97%',
      height: '',
      fontSize: '1.1rem'
    },
  }
);

const RecaptchaDiv = styled.div(
  {
    padding: '0% 0% 1% 1%',
  }
);

const SubmitBtnDiv = styled.div(
  {
    '& button':{
      cursor: 'pointer',
      fontSize: '1.1rem',
      backgroundColor: 'darkgreen',
      color: 'white',
      border: '2px solid darkgreen',
      margin: '0% 1%',
      '&:hover':{
        backgroundColor: 'yellowgreen',
        color: 'black'
      }
    }
  }
);


/**
 * プライバシーポリシー toggle
 */


const mystiekey = "6LeSYeUeAAAAABGdt9EA6DP3VLnItZVYu2WBT0vJ";
function onMyChange(value){
  console.log('Captcha value', value);
}

function ContactForm() {
  const [state, handleSubmit] = useForm("xgedzydp");
  if (state.succeeded) {
      return <p>お問い合わせいただき、誠にありがとうございます。</p>;
  }
  
  return (
    <FormDiv>
      <h2>お問い合わせフォーム</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          メールアドレス
        </label>
        <br/>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder='test@gmail.com'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <br/>
        <label htmlFor='username'>
          お名前
        </label>
        <br/>
        <input
          id='username'
          type='text'
          name='username'
          placeholder='音井泡瀬（おといあわせ）'
        />
        <br/>
        <label htmlFor='message'>
          お問い合わせ内容
        </label>
        <br/>
        <textarea
          id="message"
          name="message"
          placeholder="
                      プライバシー侵害の記事があるのですが...&#13;&#10;
                      間違っている記事があるのですが、訂正してほしい...&#13;&#10;
                      誹謗中傷の記事を削除してほしいのですが...&#13;&#10;
                      こうした方がいいですよ、試してみて！&#13;&#10;
                      ここに誤字があり、ここの日本語がおかしいです。&#13;&#10;
                      この部分はどういう意味ですか？&#13;&#10;
                      これはどうやって出来ましたか？&#13;&#10;
                      イケイケなBGMが欲しいのですが、具体的に...&#13;&#10;
                      プロフィールアイコンのようなイラストが欲しい...&#13;&#10;
                      "
          rows="10"
        />
        <br/>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <RecaptchaDiv>
          <Recaptcha sitekey={mystiekey} onChange={onMyChange}/>
        </RecaptchaDiv>
        <SubmitBtnDiv>
          <button type='button' >  
            プライバシーポリシー
          </button>
          <button type="submit" disabled={state.submitting}>
            内容を送信
          </button>
        </SubmitBtnDiv>
      </form>
    </FormDiv>
  );
}
export default ContactForm;