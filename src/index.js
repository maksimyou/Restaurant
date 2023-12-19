import { burgers, snacks, main_dishes, desserts, drinks } from './text.js'
const arrImg = ['./asset/imgMain/XXXL.webp', './asset/imgMain/XXXL (1).webp', './asset/imgMain/XXXL (2).webp', './asset/imgMain/XXXL (3).webp', './asset/imgMain/XXXL (4).webp', './asset/imgMain/XXXL (5).webp']
class Foundation {
    wrapp = this.createElement('wrap-container', 'div')
    header = this.createElement('header-container', 'div')
    headerContent = this.createElement('header-content', 'div')
    homeLink = this.createElement(['home-link', 'active'], 'div', 'Главная')
    menuLink = this.createElement('menu-link', 'div', 'Меню')
    contactsLink = this.createElement('contacts-link', 'div', 'Контакты')
    navArr = [this.homeLink, this.menuLink, this.contactsLink]
    home = new Home()
    menu = new Menu()
    constacts = new Contancts()
    constructor(root) {
        root = root
    }

    activeNav(event) {
        this.navArr.forEach(el => {
            el.classList.remove('active')
        })
        event.target.classList.add('active')
    }

    generationHeader() {
        this.homeLink.addEventListener('click', (e) => {
            this.activeNav(e)
            Fond.addPage(Fond.home.generationHome())
        });

        this.menuLink.addEventListener('click', (e) => {
            this.activeNav(e)
            Fond.addPage(Fond.menu.generationMenu())
        });
        this.contactsLink.addEventListener('click', (e) => {
            this.activeNav(e)
            Fond.addPage(Fond.constacts.generationContancts())
        });
        this.headerContent.append(this.homeLink, this.menuLink, this.contactsLink)
        this.header.append(this.headerContent)
        return this.header;
    }

    addPage(wrappElement) {
        this.wrapp.innerHTML = '';
        this.wrapp.append(wrappElement)
    }


    createElement(selector, tag, text = '') {
        const elem = document.createElement(tag);
        if (Array.isArray(selector)) {
            elem.classList.add(...selector)
        } else {
            elem.classList.add(selector)
        }
        if (tag === 'img') {
            elem.src = text;
        } else {
            elem.textContent = text;
        }
        return elem;
    }


}



class Home {
    home = this.createElement(['main-container', 'animate__animated', 'animate__fadeIn'], 'div')
    title = this.createElement('main-title', 'div', ' Добро пожаловать в  Пикник на Облаках!')
    current = 0
    discriptionAndImage = this.createElement('main-discription-and-image', 'div')
    discription = this.createElement('main-discription', 'div', `Ресторан Пикник на Облаках - это уютное место, где вы можете насладиться вкусной едой и приятно провести время. Мы предлагаем широкий выбор блюд европейской и азиатской кухни, приготовленных из свежих и качественных продуктов.
    Наши повара - настоящие мастера своего дела, которые любят готовить и создавать кулинарные шедевры. Они используют только самые свежие ингредиенты, чтобы каждый ваш ужин был незабываемым.
    Наш интерьер выполнен в современном стиле, который создает атмосферу уюта и комфорта. Мы предлагаем различные варианты рассадки, чтобы вы могли выбрать то, что вам больше всего подходит.
    Мы приглашаем вас посетить наш ресторан и убедиться в том, что мы предлагаем вам лучшее!`)
    imageNav = this.createElement('main-image-nav', 'div')
    imageNext = this.createElement('main-image-next', 'img', './asset/next-icon.png')
    imagePrev = this.createElement('main-image-prev', 'img', './asset/next-icon.png')
    image = this.createElement(['main-image', 'animate__animated', 'animate__fadeIn'], 'img', arrImg[this.current])
    reserve = this.createElement('main-reserve', 'div', 'Забронируйте столик уже сегодня и насладитесь вкусной едой и приятным общением в ресторане Пикник на Облаках!')
    btnReserve = this.createElement('main-reserve-btn', 'div', 'Забронировать')
    reserver = new Reserve()

    generationHome() {

        this.imageNext.addEventListener('click', () => {
            this.current++;
            if (this.current > arrImg.length - 1) {
                this.current = 0
            }
            this.image.src = arrImg[this.current];
        })
        this.imagePrev.addEventListener('click', () => {
            this.current--;
            if (this.current < 0) {
                this.current = arrImg.length - 1
            }
            this.image.src = arrImg[this.current];
        })
        this.imageNav.append(this.image, this.imageNext, this.imagePrev)
        this.discriptionAndImage.append(this.discription, this.imageNav)
        this.btnReserve.addEventListener('click', () => {
            document.body.append(this.reserver.generationReserve())
        })
        this.home.append(this.title, this.discriptionAndImage, this.reserve, this.btnReserve)
        return this.home;
    }

