// Получаем элементы страницы
const area = document.getElementById('area');
const playerDisplay = document.getElementById('player');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');
const scoreDraw = document.getElementById('scoreDraw');

// Настройки игры
let currentPlayer = 'X'; // Игрок X начинает
let size = 3; // Размер поля 3x3

// Создаём игровое поле
function createGrid() {
    area.innerHTML = ''; // Очищаем поле
    area.style.gridTemplateColumns = `repeat(${size}, 50px)`; // Устанавливаем колонки

    const gameGrid = []; // Массив для клеток

    // Создаём клетки
    for (let i = 0; i < size; i++) {
        gameGrid[i] = []; // Строки
        for (let j = 0; j < size; j++) {
            gameGrid[i][j] = ''; // Пустое значение клетки

            const cell = document.createElement('div');
            cell.classList.add('cell'); // Класс для клетки

            // Когда нажимают на клетку
            cell.addEventListener('click', function() {
                makeMove(cell, i, j, gameGrid); // Делаем ход
            }, { once: true }); // Один раз

            area.appendChild(cell); // Добавляем клетку на страницу
        }
    }
}

// Обработка хода
function makeMove(cell, row, col, gameGrid) {
    gameGrid[row][col] = currentPlayer; // Записываем ход
    cell.textContent = currentPlayer; // Показываем игрока

    // Проверяем победителя или ничью
    if (checkWinner(gameGrid)) {
        updateScore(currentPlayer);
    } else if (isDraw(gameGrid)) {
        updateScore('draw');
    } else {
        // Меняем игрока
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        playerDisplay.textContent = currentPlayer; // Показываем текущего игрока
    }
}

// Проверка победителя
function checkWinner(grid) {
    // Проверяем строки
    for (let i = 0; i < size; i++) {
        if (grid[i].every(cell => cell === currentPlayer)) {
            return true;
        }
    }

    // Проверяем столбцы
    for (let j = 0; j < size; j++) {
        if (grid.every(row => row[j] === currentPlayer)) {
            return true;
        }
    }

    // Проверяем диагонали
    if (grid.every((row, i) => row[i] === currentPlayer)) return true;
    if (grid.every((row, i) => row[size - 1 - i] === currentPlayer)) return true;

    return false;
}

// Проверка ничьей
function isDraw(grid) {
    return grid.flat().every(cell => cell !== ''); // Все клетки заняты
}

// Обновляем счёт
function updateScore(winner) {
    if (winner === 'draw') {
        scoreDraw.textContent = +scoreDraw.textContent + 1;
        alert('Ничья!');
    } else if (winner === 'X') {
        scoreX.textContent = +scoreX.textContent + 1;
        alert('Победил X!');
    } else {
        scoreO.textContent = +scoreO.textContent + 1;
        alert('Победил O!');
    }
    createGrid(); // Перезапускаем игру
}

// Смена темы
document.querySelectorAll('.theme-button').forEach(button => {
    button.addEventListener('click', function() {
        document.body.className = button.dataset.theme;
    });
});

// Смена размера поля
document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', function() {
        size = +button.dataset.size;
        createGrid(); // Пересоздаём поле с новым размером
    });
});

// Запуск игры
createGrid();