//Инструкции:

//1Смешайте в миске фарш, панировочные сухари, яйцо, горчицу, лук, соль и перец.
//2Сформируйте из фарша четыре круглых котлеты диаметром около 4 дюймов.
//3Нагрейте гриль или сковороду на среднем огне.
//4Обжарьте котлеты по 4 - 5 минут с каждой стороны, или пока они не станут золотисто - коричневыми и не прожарятся до желаемой степени.
//5Разделите булочки для гамбургеров пополам.
//6Намажьте нижнюю часть булочки майонезом.
//7Положите котлету на булочку.
//8Добавьте помидор, салат и сыр.
//9Накройте булочкой.
//10Подавайте сразу же.
//11Следуйте инструкциям для классического бургера, но добавьте жареный лук, обжаренный на гриле или сковороде до золотисто - коричневого цвета, перед тем, как добавить его на булочку.

export const burgers = [
    {
        "img": "./asset/classical.jpg",
        "title": "Классический бургер",
        "list": ["Говяжий фарш (80/20)", "Панировочные сухари", "Яйцо", "Дижонская горчица", "Лук", "Соль", "Перец"],
        "price": 100,
    },
    {
        "img": "./asset/beckon.jpg",
        "title": "Бургер с беконом",
        "list": ["Говяжий фарш (80/20)", "Панировочные сухари", "Яйцо", "Дижонская горчица", "Лук", "Соль", "Перец", "Бекон"],
        "price": 120,
    },
    {
        "img": "./asset/onion.jpg",
        "title": "Бургер с жареным луком",
        "list": ["Говяжий фарш (80/20)", "Панировочные сухари", "Яйцо", "Дижонская горчица", "Лук", "Соль", "Перец", "Жареный лук"],
        "price": 110,
    },
    {
        "img": "./asset/mushrooms.jpg",
        "title": "Бургер с грибами",
        "list": ["Говяжий фарш (80/20)", "Панировочные сухари", "Яйцо", "Дижонская горчица", "Лук", "Соль", "Перец", "Обжаренные грибы"],
        "price": 130,
    },
]

export const snacks = [
    {
        "img": "./asset/snacks/crostini-with-pesto-and-tomatoes.jpg",
        "title": "Кростини с песто и помидорами",
        "list": ["Багет", "Песто", "Помидоры", "Чеддер"],
        "price": 50,
    },
    {
        "img": "./asset/snacks/kesadilya-kesadilya-s-syrom-i-kolbasoi.jpg",
        "title": "Кесадила с сыром",
        "list": ["Тортильи", "Сыр", "Ваш любимый соус"],
        "price": 40,
    },
    {
        "img": "./asset/snacks/Хумус-с-питой.jpg",
        "title": "Хумус с питой",
        "list": ["Хумус", "Пита"],
        "price": 30,
    },
    {
        "img": "./asset/snacks/guacamole-with-chips.jpg",
        "title": "Гуакамоле с чипсами",
        "list": ["Авокадо", "Лук", "Лимонный сок", "Чеснок", "Чили", "Чипсы"],
        "price": 40,
    },
    {
        "img": "./asset/snacks/ciaciki.jpg",
        "title": "Цацики",
        "list": ["Огурцы", "Йогурт", "Чеснок", "Укроп", "Оливковое масло"],
        "price": 30,
    },
    {
        "img": "./asset/snacks/wings-in-BBQ-sauce.jpg",
        "title": "Крылышки в соусе барбекю",
        "list": ["Крылышки", "Соус барбекю"],
        "price": 50,
    },
    {
        "img": "./asset/snacks/nachos.jpg",
        "title": "Начос",
        "list": ["Тортильи", "Сыр", "Ваш любимый соус", "Ваши любимые ингредиенты"],
        "price": 40,
    },
    {
        "img": "./asset/snacks/cheese-balls.jpg",
        "title": "Сырные шарики",
        "list": ["Сыр", "Мука", "Яйцо", "Хлебные крошки"],
        "price": 30,
    },
    {
        "img": "./asset/snacks/Tartlets.jpg",
        "title": "Тарталетки",
        "list": ["Тесто", "Начинка"],
        "price": 30,
    },
    {
        "img": "./asset/snacks/Funchoza.jpg",
        "title": "Фунчоза",
        "list": ["Фунчоза", "Овощи", "Филе курицы или креветки"],
        "price": 40,
    },
    {
        "img": "./asset/snacks/Samosa.jpg",
        "title": "Самоса",
        "list": ["Тесто", "Начинка (картофель, овощи, мясо, сыр)"],
        "price": 30,
    },
]

