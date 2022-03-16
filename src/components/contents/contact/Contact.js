import React from "react";
import ContactForm from "./ContactForm";

function Contact(){
    return (
        <div>
            <div>
                <h2>お問い合わせフォーム</h2>
                <p>当サイトへの質問や指摘、制作依頼、著作権違反の削除依頼など、何なりと受け付けております。<br/>
                    下記のフォームにお名前、メールアドレスとお問い合わせ内容をご記入いただければ幸いです。
                </p>
                <p></p>
            </div>
            <ContactForm />
        </div>
    );
}
export default Contact;