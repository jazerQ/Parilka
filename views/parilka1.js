const ok = document.querySelector('.ok');
const main = document.querySelector('.osnova');
import { getRandomInt } from './func.js';

let correctAnswerCnt = 0;
let allAnswerCnt = 0;
let questionWord = '';
let translatedQuestionWord = '';
let allWordsList = [];

ok.addEventListener('click', (e) => {
    ok.remove();
    fetch("http://localhost:3000/api/couple", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        return response.text();
    }).then((res) => {
        allWordsList = JSON.parse(res);
        let randomNum = getRandomInt(allWordsList.length - 1);
        allAnswerCnt = allWordsList.length;
        questionWord = allWordsList[randomNum].first;
        translatedQuestionWord = allWordsList[randomNum].second;
        main.innerHTML = `
            <p class="translate">введи перевод этого слова  <b>${questionWord}<b></p>
            <input type="text" class="input1" >
            <button class='btn'>OK!</button>
            `;

        const inp = document.querySelector('.input1');
        const btn = document.querySelector('.btn');

        inp.addEventListener('keypress', (e) => {
            let key = e.which || e.keyCode;
            if (key === 13) {
                btn.click();
            }
        });
        const translate = document.querySelector('.translate');
        btn.addEventListener('click', (e) => {
            if (inp.value == translatedQuestionWord) {
                correctAnswerCnt++;
            }
            allWordsList.splice(randomNum, 1);
            randomNum = getRandomInt(allWordsList.length - 1);
            if (randomNum == -1) {
                main.innerHTML = `
                    <p>МОИ ПОЗДРАВЛЕНИЯ!!! У вас ${correctAnswerCnt} правильных ответов из ${allAnswerCnt}</p>
                    <button class="again">Начать Заново?</button>
                    `;
                const again = document.querySelector('.again')
                again.addEventListener('click', () => {
                    fetch("http://localhost:3000/api/couple", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(function (response) {
                        return response.text();
                    }).then((res) => {
                        return res
                    })
                    document.location = 'http://localhost:3000/'
                })

            }
            else {
                questionWord = allWordsList[randomNum].first;
                translatedQuestionWord = allWordsList[randomNum].second;
                inp.value = '';
                translate.innerHTML = `<p class="translate">введи перевод этого слова  <b>${questionWord}<b></p>`
            }
        });
    });
});
