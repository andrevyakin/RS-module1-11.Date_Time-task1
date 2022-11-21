const getDateFormat = (date, separator = ".") => {
    const add0 = number => ("0" + number).slice(-2);

    if (isNaN(Date.parse(date)))
    //Date.parse как я понял на mdn не рекомендуется к использованию, но альтернативу не нашел:
    //if (new Date(date).toString() === "Invalid Date") пробовал, но пропускат Date.now(), что не формат Date, а количество милисекунд с 01.01.1970.
        return "Ошибка. date - не является экземпляром класса Date.";

    date = new Date(date); //чтобы распрсить строки типа "2022.11.21" и new Date(Date.now()))
    return [add0(date.getDate()), add0(date.getMonth() + 1), date.getFullYear()].join(separator);
}

console.log(new Date(), getDateFormat(new Date(), "-"));
console.log(new Date(2023, 0, 1), getDateFormat(new Date(2023, 0, 1), "/"));
console.log("2022.11.21", getDateFormat("2022.11.21"));
console.log(new Date("November 21, 2022 16:06:00"), getDateFormat(new Date("November 21, 2022 16:06:00")));
console.log("November 21, 2022 16:06:00", getDateFormat("November 21, 2022 16:06:00"));
console.log(new Date("2022-11-21T16:07:03"), getDateFormat(new Date("2022-11-21T16:07:03")));
console.log(new Date(2022, 10, 21, 16, 8, 5), getDateFormat(new Date(2022, 10, 21, 16, 8, 5)));
console.log(Date.now(), getDateFormat(Date.now()));
console.log(new Date(Date.now()), getDateFormat(new Date(Date.now())));
console.log("Совсем не дата", getDateFormat("Совсем не дата"));
console.log(new Date(2023), getDateFormat(new Date(2023))); //Изначально преобразовывается к 1970.0.1
console.log(new Date(2023, 10), getDateFormat(new Date(2023, 10))); //Изначально преобразовывается к 2023.10.1
console.log("Без прараметров",getDateFormat());
console.log(new Date(1917, 10, 7), getDateFormat(new Date(1917, 10, 7)));