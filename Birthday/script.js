// 🎉 Get all elements
const envelope = document.getElementById('envelope');
const scene0 = document.getElementById('scene0');
const scene1 = document.getElementById('scene1');
const scene2 = document.getElementById('scene2');
const scene3 = document.getElementById('scene3');
const scene4 = document.getElementById('scene4');
const scene5 = document.getElementById('scene5');
const nextBtn = document.getElementById('nextBtn');
const scene3Btn = document.getElementById('scene3Btn');
const scene4Btn = document.getElementById('scene4Btn');
const finalBtn = document.getElementById('finalBtn');
const birthdayMusic = document.getElementById('birthdayMusic');
const letterText = document.getElementById('letterText');

let confettiInterval;

// 🎊 Start continuous confetti
function startConfettiRain() {
    confettiInterval = setInterval(() => {
        confetti({
            particleCount: 5,
            angle: 90,
            spread: 55,
            origin: { x: Math.random(), y: 0 }
        });
    }, 300);
}

// ✨ Universal card falling animation
function animateCards(sceneId) {
    const cards = document.querySelectorAll(`#${sceneId} .card`);

    cards.forEach((card, index) => {
        gsap.fromTo(card,
            { y: -400, opacity: 0, rotate: gsap.utils.random(-20, 20) },
            {
                y: 0,
                opacity: 1,
                rotation: gsap.utils.random(-5, 5),
                duration: 1,
                ease: "bounce.out",
                delay: index * 0.6
            }
        );
    });
}

// 💌 Envelope click → Start music + confetti + scene change
envelope.addEventListener('click', () => {
    birthdayMusic.play();
    envelope.style.transform = "rotateY(180deg) scale(0.8)";

    setTimeout(() => {
        scene0.classList.add('hidden');
        scene1.classList.remove('hidden');

        confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
        startConfettiRain();
    }, 1000);
});

// 🎂 Scene 1 → Scene 2
nextBtn.addEventListener('click', () => {
    scene1.classList.add('hidden');
    scene2.classList.remove('hidden');
    animateCards('scene2');
});

// 🌟 Scene 2 → Scene 3
scene3Btn.addEventListener('click', () => {
    scene2.classList.add('hidden');
    scene3.classList.remove('hidden');
    animateCards('scene3');
});

// 🍽️ Scene 3 → Scene 4
scene4Btn.addEventListener('click', () => {
    scene3.classList.add('hidden');
    scene4.classList.remove('hidden');
    animateCards('scene4');
});

// 💖 Scene 4 → Scene 5 (Love Letter)
function showLoveLetter() {
    scene4.classList.add('hidden');
    scene5.classList.remove('hidden');

    letterText.textContent = "";
    const letterLines = [
    "From the moment we met, you filled my world with happiness. In your smile, I found peace. In your eyes, I found love.",
    "Every day with you feels like a beautiful dream I never want to wake from.",
    "Without you, my days feel dull and my nights feel empty.",
    "Whenever I look at you, I find energy and inner peace.",
    "Thank you for being my favorite adventure.",
    "I love you, my dear Run Zhong Ye Zi!",
    "And I wish you a very Happy Birthday! May you celebrate a hundred more, and may all of them include us together.",
    "Yours,",
    "Abdul Ali Khan ❤️"
    ];
    const fullText = letterLines.join('\n\n');
    let index = 0;

    const typeInterval = setInterval(() => {
        letterText.textContent = fullText.slice(0, index);
        index++;
        if (index > fullText.length) {
            clearInterval(typeInterval);
        }
    }, 50);
}

// 🌟 Final button → End of surprise
finalBtn.addEventListener('click', () => {
    alert("That's all for now ❤️ Waiting for your next one!");
    // Or reload page → location.reload();
});
