1 task 
    function Exponentiation(a, b) {
      if (b == 1) {
        return a;
      } else {
        return a * Exponentiation(a, b - 1);
      }
    }
    alert(
      "Написать функцию возведения числа в степень, используя рекурсию."
    );
  
    let x = 0;
    let y = 0;
    do {
      x = +prompt("Введите число, которое будее возводиться в степень ");
      y = Math.trunc(+prompt("Введите степень, в которую надо возвести число "));
    } while (y < 1);
    alert(Exponentiation(x, y));
  
  

2task 
function GreatestCommonDivisor(a, b) {
    if (a == 0) {
      return b;
    } else {
      return GreatestCommonDivisor(b % a, a);
    }
  }

  alert(
    "Написать функцию поиска наибольшего делителя, используя рекурсию."
  );

  let x = +prompt("Введите первое число: ");
  let y = +prompt("Введите второе число: ");

  alert("Наибольший общий делитель: " + GreatestCommonDivisor(x, y));


3task 
function MaxDigitNumber(a, maxDigit) {
    if (a == 0) {
      return maxDigit;
    } else {
      if (maxDigit < a % 10) {
        maxDigit = a % 10;
      }
      return Math.trunc(MaxDigitNumber(a / 10, maxDigit));
    }
  }

  alert(
    "Написать функцию для поиска максимальной цифры в числе, использую рекурсию."
  );
  let y = 0;
  let x = Math.trunc(Math.abs(+prompt("Введите число: ")));
  alert("Наибольшая цифра в данном числе " + MaxDigitNumber(x, y));


4task 
function PrimeNumber(a, b) {
    if (a % b == 0 && b >= 2) {
      return alert("Данное число не является простым.");
    } else {
      if (b == 1) {
        return alert("Да, это простое число.");
      }
      return PrimeNumber(a, b - 1);
    }
  }
  alert(
    "Написать функцию, которая определяет, простое ли переданное число. Использовать рекурсию."
  );

  let x = 2;

  do {
    x = Math.trunc(Math.abs(+prompt("Введите натуральное число больше 2: ")));
  } while (x <= 2);
  let y = x - 1;
  PrimeNumber(x, y);


5task 
function Multiplier(a, b, c) {
    if (b > a ** 0.5) {
      c.push(a);
      return c;
    } else if (a % b == 0) {
      c.push(b);
      Multiplier(a / b, b, c);
    } else {
      Multiplier(a, b + 1, c);
    }
    return c.join("*");
  }
  alert(
    "Написать функцию, для вывода всех множителей переданного числа в возрастающем порядке. Например: число 18 - множители 2 * 3 * 3."
  );
  let x = Math.trunc(+prompt("Введите число: "));
  let y = 2;
  let z = [];

  alert(Multiplier(x, y, z));

  6task 
  function Fibonacci(a) {
    if (a == 1 || a == 2) {
      return 1;
    }
    return Fibonacci(a - 1) + Fibonacci(a - 2);
  }

  alert(
    "Задание 6: Написать функцию рекурсии, которая возвращает число Фибоначи по переданному порядковому номеру. Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13... Ряд основывается на том, что кажое число равно сумме двух предыдущих чисел. Например: порядковый номер 3 - число 2, порядковый номер 6 - число 8."
  );

  do {
    x = Math.trunc(
      +prompt("Введите порядковый номер числа из ряда Фибоначчи: ")
    );
  } while (x < 1);

  alert(Fibonacci(x));
