// Animation ပြီးရင် Heart ကို ခုန်စေမယ်
const heart = document.getElementById("heart");

setTimeout(() => {
    heart.style.animation =
        "draw 5s linear forwards, heartbeat 1s ease-in-out infinite";
}, 5000);

// SVG ထဲမှာ heartbeat animation ထည့်
const style = document.createElement("style");

style.innerHTML = `
@keyframes heartbeat{
    0%{
        transform:scale(1);
        transform-origin:center;
    }
    25%{
        transform:scale(1.08);
        transform-origin:center;
    }
    50%{
        transform:scale(1);
        transform-origin:center;
    }
    75%{
        transform:scale(1.08);
        transform-origin:center;
    }
    100%{
        transform:scale(1);
        transform-origin:center;
    }
}
`;

document.head.appendChild(style);
