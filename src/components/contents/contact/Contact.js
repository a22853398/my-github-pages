import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const ContactDiv = styled.div(
    {
        width: '100%',
        padding: '0% 20% 0% 20%'
    }
);

function Contact(){
    return (
        <ContactDiv>
            <div>
                <p>当サイトへの質問や指摘、制作依頼、著作権違反の削除依頼など、何なりと受け付けております。<br/>
                    下記のフォームにお名前、メールアドレスとお問い合わせ内容をご記入いただければ幸いです。
                </p>
            </div>
            
            <ContactForm />
            <div>
                <p>上記のお問い合わせフォームは只今、formspreeのフリープランを利用しているため、<br/>
                    お問い合わせいただいた内容が届かない場合がございます。<br/>
                    ご迷惑とお手数をお掛けして誠に申し訳ございません。<br/>
                    もし三日内にこちらからの返事を頂いていない場合、u9908028@gmail.comにご連絡ください。<br/>
                </p>
            </div>
        </ContactDiv>
    );
}
export default Contact;