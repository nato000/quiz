document.addEventListener('DOMContentLoaded', () => { // отработчик событий, который отслеживает загрузку контента
    'use-strict';  //строгий синтаксис!

    const btnOpenModal = document.querySelector('#btnOpenModal'); //создаем переменную кнопки тест
    const modalBlock = document.querySelector('#modalBlock'); //создаем переменную модального окна
    const closeModal = document.querySelector('#closeModal'); //создаем переменную кнопки закрыть
    const questionTitle = document.querySelector('#question'); //создаем переменную вопрос
    const formAnswers = document.querySelector('#formAnswers'); //создаем переменную формы ответа
    const prevButton = document.querySelector('#prev'); // кнопки модалки
    const nextButton = document.querySelector('#next');

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

            if (numberQuestion >= 0 && numberQuestion <= questions.length - 1) { // условие отрисовки кнопок next и prev 
                questionTitle.textContent = `${questions[indexQuestion].question}`; // меняем текст через переменную
                renderAnswers(indexQuestion);
                nextButton.classList.remove('d-none'); //показать кнопки
                prevButton.classList.remove('d-none');
            }

            if (numberQuestion === 0) { // условия скрытия кнопки prev
                prevButton.classList.add('d-none');
            }

            if (numberQuestion === questions.length - 1) { // условия скрытия кнопки next                        
                nextButton.classList.add('d-none');
            }
        }

        renderQuestions(numberQuestion);

        nextButton.onclick = () => { // обработчик кнопки Далее
            numberQuestion++;
            renderQuestions(numberQuestion);
        }

        prevButton.onclick = () => { // обработчик кнопки Назад
            numberQuestion--;
            renderQuestions(numberQuestion);
        }
    }

})