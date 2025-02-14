let noClickCount = 0;

const noButtonTexts = [
    "Liabsh mi ned",
    "2 Mol?",
    "3 MOL???",
    "Welsh mi verarscha alter",
    "Bitte seg jo",
    "Du bish so a sau",
    "SEG JOOOO",
    "Fick di",
    "OK i seg Valentinstag ab",
    "Bitteeeeee",
    "Luag langsam gish mr ka andere Wahl",
    "wenn jz nd drucksh liabsh mi nd"
];

const envelope = document.querySelector('.envelope-wrapper');
const buttonsContainer = document.querySelector('.new-buttons-container');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    if (envelope.classList.contains('flap')) {
        setTimeout(() => {
            buttonsContainer.style.display = 'flex';
            attachButtonListeners(); // Attach event listeners after buttons are displayed
        }, 1000); // Reduced delay to make buttons appear faster
    } else {
        buttonsContainer.style.display = 'none';
    }
});

function attachButtonListeners() {
    document.querySelectorAll('.new-button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--envelope-tab');
            button.style.transform = 'translateY(-10px)'; // Make the button float
        });
        button.addEventListener('mouseout', () => {
            if (button.classList.contains('yes')) {
                button.style.backgroundColor = 'green'; // Reset to green for Yes button
            } else if (button.classList.contains('no')) {
                button.style.backgroundColor = 'red'; // Reset to red for No button
            }
            button.style.transform = 'translateY(0)'; // Reset the button position
        });
    });

    document.querySelector('.new-button.no').addEventListener('click', () => {
        const noButton = document.querySelector('.new-button.no');
        
        noButton.textContent = noButtonTexts[noClickCount % noButtonTexts.length]; // Cycle through the texts
        
        noClickCount++;
    });

    document.querySelector('.new-button.yes').addEventListener('click', () => {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <div class="centered-text">
                ${'LIAB DI '.repeat(20).trim()}
            </div>
        `; // Centered text

        const gifs = [
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif"
        ];

        let gifIndex = 0;
        const interval = setInterval(() => {
            if (gifIndex >= gifs.length) {
                clearInterval(interval);
                return;
            }
            const img = document.createElement('img');
            img.src = gifs[gifIndex];
            img.alt = "Celebration GIF";
            const { top, left } = getRandomPosition();
            img.style = `max-width: 100%; height: auto; position: absolute; top: ${top}px; left: ${left}px; z-index: 1;`; // Ensure GIFs are below the text
            container.appendChild(img);
            gifIndex++;
        }, 1500); // Increase interval to spread out the GIFs more
    });
}

// Ensure GIFs avoid the text area
function getRandomPosition() {
    const textAreaHeight = 200; // Adjust based on the height of the text area
    const textAreaWidth = 400; // Adjust based on the width of the text area
    const top = Math.random() * (window.innerHeight - textAreaHeight);
    const left = Math.random() * (window.innerWidth - textAreaWidth);
    return { top, left };
}

// Ensure buttons are clickable after appearing
document.addEventListener('DOMContentLoaded', () => {
    attachButtonListeners();
});