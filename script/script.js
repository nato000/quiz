document.addEventListener('DOMContentLoaded', () => { // отработчик событий, который отслеживает загрузку контента
    'use-strict';  //строгий синтаксис!

    const btnOpenModal = document.querySelector('#btnOpenModal'); //создаем переменную кнопки тест
    const modalBlock = document.querySelector('#modalBlock'); //создаем переменную модального окна
    const closeModal = document.querySelector('#closeModal'); //создаем переменную кнопки закрыть
    const questionTitle = document.querySelector('#question'); //создаем переменную вопрос
    const formAnswers = document.querySelector('#formAnswers'); //создаем переменную формы ответа
    const prevButton = document.querySelector('#prev'); // кнопки модалки
    const nextButton = document.querySelector('#next');
    const sendButton = document.querySelector('#send'); //отправить результат опроса    

    const questions = [
        {
            question: "Какого цвета бургер Вы хотите?",
            answers: [
                {
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный',
                    url: './image/burgerBlack.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Из какого мяса котлета?",
            answers: [
                {
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [
                {
                    title: 'Помидор',
                    url: './image/tomato.png'
                },
                {
                    title: 'Огурец',
                    url: './image/cucumber.png'
                },
                {
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
                    title: 'Лук',
                    url: './image/onion.png'
                }
            ],
            type: 'checkbox'
        },
        {
            question: "Добавить соус?",
            answers: [
                {
                    title: 'Чесночный',
                    url: './image/sauce1.png'
                },
                {
                    title: 'Томатный',
                    url: './image/sauce2.png'
                },
                {
                    title: 'Горчичный',
                    url: './image/sauce3.png'
                }
            ],
            type: 'radio'
        }
    ];


    btnOpenModal.addEventListener('click', () => { //обработка нажатия       
        modalBlock.classList.add('d-block'); //добавить класс d-block
        playTest(); //вызов функции запуска теста      
    })

    closeModal.addEventListener('click', () => { //обработка нажатия
        modalBlock.classList.remove('d-block'); //удаляем класс d-block
    })

    const playTest = () => { //функция запуска теста
        const obj = {}; //варианты ответов
        let = numberQuestion = 0; //переменная с номером вопроса

        const renderAnswers = (index) => { // цикл ответов
            questions[index].answers.forEach((answer) => { // замена for на foreach
                const answerItem = document.createElement('div'); // создать div при каждой итерации

                answerItem.classList.add('answers-item', 'd-flex', 'justify-content-center'); // стилизация               
                answerItem.innerHTML = ` 
                    <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none" value="${answer.title}">
                    <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="${answer.url}" alt="burger">
                        <span id="title-burger">${answer.title}</span> 
                    </label>
                `; //заполнить блоки
                formAnswers.appendChild(answerItem); //встроить блоки в форму
            })
        }

        const renderQuestions = (indexQuestion) => { // функция отрисовки вопросов
            formAnswers.innerHTML = ''; // очистка предыдущих ответов          

            switch (true) {
                case (numberQuestion === 0): // условия скрытия кнопки prev
                    questionTitle.textContent = `${questions[indexQuestion].question}`; // меняем текст через переменную
                    renderAnswers(indexQuestion);
                    prevButton.classList.add('d-none');
                    break;

                case (numberQuestion > 0 && numberQuestion < questions.length): // условие отрисовки кнопок next и prev 

                    questionTitle.textContent = `${questions[indexQuestion].question}`; // меняем текст через переменную
                    renderAnswers(indexQuestion);
                    nextButton.classList.remove('d-none'); //показать кнопки
                    prevButton.classList.remove('d-none');
                    break;

                case (numberQuestion === questions.length): // условия скрытия кнопки next                        
                    questionTitle.textContent = ''; // очищать title            
                    nextButton.classList.add('d-none');
                    prevButton.classList.add('d-none');
                    sendButton.classList.remove('d-none'); // отобразить кнопку Отправить

                    //встроить окно ввода номера телефона
                    formAnswers.innerHTML = ` 
                    <div class="form-group">
                        <label for="numberPhone">Введите номер телефона</label>
                        <input type="phone" class="form-control" id="numberPhone" placeholder="+38-099-999-99-99">
                    </div>               
                `;
                    const numberPhone = document.querySelector('#numberPhone'); // запрет ввода букв
                    numberPhone.addEventListener('input', (event) => {
                        event.target.value = event.target.value.replace(/[^0-9+-]/, ''); // регулярное выражение
                    });
                    break;

                case (numberQuestion == questions.length + 1):
                    formAnswers.textContent = 'Спасибо за пройденный тест. Менеджер скоро свяжется с вами.';
                    for (let key in obj) { //метод перебора объектов
                        let newObj = {};
                        newObj[key] = obj[key];
                        finalAnswers.push(newObj); //заполнить finalAnswers
                    }

                    sendButton.classList.add('d-none'); //удалять send на последней странице

                    setTimeout(() => {
                        modalBlock.classList.remove('d-block');                        
                    }, 2000);
                    break;
            }
        }
        renderQuestions(numberQuestion);

        const checkAnswer = () => { //функция сбора ответов
            const obj = {};
            const finalAnswers = []; //переменная для ответов пользователя
            const inputs = [...formAnswers.elements].filter((input) => input.checked || input.id === 'numberPhone'); //спред оператор, массив данных выбранных элементов формы

            inputs.forEach((input, index) => { //перебор массива
                if (numberQuestion >= 0 && numberQuestion <= questions.length - 1) {
                    obj[`${index}_${questions[numberQuestion].question}`] = input.value;
                }

                if (numberQuestion === questions.length) { //если не вопрос, то имя объекта равно номер телефона
                    obj[`Номер телефона`] = input.value;
                }
            })
            finalAnswers.push(obj);
        }

        nextButton.onclick = () => { // обработчик кнопки Далее
            checkAnswer(); //вызов
            numberQuestion++;
            renderQuestions(numberQuestion);
        }

        prevButton.onclick = () => { // обработчик кнопки Назад
            numberQuestion--;
            renderQuestions(numberQuestion);
        }

        sendButton.onclick = () => { // отправить
            numberQuestion++;
            renderQuestions(numberQuestion);
            checkAnswer();
        }
    }

})