
let doc = document;

let input = doc.querySelectorAll('.form_blue');
let p_bl = doc.querySelectorAll('.form_div_p_blue');
let but = doc.querySelector('.save');
let text = doc.querySelectorAll('.form_div_p');
let form = doc.querySelector('form')

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries())
    console.log(data);
    let all_f = Array.from(input).some(item => item.value.trim() === '');
    for ( let item of input) {
        if(all_f) {
        but.style.background = 'red';
        but.innerHTML = 'changes not saved'
        but.style.border = 'red';
        p_bl.forEach( item=>{
            item.style.color = 'red';
        })
        item.classList.add('red')
        text.forEach(item => {
            item.style.color = 'red';
            item.innerHTML = 'FILL IN '
        })
        } else {
            but.style.background = 'green'
            but.innerHTML = 'Changes Saved'
            but.style.border = 'green'
            item.classList.remove('red')
        p_bl.forEach( item=>{
            item.style.color = '#543FD3';
        })
        text.forEach(item => {
            item.style.color = '#595959';
            item.innerHTML = 'filled'
        })
        }
    // console.log(inp);
    
    } 
})

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let isValid = true;

//     // Проверяем каждый input с классом form_blue
//     input.forEach(input => {
//         if (input.value.trim()  === '') {
//             isValid = false;
//             input.style.border = '2px solid red';
//             input.nextElementSibling.style.color = 'red';
//         } else {
//             input.style.border = '2px solid #543FD3';
//             input.nextElementSibling.style.color = '#595959';
//         }
//     });

//     // Условие для показа alert или изменения цвета кнопки
//     if (isValid) {
//         alert('Отлично');
//     } else {
//         button.style.backgroundColor = 'red';
//         button.style.borderColor = 'red';
//     }
// });



