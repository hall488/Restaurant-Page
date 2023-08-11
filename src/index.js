import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
import gamePlanPage from './gameplan.js';
import openmatPage from './openmat.js';
import partnersPage from './partners.js'
import privatesPage from './privates';
import tagClass from './util.js';

let container = tagClass('div', 'container');

const header = () => {

    let menuState = false;

    let apps = tagClass('div', 'apps');

    const app = (link, ...fa) => {

        const appListener = (e, link) => {
            console.log(link);
        } 

        let app = tagClass('div', 'app');
        let icon = tagClass('i', ...fa);
        app.textContent = link;
        app.addEventListener('click', (e,link) => appListener);
        app.appendChild(icon);

        return app;
    }

    let appArray = [
        ['Mainpage', 'fa-solid', 'fa-house'],
        ['Gameplan','fa-solid', 'fa-circle-nodes'],
        ['Openmat', 'fa-solid', 'fa-layer-group'],
        ['Partners', 'fa-solid', 'fa-hand-fist', 'fa-rotate-90'],
        ['Privates', 'fa-solid', 'fa-brain']
    ]

    const appListener = (e, name) => {
        console.log(e, name);
        container.removeChild(container.children[2]);
        let page;
        switch(name) {
            case 'Mainpage': page = mainPage; break;
            case 'Gameplan': page = gamePlanPage; break;
            case 'Openmat' : page = openmatPage; break;
            case 'Partners': page = partnersPage; break;
            case 'Privates': page = privatesPage; break;
        }

        menuListener(e);
        container.appendChild(page());
    }

    appArray.forEach(a => {
        let newApp = app(...a);

        newApp.addEventListener('click', e => appListener(e, a[0]));

        apps.appendChild(newApp);
    });

    const menuListener = e => {
        menuState = !menuState;
        apps.style.display = menuState ? 'grid' : 'none'; 
        menuState ? menu.classList.add('rotate') : menu.classList.remove('rotate');
    }

    let header = tagClass('div', 'header');

    let title = tagClass('div', 'title');

    title.textContent = 'Openmat.io';

    header.appendChild(title);    

    let menu = tagClass('div', 'menu');
    let chevronIcon = tagClass('i', 'fa-solid', 'fa-circle-chevron-down');
    chevronIcon.setAttribute('aria-hidden', 'true');
    menu.appendChild(chevronIcon);   
    menu.addEventListener('click', menuListener);
    header.appendChild(menu);
    

    let profile = tagClass('div', 'profile');
    let userIcon = tagClass('i', 'fa-solid','fa-user');
    userIcon.setAttribute('aria-hidden', 'true');
    profile.appendChild(userIcon);
    header.appendChild(profile);

    apps.style.display = 'none';    

    header.appendChild(apps);

    return header;
}

const footer = () => {
    let footer = tagClass('div', 'footer');

    footer.textContent = 'Christopher Hall © 2023';
    
    let a = document.createElement('a');
    a.setAttribute('target', '_blank');
    a.setAttribute('href', "https://github.com/hall488");
    
    let i = tagClass('i', 'fab','fa-github');
    i.setAttribute('aria-hidden', 'true');
    
    a.appendChild(i);
    footer.appendChild(a);

    return footer;
}

const mainPage = () => {
    let content = tagClass('div', 'main-page');
    let fillerText = [
        "In the tranquil embrace of nature, a symphony of birdsong and rustling leaves orchestrates a soothing ambiance. Sunlight filters through the canopy, casting a gentle warmth upon the earth. A serene escape, where worries dissipate and the soul finds solace in simplicity.",
        "Technology's rapid evolution continues to reshape our world, fostering connectivity and efficiency. From AI-driven innovations to space exploration, the boundaries of human achievement expand. Yet, amidst the digital marvels, the essence of human interaction and empathy remains an invaluable cornerstone.",
        "The canvas of history bears the vivid strokes of countless cultures, each contributing hues to our global tapestry. Traditions, rituals, and artistry traverse time, linking generations with an intricate thread of heritage. A celebration of diversity, reminding us of our shared humanity's vibrant spectrum.",
        "Amid urban skylines, culinary prowess emerges as a delectable art form. Gourmet creations tantalize taste buds, inviting exploration of diverse flavors. In a world where every dish tells a story, epicurean adventures become a passport to cultural understanding and a celebration of gastronomic ingenuity.",
        "Pages of literature unfold realms beyond reality, offering passage into imaginative realms. Authors wield words like sorcery, conjuring emotions, and insights. From the classics to modern sagas, each narrative whispers the promise of discovery, inviting readers to embark on literary odysseys of mind and heart."
    ];

    for(let i = 0; i < 5; i++) {
        let div = tagClass('div', 'filler');
        div.textContent = fillerText[i];
        content.appendChild(div);
    }

    return content;
}


container.appendChild(header());
container.appendChild(footer());

container.appendChild(mainPage());

document.body.appendChild(container);
