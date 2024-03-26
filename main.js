
var input1 = document.querySelector('.input1')
var input2 = document.querySelector('.input2')
var loginBtn = document.querySelector('.btnLogin')
var p1 = document.querySelector('.pE1');
var p2 = document.querySelector('.pE2');
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginBtn.addEventListener('click', function () {

        let input1Value = input1.value
        let input2Value = input2.value
        console.log(input1Value, input2Value)
        let dem = 0;
        if (input1Value == '') {
            dem++;
            p1.innerText = 'Please enter account'
            p1.classList.add('active')
        }
        else p1.classList.remove('active')
        if (input2Value == '') {
            dem++;
            p2.innerText = ' Please enter a password';
            p2.classList.add('active')
        }
        else p2.classList.remove('active')
        const formData = {
            login: input1Value,
            password: input2Value
        };
        if (dem == 0) {
            fetch('https://recruitment-api.pyt1.stg.jmr.pl/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (response.ok) {
                        return response.json(); // Chuyển đổi phản hồi JSON thành đối tượng JavaScript
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .then(data => {
                    // Xử lý phản hồi thành công
                    if (data.status === 'ok') {
                        window.location.href = 'home.html';
                    } else {
                        p1.innerText = 'Your account and password are invalid'
                        p1.classList.add('active')  
                    }
                })
                .catch(error => {
                    // Xử lý lỗi từ máy chủ hoặc lỗi mạng
                    console.error('Error:', error);
                });
        }
    });
});


// console.log(input1, input2, loginBtn)


var mat = document.querySelector('.mat');
var check = input2.hasAttribute('type', 'password');
mat.addEventListener('click', () => {
    if (check) {
        input2.setAttribute('type', 'text')
        check = false;
    }
    else {
        input2.setAttribute('type', 'password')
        check = true;
    }
    console.log(check)
})








