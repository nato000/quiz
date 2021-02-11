document.addEventListener('DOMContentLoaded', () => { // отработчик событий, который отслеживает загрузку контента
    'use-strict';  //строгий синтаксис!

    const btnOpenModal = document.querySelector('#btnOpenModal'); //создаем переменную кнопки тест
    const modalBlock = document.querySelector('#modalBlock'); //создаем переменную модального окна
    const closeModal = document.querySelector('#closeModal'); //создаем переменную кнопки закрыть
    const questionTitle = document.querySelector('#question'); //создаем переменную вопрос
    const formAnswers = document.querySelector('#formAnswers'); //создаем переменную формы ответа

    btnOpenModal.addEventListener('click', () => { //обработка нажатия       
        modalBlock.classList.add('d-block'); //добавить класс d-block
        playTest(); //вызов функции запуска теста      
    })

    closeModal.addEventListener('click', () => { //обработка нажатия
        modalBlock.classList.remove('d-block'); //удаляем класс d-block
    })

    const playTest = () => { //функция запуска теста
        renderQuestions = () => {
            questionTitle.textContent = `Какого цвета бургер вы хотите?`;

            const name = "Стандарт"; //создаем переменную 1
            const img = "./image/burger.png"; //создаем переменную 2

            //меняем текст через переменную
            formAnswers.innerHTML = `
            <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${img}" alt="burger">
                  <span>${name}</span>
                </label>
              </div>                    
            `;
        }; //вызов рендеринга
        renderQuestions();
    }

})