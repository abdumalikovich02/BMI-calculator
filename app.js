function bmi() {
    const boy = document.querySelector("#boy").value;
    const ogirlik = document.querySelector("#ogirlik").value;
    const result = document.getElementById('result')
    const img1 = document.getElementById('1img')

    let natija = Number((ogirlik / (boy * boy)).toFixed(1));

    if (natija < 18.5) {
        result.innerHTML = ` ${natija} Siz ozg'insiz`;
        img1.style.display = 'block'
        img1.style.display = 'block';

    } else if (natija > 18.5 && natija < 24.5) {
        result.innerHTML = `${natija} Siz normal holatdasiz`
        img1.style.display = 'block'
        img1.setAttribute('src', 'normal.jpg')
    } else if (natija > 24.5 && natija < 30) {
        result.innerHTML = `${natija} Siz semizsiz`
        img1.style.display = 'block'
        img1.setAttribute('src', 'fat.jpg')
    } else if (natija > 30) {
        img1.style.display = 'block'
        result.innerHTML = `${natija} Siz o'ta semizzsiz`
        img1.setAttribute('src', 'obesity.jpg')
    }
}