    createElement(selector, tag, text = '') {
        const elem = document.createElement(tag);
        if (Array.isArray(selector)) {
            elem.classList.add(...selector)
        } else {
            elem.classList.add(selector)
        }
        if (tag === 'img') {
            elem.src = text;
        } else {
            elem.textContent = text;
        }
        return elem;
    }

}



class Menu {
    menu = this.createElement(['menu-container', 'animate__animated', 'animate__fadeIn'], 'div')
    menuContent = this.createElement('menu-content', 'div')

    constructor() {

    }


    createCard(img, title, list, price) {
        const card = this.createElement('menu-card', 'div');
        const cardImgWrap = this.createElement('menu-card-wrap', 'div');
        const cardImg = this.createElement('menu-card-img', 'img', img);
        const cardTitle = this.createElement('menu-card-title', 'div', title);
        const cardIngrList = this.createElement('menu-card-list', 'ul');
        list.forEach(e => {
            cardIngrList.append(this.createElement('list-item-ingr', 'li', e))
        });
        const cardBtnPrice = this.createElement('menu-card-btn-price', 'div');
        const cardBtn = this.createElement('menu-card-btn', 'div', "Подробнее");
        const cardPrice = this.createElement('menu-card-price', 'div', price + ' руб');
        cardImgWrap.append(cardImg);
        cardBtnPrice.append(cardBtn, cardPrice);
        card.append(cardImgWrap, cardTitle, cardIngrList, cardBtnPrice);
        return card;
    }

    createCategory(arr) {
        //const wrappCategori = this.createElement('menu-categori-list', 'div');
        const menuContent = this.createElement(['menu-categori-items', 'animate__animated', 'animate__fadeIn'], 'div');
        arr.forEach(e => {
            menuContent.append(this.createCard(e.img, e.title, e.list, e.price))
        })
        //wrappCategori.append(menuContent)
        return menuContent
    }

    switchActiveCategori(arr, elem) {
        arr.forEach(e => {
            e.classList.remove('active2')
        })
        elem.classList.add('active2')
    }


    generationMenu() {
        this.menu.innerHTML = '';
        this.menuContent.innerHTML = '';
        const wrappCategoriTitles = this.createElement('menu-categori-titles', 'div');
        const wrappCategori = this.createElement('menu-categori-list', 'div');
        const wrappCategoriTitle1 = this.createElement(['menu-categori-title', 'active2'], 'div', 'Фастфуд');
        const wrappCategoriTitle2 = this.createElement('menu-categori-title', 'div', 'Закуски');
        const wrappCategoriTitle3 = this.createElement('menu-categori-title', 'div', 'Главные блюда');
        const wrappCategoriTitle4 = this.createElement('menu-categori-title', 'div', 'Десерты');
        const wrappCategoriTitle5 = this.createElement('menu-categori-title', 'div', 'Напитки');
        const arrCategori = [wrappCategoriTitle1, wrappCategoriTitle2, wrappCategoriTitle3, wrappCategoriTitle4, wrappCategoriTitle5];
        wrappCategoriTitles.append(wrappCategoriTitle1, wrappCategoriTitle2, wrappCategoriTitle3, wrappCategoriTitle4, wrappCategoriTitle5)
        wrappCategori.append(this.createCategory(burgers));
        wrappCategoriTitle1.addEventListener('click', (e) => {
            wrappCategori.innerHTML = '';
            this.switchActiveCategori(arrCategori, e.target)
            wrappCategori.append(this.createCategory(burgers));

        })
        wrappCategoriTitle2.addEventListener('click', (e) => {
            wrappCategori.innerHTML = '';
            this.switchActiveCategori(arrCategori, e.target)
            wrappCategori.append(this.createCategory(snacks));

        })
        wrappCategoriTitle3.addEventListener('click', (e) => {
            wrappCategori.innerHTML = '';
            this.switchActiveCategori(arrCategori, e.target)
            wrappCategori.append(this.createCategory(main_dishes));

        })
        wrappCategoriTitle4.addEventListener('click', (e) => {
            wrappCategori.innerHTML = '';
            this.switchActiveCategori(arrCategori, e.target)
            wrappCategori.append(this.createCategory(desserts));

        })
        wrappCategoriTitle5.addEventListener('click', (e) => {
            wrappCategori.innerHTML = '';
            this.switchActiveCategori(arrCategori, e.target)
            wrappCategori.append(this.createCategory(drinks));

        })

        this.menuContent.append(wrappCategoriTitles, wrappCategori)
        this.menu.append(this.menuContent)
        return this.menu;
    }


