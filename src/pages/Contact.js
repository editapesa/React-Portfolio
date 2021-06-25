import React from 'react';
import { Link } from 'react-router-dom';

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
            <h1 className='text-center p-5 mt-2'>Contact Info</h1>
            <ul className='list-group'>
                <li className='text-center p-2'>tel: (917) 519-0411</li>
                <li className='text-center p-2'><Link onClick={onEmailClick}>editapesa@gmail.com</Link></li>
                <li className='text-center p-2'><Link onClick={onLinkedInClick}>LinkedIn</Link></li>
                <li className='text-center p-2'><Link onClick={onGitHubLinkClick}>GitHub</Link></li>
                <li className='text-center p-2'><Link onClick={onResumeClick}>Resume</Link></li>
            </ul>
        </div>
    );
}

export default Contact;