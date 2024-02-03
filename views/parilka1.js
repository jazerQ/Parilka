const ok = document.querySelector('.ok');
const main = document.querySelector('.osnova');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let rnd;
let ans_cnt = 0;
let all_cnt;
let quiz;
let ans;
let list;
let flag = false;

ok.addEventListener('click', (e) => {
    ok.remove();
    let a = fetch("http://localhost:3000/api/couple", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        return response.text();
    }).then((res) => {
        list = JSON.parse(res);
        rnd = getRandomInt(list.length - 1);
        all_cnt = list.length;
        quiz = list[rnd].first;
        ans = list[rnd].second;
        console.log(list);
        main.innerHTML = `
            <p class="translate">введи перевод этого слова  <b>${quiz}<b></p>
            <input type="text" class="input1" >
            <button class='btn'>OK!</button>
            `;
        flag = true;

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
            if (inp.value == ans) {
                ans_cnt++;
            }
            console.log('BLYABLYA')
            list.splice(rnd, 1);
            rnd = getRandomInt(list.length - 1);
            if (rnd == -1) {
                main.innerHTML = `
                    <p>МОИ ПОЗДРАВЛЕНИЯ!!! У вас ${ans_cnt} правильных ответов из ${all_cnt}</p>
                    <button class="again">Начать Заново?</button>
                    `;
                const again = document.querySelector('.again')
                again.addEventListener('click', () => {
                    let a = fetch("http://localhost:3000/api/couple", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(function (response) {
                        return response.text();
                    }).then((res) => {
                        return res
                    })
                    document.location='http://localhost:3000/'
                })
                
            }
            else {
                quiz = list[rnd].first;
                ans = list[rnd].second;
                inp.value = '';
                translate.innerHTML = `<p class="translate">введи перевод этого слова  <b>${quiz}<b></p>`
            }
        });
    });
});
