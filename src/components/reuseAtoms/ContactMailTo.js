import React from "react";

function ContactMailTo({email, subject, body, ...props}){
    return(
        <a href={`mailto:${email}? subject=${subject||""} &body=${body || ""}`}>
            {props.children}
        </a>
    );
}
export default ContactMailTo;