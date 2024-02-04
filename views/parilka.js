const btn = document.querySelector(".ok")
const body = document.querySelector("body")
const but = document.querySelector('.but');
const inp1 = document.querySelector('.input1');
const inp2 = document.querySelector('.input2');
const footer = document.querySelector('footer')



inp1.addEventListener('keypress',(e) => {
    let key = e.which || e.keyCode
    if(key === 13) {
        btn.click()
    }
})
inp2.addEventListener('keypress',(e) => {
    let key = e.which || e.keyCode
    if(key === 13) {
        btn.click()
    }
})
let flag = true;
btn.addEventListener("click", function() {
    const word1 = inp1.value;
    const word2 = inp2.value;
    inp1.value = '';
    inp2.value = '';
    if((word1 != '') && (word2 != '')) {
        const pairOfWords = {
            first: word1,
            second: word2
        }
        fetch("http://localhost:3000/api/couple",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pairOfWords)
        }).then(function(response) {
            return response.text();
        }).then((res) =>{
            return res
        })
        but.insertAdjacentHTML("afterend", `<div align="center" class="sup"><p class="huita"> ${word1}</p> <p class="huita">${word2}</p></div>`)
        if(flag){
            footer.insertAdjacentHTML('beforebegin',`
        <div class="but">
            <div class="inp3">
                <form action="/lib">
                    <button class = 'ok1' type="submit">OK!</button>
                </form>
            </div>
        </div>`)
            flag=false
        }
    }
    else{
        alert("Ошибка: данные не заполненны")
    }
})

