const btn = document.querySelector(".ok")
const body = document.querySelector("body")
const but = document.querySelector('.but');
const inp1 = document.querySelector('.input1');
const inp2 = document.querySelector('.input2');
const footer = document.querySelector('footer')

const forms = (list) =>{
    const form = document.querySelector('form')
    const postData = async (url,data) => {
        let res = await fetch(url,{
            method: "POST",
            body: JSON.stringify(data)
        });
        return await res.text();
    };
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            postData('http://localhost:3000/lib', list)
                .then(res => {
                    console.log(res)
                })
                .catch(() => console.log('error'))
        })
    }



}



let list = {};
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
    if((word1 != '') && (word2 != '')) {
        list[word1] =word2
        but.insertAdjacentHTML("afterend", `<div align="center" class="sup"><p class="huita"> ${word1}</p> <p class="huita">${word2}</p></div>`)
        if(flag){
            footer.insertAdjacentHTML('beforebegin',`
        <div class="but">
            <div class="inp3">
                <form action="/lib">
                    <button class = 'ok1' type="submit">OK!</button>
                </form>>
            </div>
        </div>`)
            flag=false
        }
    }
    else{
        alert("Ошибка: данные не заполненны")
    }
})

forms(list)