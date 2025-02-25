function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Обидва числа мують бути типу number");
    }
    if (denominator === 0) {
        throw new Error("Не можна ділити на нуль");
    }
    return numerator / denominator;
}


try {
    console.log(divide(10, 2)); // 5
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(10, 0)); // Не можна ділити на нуль
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide('10', 2)); // Обидва числа мують бути типу number
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(10, '2')); // Обидва числа мують бути типу number
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}
