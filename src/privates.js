import tagClass from "./util";
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

const privatesPage = () => {
    let content = tagClass('div', 'openmat');

    for(let i = 0; i < 8; i++) {
        let container = tagClass('div', 'mat-container');
        
        let iconDiv = tagClass('div', 'icon');
        let icon = tagClass('i', 'fa-solid','fa-chalkboard-user');
        icon.setAttribute('aria-hidden', 'true');
        iconDiv.appendChild(icon);
        container.appendChild(iconDiv);

        let btn = tagClass('div', 'mat-btn');
        btn.addEventListener('click', () => alert('Class booked!'));
        btn.textContent = 'Book';

        container.appendChild(btn);

        content.appendChild(container);
    }

    return content;
}

export default privatesPage;