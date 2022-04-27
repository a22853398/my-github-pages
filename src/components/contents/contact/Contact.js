import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import ContactMailTo from "../../reuseAtoms/ContactMailTo";


const ContactDiv = styled.div(
    {
        width: '80%',
        padding: '0% 0%',
        margin: 'auto',
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
                <p>上記のお問い合わせフォームは只今、<a href="https://formspree.io/" target="_blank" rel="noreferrer">formspree</a>&ensp;のフリープランを利用しているため、<br/>
                    お問い合わせいただいた内容が届かない場合がございます。<br/>
                    ご迷惑とお手数をお掛けして誠に申し訳ございません。<br/>
                    もし三日内にこちらからの返事を頂いていない場合、<ContactMailTo email="u9908028@gmail.com" subject="" body="">u9908028@gmail.com</ContactMailTo>&ensp;にご連絡ください。<br/>
                </p>
            </div>
        </ContactDiv>
    );
}
export default Contact;