export const main_dishes = [
    {
        "img": "./asset/main_dishes/Beef-steak.jpg",
        "title": "Стейк из говядины",
        "list": ["Говядина", "Соль", "Перец"],
        "price": 700,
    },
    {
        "img": "./asset/main_dishes/Salmon-steak.jpg",
        "title": "Стейк из лосося",
        "list": ["Лосось", "Соль", "Перец"],
        "price": 600,
    },
    {
        "img": "./asset/main_dishes/jarenaya_kurinaya_grudka.jpg",
        "title": "Жареная куриная грудка",
        "list": ["Куриная грудка", "Соль", "Перец"],
        "price": 400,
    },
    {
        "img": "./asset/main_dishes/Pasta-with-tomato-sauce.jpg",
        "title": "Паста с томатным соусом",
        "list": ["Паста", "Томаты", "Чеснок", "Оливковое масло"],
        "price": 300,
    },
    {
        "img": "./asset/main_dishes/picca-margarita-v-domashnix-usloviyax.jpg",
        "title": "Пицца Маргарита",
        "list": ["Тесто для пиццы", "Помидоры", "Моцарелла", "Базилик"],
        "price": 500,
    },
    {
        "img": "./asset/main_dishes/Steak-with-fries.jpg",
        "title": "Стейк с картофелем фри",
        "list": ["Стейк", "Картофель фри"],
        "price": 800,
    },
    {
        "img": "./asset/main_dishes/Beef-curry.jpg",
        "title": "Говяжий карри",
        "list": ["Говядина", "Картофель", "Морковь", "Лук", "Карри"],
        "price": 600,
    },
    {
        "img": "./asset/main_dishes/kutitsa-tikka-masala.jpg",
        "title": "Курица тикка масала",
        "list": ["Курица", "Йогурт", "Карри"],
        "price": 500,
    },
]


export const desserts = [
    {
        "img": "./asset/desserts/Tiramisu.jpg",
        "title": "Тирамису",
        "list": ["Маскарпоне", "Савоярди", "Кофе", "Какао"],
        "price": 400,
    },
    {
        "img": "./asset/desserts/chizkejk-nyu-jork.jpg",
        "title": "Чизкейк",
        "list": ["Творог", "Сливки", "Яйца", "Желатин"],
        "price": 500,
    },
    {
        "img": "./asset/desserts/Ecler.jpg",
        "title": "Эклер",
        "list": ["Тесто фило", "Крем заварной", "Шоколадная глазурь"],
        "price": 300,
    },
    {
        "img": "./asset/desserts/Profiteroles.jpg",
        "title": "Профитроли",
        "list": ["Тесто фило", "Крем заварной", "Шоколадная глазурь"],
        "price": 300,
    },
    {
        "img": "./asset/desserts/Pancakes.jpg",
        "title": "Блины",
        "list": ["Мука", "Молоко", "Яйца", "Соль", "Сахар"],
        "price": 200,
    },
    {
        "img": "./asset/desserts/vafli.jpg",
        "title": "Вафли",
        "list": ["Мука", "Молоко", "Яйца", "Соль", "Сахар"],
        "price": 200,
    },
    {
        "img": "./asset/desserts/icecream.jpg",
        "title": "Мороженое",
        "list": ["Молоко", "Сливки", "Сахар", "Яйца", "Наполнители"],
        "price": 300,
    },
    {
        "img": "./asset/desserts/Fruit-salad.jpg",
        "title": "Фруктовый салат",
        "list": ["Фрукты"],
        "price": 200,
    },
]


export const drinks = [
    {
        "img": "./asset/drinks/Cappuccino.jpg",
        "title": "Капучино",
        "list": ["Эспрессо", "Молоко", "Пена"],
        "price": 200,
    },
    {
        "img": "./asset/drinks/Latte.jpg",
        "title": "Латте",
        "list": ["Эспрессо", "Молоко"],
        "price": 150,
    },
    {
        "img": "./asset/drinks/espresso.jpg",
        "title": "Эспрессо",
        "list": ["Молотый кофе"],
        "price": 100,
    },
    {
        "img": "./asset/drinks/Hot-chocolate.jpg",
        "title": "Горячий шоколад",
        "list": ["Молоко", "Шоколад", "Сахар"],
        "price": 250,
    },
    {
        "img": "./asset/drinks/Green-tea.jpg",
        "title": "Зеленый чай",
        "list": ["Зеленый чай"],
        "price": 150,
    },
    {
        "img": "./asset/drinks/Black-tea.jpg",
        "title": "Черный чай",
        "list": ["Черный чай"],
        "price": 100,
    },
    {
        "img": "./asset/drinks/Black-coffee.jpg",
        "title": "Черный кофе",
        "list": ["Молотый кофе"],
        "price": 100,
    },
    {
        "img": "./asset/drinks/Soda.jpg",
        "title": "Газировка",
        "list": ["Газированная вода", "Натуральные или искусственные ароматизаторы"],
        "price": 100,
    },
]
