const dave = document.querySelector('.dave');
        dave.innerHTML = dave.innerText.split('').map(
            (char, i) =>
            `<span style="transform:rotate(${i * 18.5}deg)">${char}</span>`
        ).join('');

        const footherb = document.querySelector('.footherb');
        footherb.innerHTML = footherb.innerText.split('').map(
            (char, i) =>
            `<span style="transform:rotate(${i * 18.5}deg)">${char}</span>`
        ).join('');