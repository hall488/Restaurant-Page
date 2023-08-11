import tagClass from "./util";
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

const partnersPage = () => {
    let content = tagClass('div', 'openmat');

    for(let i = 0; i < 8; i++) {
        let container = tagClass('div', 'mat-container');
        
        let iconDiv = tagClass('div', 'icon');
        let icon = tagClass('i', 'fa-solid','fa-user');
        icon.setAttribute('aria-hidden', 'true');
        iconDiv.appendChild(icon);
        container.appendChild(iconDiv);

        let btn = tagClass('div', 'mat-btn');
        btn.addEventListener('click', () => alert('Invite Sent!'));
        btn.textContent = 'Connect';

        container.appendChild(btn);

        content.appendChild(container);
    }

    return content;
}

export default partnersPage;