import React from 'react';
import { Link, Route } from 'react-router-dom';

let onLinkedInClick = () => {
    window.location.href = "https://linkedin.com/in/edita-pesa-59191776"
};

let onGitHubLinkClick = () => {
    window.location.href = "https://github.com/editapesa" 
};

let onEmailClick = () => {
    window.location.href = "mailto: editapesa@gmail.com"
};

let onResumeClick = () => {
    window.location.href = ""
};

function Contact() {
    return (
        <div>
            <h1>Contact Info</h1>
            <ul>
                <li>tel: (917) 519-0411</li>
                <li><Link onClick={onEmailClick}>editapesa@gmail.com</Link></li>
                <li><Link onClick={onLinkedInClick}>LinkedIn</Link></li>
                <li><Link onClick={onGitHubLinkClick}>GitHub</Link></li>
                <li><Link onClick={onResumeClick}>Resume</Link></li>
            </ul>
        </div>
    );
}

export default Contact;