    createElement(selector, tag, text = '') {
        const elem = document.createElement(tag);
        if (Array.isArray(selector)) {
            elem.classList.add(...selector)
        } else {
            elem.classList.add(selector)
        }
        if (tag === 'img') {
            elem.src = text;
        } else {
            elem.textContent = text;
        }
        return elem;
    }
}



class Contancts {
    contancts = this.createElement(['contancts-container', 'animate__animated', 'animate__fadeIn'], 'div')
    contanctsContent = this.createElement('contancts-content', 'div')
    contanctsTitle = this.createElement('contancts-title', 'div', 'Контакты')
    contanctsContentBlock = this.createElement('contancts-content-block', 'div')
    contanctsLeftBlock = this.createElement('contancts-left-block', 'div')
    contanctsMap = this.createElement('contancts-map', 'div')
    contanctsRightBlock = this.createElement('contancts-right-block', 'div')
    adressTimePhoneSocial = this.createElement('adress-time-phone-social', 'div')



    adress = this.createElement('adress', 'div', ' Наш адрес')
    adressText = this.createElement('adress-text', 'div', 'Комсомольский проспект 19 оф. 114 встреча у нас по предварительной  договоренности')

    time = this.createElement('time', 'div', 'Время работы')
    timeText = this.createElement('time-text', 'div', 'По всем вопросам связвным с перевозкой грузов, обращайтесь по телефонам')
    phone = this.createElement('phone', 'div', `+7 845 421 45 65`)
    socials = this.createElement('socials', 'div')
    iconVk = this.createElement('socials-vk', 'img', './asset/socials/free-icon-vkontakte-4494490.png')
    iconYouTube = this.createElement('socials-YouTube', 'img', './asset/socials/free-icon-youtube-4494467.png')
    iconInst = this.createElement('socials-insta', 'img', './asset/socials/free-icon-instagram-1384015.png')
    iconWhatsup = this.createElement('socials-whatsapp', 'img', './asset/socials/free-icon-whatsapp-1384023.png')
    iconTelegram = this.createElement('socials-telegram', 'img', './asset/socials/free-icon-telegram-2111710.png')


    questions = this.createElement('questions', 'div')
    question = this.createElement('question', 'div', 'У вас остались вопросы?')
    questionText = this.createElement('question-text', 'div', 'Напишите нам и наш менеджер с радостью на них ответит')
    namePhone = this.createElement('name-phone-input', 'div')
    name = this.createElement('name-input', 'input', 'Ваше имя')
    phoneInp = this.createElement('phone-input', 'input', 'Телефон')
    textInput = this.createElement('text-input', 'textarea', 'Текст сообщения')
    questionBtn = this.createElement('question-btn', 'div', 'Отправить свой вопрос')
    constructor() {

    }
    generationContancts() {
        this.contancts.innerHTML = '';
        this.contanctsContent.innerHTML = '';
        this.contanctsMap.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.7046607707784!2d37.582910677201916!3d55.7288845938328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ba1cb13086b%3A0x2f448831c2a02b2!2z0JrQvtC80YHQvtC80L7Qu9GM0YHQutC40Lkg0L_RgC4sIDE5LCDQnNC-0YHQutCy0LAsIDExOTE0Ng!5e0!3m2!1sru!2sru!4v1702851848365!5m2!1sru!2sru" width="378" height="353" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        this.contanctsLeftBlock.append(this.contanctsMap)
        this.socials.append(this.iconVk, this.iconYouTube, this.iconInst, this.iconWhatsup, this.iconTelegram)
        this.adressTimePhoneSocial.append(this.adress, this.adressText, this.time, this.timeText, this.phone, this.socials)
        this.namePhone.append(this.name, this.phoneInp)
        this.questions.append(this.question, this.questionText, this.namePhone, this.textInput, this.questionBtn)
        this.contanctsRightBlock.append(this.adressTimePhoneSocial, this.questions)
        this.contanctsContentBlock.append(this.contanctsLeftBlock, this.contanctsRightBlock)
        this.contanctsContent.append(this.contanctsTitle, this.contanctsContentBlock)
        this.contancts.append(this.contanctsContent)
        return this.contancts;
    }

    createElement(selector, tag, text = '') {
        const elem = document.createElement(tag);
        if (Array.isArray(selector)) {
            elem.classList.add(...selector)
        } else {
            elem.classList.add(selector)
        }
        if (tag === 'input' || tag === 'textarea') {
            elem.placeholder = text;
        } else if (tag === 'img') {
            elem.src = text;
        } else {
            elem.textContent = text;
        }
        return elem;
    }


}

class Reserve {
    reserve = this.createElement(['reserve-container', 'animate__animated', 'animate__fadeIn'], 'div')
    reserveContent = this.createElement('reserve-content', 'div')
    reserveTitle = this.createElement('reserve-title', 'div', 'Забронировать')
    reserveClose = this.createElement('reserve-close', 'div', 'X')

