/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Ваше имя?",
        ["Даник", "Илья", "Саня", "Ден", "Вова", "Вадик"],
        [
            "this.score.danik+=2",
            "this.score.ilya+=2",
            "this.score.sanya+=2",
            "this.score.den+=2",
            "this.score.vovan+=2",
            "this.score.vadik+=2"
        ]
    ],
    [
        "Где вы живете?",
        ["Россия", "Европа"],
        [
            "this.score.ilya++; this.score.vadik++; this.score.sanya++; this.score.vovan++; this.score.den--; this.score.danik--",
            "this.score.ilya--; this.score.vadik--; this.score.sanya--; this.score.vovan--; this.score.den++; this.score.danik++"
        ]
    ],
    [
        "Что такое Юриспруденция?",
        ["наука, изучающая свойства государства и права, совокупность правовых знаний", "Напрудить кому-нить на ебало", "Бля пацаны, мб в доту?"],
        [
            "this.score.ilya++; this.score.danik++; this.score.den+=2",
            "this.score.vadik++;this.score.sanya++;this.score.den-=2",
            "this.score.vovan++;this.score.den-=2"
        ]
    ],

    [
        "Включен ли у тебя бот в конфе?",
        ["Да", "Нет"],
        [
            "this.score.vadik++; this.score.sanya++; this.score.den++; this.score.danik++", 
            "this.score.ilya++; this.score.vovan+=4"
        ]
    ],
    [
        "Как насчёт fisting, leatherman?",
        ["You can do now", 'Получается нет'],
        [
            "this.score.vadik++; this.score.sanya++; this.score.den++; this.score.danik++;this.score.ilya--;",
            "this.score.ilya++; this.score.vovan++; this.score.den--; this.score.danik--; this.score.vadik--; this.score.sanya--;"
        ]
    ],
    [
        "На вас напали",
        ["Нам нужны роевики, споровики и плёточники", "Нужно вызвать кайдариновые монолиты и фотонные пушки", "Возвести планетарную крепость, бункеры и подвести осадные танки"],
        [
            "this.score.sanya+=2; this.score.ilya--; this.score.den--", 
            "this.score.ilya++; this.score.den--; this.score.sanya-=2", 
            "this.score.den++; this.score.ilya--; this.score.sanya-=2"
        ]
    ],
    [
        "Королева приказывает вам обрушить свой гнев на миры доминиона",
        ["Должен подчиниться", "Пока она собирает, я следую", "Её псионная сила на меня не действует"],
        [
            "this.score.sanya++; this.score.ilya--", 
            "this.score.vadik++; this.score.ilya--", 
            "this.score.ilya++; this.score.sanya--"
        ]
    ],
    [
        "Перед вами высший тамплиер",
        ["Сильная эссенция, но я не могу её собрать", "Уничтожить протоссов", "Стать архонтом", "Спросить как дела у Артаниса"],
        [
            "this.score.vadik++; this.score.ilya--; this.score.den--", 
            "this.score.sanya++; this.score.ilya--; this.score.den--", 
            "this.score.ilya++; this.score.den--; this.score.sanya--", 
            "this.score.den++; this.score.ilya--; this.score.sanya--"
        ]
    ],
    [
        "Вы заметили морпеха который не подчиняется вашему приказу",
        ["Уничтожить мимикрида", "Сделать ему выговор"],
        [
            "this.score.den++", 
            "this.score.den--"
        ]
    ],
    [
        "На вас движется стая саранчидов",
        ["Много эссенции, можно собрать", "Приказать им лететь дальше", "Попытаться уничтожить фениксами пока они в воздухе"],
        [
            "this.score.vadik++; this.score.ilya--", 
            "this.score.sanya++; this.score.ilya--", 
            "this.score.ilya++; this.score.sanya--"
        ]
    ],
    [
        "Вы видите изначальный омут рождения, что вы сделаете?",
        ["Соберу много эссенции", "Моё тело не выдержит такую мощь", "Попытаюсь уничтожить это место"],
        [
            "this.score.vadik++; this.score.ilya--", 
            "this.score.sanya++; this.score.ilya--", 
            "this.score.ilya++; this.score.sanya--"
        ]
    ],
    [
        "Вы сильно устали сегодня",
        ["Пойду в бар у Джорея", "Рой не знает усталости", "Слабые, падут первыми"],
        [
            "this.score.den++; this.score.sanya--", 
            "this.score.sanya++; this.score.den--", 
            "this.score.danik++; this.score.den--; this.score.sanya--"
        ]
    ],
    [
        "Перед вами иерарх протоссов",
        ["Вызвать на Рак-шир", "Поприветствовать фразой «Эн Таро Тассадар»", "Отправить рой в атаку"],
        [
            "this.score.danik++; this.score.sanya--", 
            "this.score.ilya++; this.score.sanya--", 
            "this.score.sanya++; this.score.ilya--"
        ]
    ],
    [
        "Зератул и Воразун",
        ["Связаны Кхалой", "Муж и жена", "Тёмные тамплиеры", "Новый вид зергов"],
        [
            "this.score.ilya--", 
            "this.score.ilya-=2", 
            "this.score.ilya++", 
            "this.score.ilya-=3"
        ]
    ],
    [
        "В этих местах много источников терразин",
        ["Защищать месторождения от инопланетных захватчиков", "Добыть как можно больше, пока эти Талдаримские живчики не успели ничего понять"],
        [
            "this.score.danik++; this.score.den--", 
            "this.score.den++"
        ]
    ],
    [
        "В лаборатории ставят опыты над бруталиском",
        ["Бруталиск – вершина эволюции, нужен рою", "Поинтересоваться у парней, что интересного они узнали", "Бруталиск очень опасен лучше уничтожить его вместе с терранской лабораторией"],
        [
            "this.score.sanya++; this.score.ilya--; this.score.den--", 
            "this.score.den++; this.score.ilya--; this.score.sanya--", 
            "this.score.ilya++; this.score.den--; this.score.sanya--"
        ]
    ],
    [
        "Как зовут Свонна?",
        ["Габриэль", "Джеймс", "Рори"],
        [
            "this.score.den--", 
            "this.score.den--", 
            "this.score.den++"
        ]
    ],
    [
        "Феникс - ",
        ["Тамплиер", "Неразим", "Чистильщик", "Талдарим"],
        [
            "this.score.ilya--", 
            "this.score.ilya--", 
            "this.score.ilya++", 
            "this.score.ilya--"
        ]
    ],
    [
        "Вам необходимо догнать материнский корабль протоссов",
        ["Использую гиперпрыжок", "Перехвачу его, внедрив паразит", "Отправлю челнок с посланием"],
        [
            "this.score.den++; this.score.sanya--; this.score.ilya--", 
            "this.score.sanya++; this.score.ilya--; this.score.den--", 
            "this.score.ilya++; this.score.den--; this.score.sanya--"
        ]
    ],
    [
        "Зерги заразили командные центры Вирофагами",
        ["Нужно уничтожить всех, чтобы эпидемия не распространилась", "Сжечь только зараженные строения и спасти как можно больше людей"],
        [
            "this.score.ilya++; this.score.den--", 
            "this.score.den++; this.score.ilya--"
        ]
    ],
    [
        "Пустота…",
        ["Лучший друг человека", "Холодна"],
        [
            "this.score.ilya--", 
            "this.score.ilya++"
        ]
    ],
    [
        "Как вы поприветствуете Джеймса Рейнора",
        ["Друг Рейнор", "Привет, ковбой", "Мне нужна твоя эссенция"],
        [
            "this.score.ilya++; this.score.den--", 
            "this.score.den++; this.score.ilya--", 
            "this.score.vadik++; this.score.ilya--; this.score.den--"
        ]
    ],
    [
        "Вы собрали много кредитов на продаже терразина",
        ["Нанять лучших головорезов доминиона", "Усовершенствовать технологии", "Отправить их в фонд Мёбиуса для изучения гибридов"],
        [
            "this.score.den++", 
            "this.score.den+=2", 
            "this.score.den--"
        ]
    ],
    [
        "Амун собирается уничтожить Айур",
        ["Помочь протоссам в битве", "Послать челноки на Шакурас и запросить помощь Золотой Армады", "Вызвать Флот Смерти и дать Амуну бой"],
        [
            "this.score.den++; this.score.ilya--", 
            "this.score.ilya++; this.score.sanya--", 
            "this.score.danik++; this.score.sanya--"
        ]
    ],
    [
        "Зачем вы прилетели на Чар?",
        ["Выследить и убить королеву клинков", "Найти Керриган и убедить вернуться на Мар-Сару", "Искупаться в слизи"],
        [
            "this.score.ilya++; this.score.den--; this.score.sanya-=2", 
            "this.score.den++; this.score.ilya--; this.score.sanya-=2", 
            "this.score.sanya+=2; this.score.ilya--; this.score.den--"
        ]
    ]
];
/* Данные для экранов резултата для каждой расы */
const results = {
    'sanya': {
        name: "Саня",
        description: "ВЫ НАСТОЯЩИЙ ПАТРИОТ СВОЕЙ СТРАНЫ",
        quote1: "-Я на учения, пацаны",
        quote2: "-Диониииис Бориииисооовиииич Казаааанцеееееев.",
        author: "(Саня)",
        points: "100"
    },
    'vadik': {
        name: "Вадик",
        description: "Вы реально токсик!",
        quote1: "-Пацаны, бля, у меня сопля... Всё я её снял.",
        quote2: "",
        author: "(Вадик)",
        points: "120"
    },
    'den': {
        name: "Дионис",
        description: "Вас не интересуют проблемы fucking slave, только она... Только квадратная хуйня.",
        quote1: "-Да... Я знаю кто такая Даша Дошик.",
        quote2: "-Мне нужен доступ к номеру Юлии Навальной",
        author: "(Полковник Гусинский)",
        points: "90"
    },
    'ilya': {
        name: "Илья",
        description: "Вы типикал Илюха, скорее всего вы сопьетесь и умрете, но постарайтесь сначала выполнить все квесты по работе.",
        quote1: "-Брат, займи 70к.",
        quote2: "-А ты любишь сладкое?",
        author: "(JID)",
        points: "80"
    },
    'danik': {
        name: "Данияр",
        description: "У вас дома нет плазмы, но она вам и не нужна ведь у вас есть хороший друг Холера, жаль что он остался в Омске, а вы сидите на берегу в Парижской области и ловите рыбу.",
        quote1: "-хаХАХАхаХАХАХХАхахаха.",
        quote2: "-Пацаны мб в доту поруиним?",
        author: "(Даник)",
        points: "140"
    },
    'vovan': {
        name: "Вован (угадай какой)",
        description: "Дорогу осилит идущий.",
        quote1: "-Пацаны, РОСА!.",
        quote2: "-Я не двойной пидарас, я тройной гондон",
        author: "(Бигкек)",
        points: "200"
    }
}