    namePhone = this.createElement('reserve-name-phone-wrap', 'div')
    inputLabelName = this.createElement('reserve-input-label-name', 'label')
    inputLabelNameText = this.createElement('reserve-input-label-name-text', 'div', 'На какое имя бронируем')
    inputLabelPhone = this.createElement('reserve-input-label-phone', 'label')
    inputLabelPhoneText = this.createElement('reserve-input-label-phone-text', 'div', 'Номер телефона')

    name = this.createElement('reserve-name-input', 'input', 'Ваше имя')
    phoneInp = this.createElement('reserve-phone-input', 'input', 'Телефон')
    quantityDataTime = this.createElement('reserve-quantity-data-time-wrap', 'div')
    quantity = this.createElement('reserve-quantity-wrap', 'div')
    quantityText = this.createElement('reserve-quantity-text', 'div', 'Количество персон')

    plus = this.createElement('reserve-plus', 'span', '+')
    quanNum = this.createElement('reserve-quantity', 'span', '1')
    minus = this.createElement('reserve-minus', 'span', '-')
    dataLabel = this.createElement('reserve-data-label', 'label')
    dataLabelText = this.createElement('reserve-data-label', 'div', 'Дата посещения')

    dataInp = this.createElement('reserve-data-input', 'input', 'Выберите дату')
    time = this.createElement('reserve-time-label', 'label')
    timeText = this.createElement('reserve-time-label', 'div', 'Время')

    timeInp = this.createElement('reserve-time-input', 'input', '12:00')
    commentWrap = this.createElement('reserve-comment-wrap', 'div')
    commentLabel = this.createElement('reserve-comment-label', 'label')
    commentText = this.createElement('reserve-comment-text', 'div', 'Комментарий')

    commentInp = this.createElement('reserve-comment-input', 'textarea', 'Текст вашего сообщения')
    reserveAgreement = this.createElement('reserve-agreement-wrap', 'div')
    reserveBtn = this.createElement('reserve-btn-wrap', 'div', 'Забронировать')
    agreement = this.createElement('reserve-agreement-label', 'label')
    agreementText = this.createElement('reserve-agreement-text', 'div', 'Согласен (-сна) на обработку  персональных данных')

    agreementInp = this.createElement('reserve-agreement-input-wrap', 'input')
    count = 1;

    counterQuantity(operand) {
        console.log('asdad')
        if (operand === '-') {
            this.count--;
            if (this.count <= 0) this.count = 1
            this.quanNum.textContent = this.count;
        }
        if (operand === '+') {
            this.count++;
            this.quanNum.textContent = this.count;
        }

    }

    generationReserve() {
        this.reserveClose.addEventListener('click', () => {
            this.reserve.remove()
        })
        this.plus.addEventListener('click', () => {
            this.counterQuantity('+')
        })
        this.minus.addEventListener('click', () => {
            this.counterQuantity('-')
        })
        this.inputLabelName.append(this.inputLabelNameText, this.name)
        this.inputLabelPhone.append(this.inputLabelPhoneText, this.phoneInp)
        this.namePhone.append(this.inputLabelName, this.inputLabelPhone)
        this.quantity.append(this.quantityText, this.plus, this.quanNum, this.minus)
        this.dataInp.type = 'date'
        this.dataLabel.append(this.dataLabelText, this.dataInp)
        this.timeInp.type = 'time'
        this.time.append(this.timeText, this.timeInp)
        this.quantityDataTime.append(this.quantity, this.dataLabel, this.time)
        this.commentLabel.append(this.commentText, this.commentInp)
        this.commentWrap.append(this.commentLabel)
        this.agreementInp.type = 'checkbox'
        this.agreement.append(this.agreementInp, this.agreementText)
        this.reserveAgreement.append(this.reserveBtn, this.agreement)
        this.reserveContent.append(this.reserveClose, this.reserveTitle, this.namePhone, this.quantityDataTime, this.commentWrap, this.reserveAgreement)
        this.reserve.append(this.reserveContent);
        return this.reserve;
    }


    createElement(selector, tag, text = '') {
        const elem = document.createElement(tag);
        if (Array.isArray(selector)) {
            elem.classList.add(...selector)
        } else {
            elem.classList.add(selector)
        }
        if (tag === 'input' || tag === 'textarea') {
            elem.placeholder = text;
        } else if (tag === 'img') {
            elem.src = text;
        } else {
            elem.textContent = text;
        }
        return elem;
    }
}
const Fond = new Foundation();
Fond.addPage(Fond.home.generationHome())
document.querySelector('#content').append(Fond.generationHeader(), Fond.wrapp)


