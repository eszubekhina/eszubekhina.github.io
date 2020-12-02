function toggle() {
    var homeSec = document.querySelector('.greeting');
    //var nav = document.querySelector('navigation');
    var nav = document.getElementById('navigation');
    homeSec.classList.toggle('active');
    nav.classList.toggle('active');
}

function makeMouseOutFn(elem) {
    var list = traverseChildren(elem);
    return function onMouseOut(event) {
        var e = event.toElement || event.relatedTarget;
        if (!!~list.indexOf(e)) {
            return;
        }
        console.log('MouseOut');
        // handle mouse event here!
        //event.target.style.right = '-400px';
        toggle();
    };
}

//quick and dirty DFS children traversal, 
function traverseChildren(elem) {
    var children = [];
    var q = [];
    q.push(elem);
    while (q.length > 0) {
        var elem = q.pop();
        children.push(elem);
        pushAll(elem.children);
    }
    function pushAll(elemArray) {
        for (var i = 0; i < elemArray.length; i++) {
            q.push(elemArray[i]);
        }
    }
    return children;
}

//toggle();
//using closure to cache all child elements
var parent = document.getElementById('navigation');
parent.addEventListener('mouseout', makeMouseOutFn(parent), true);

//печатающийся текст
var textL = 'На данный момент я обучаюсь профессии frontend-разработчик на образовательном IT-портале - ' +
    'GeekBrains | GeekUniversity. Учусь верстать сайты и лендинги,' +
    ' писать скрипты на языке программирования JavaScript. Хочу найти работу или стажировку, чтобы ' +
    ' дальше развиваться и узнавать что-то новое в этой области.' +
    ' Для меня создание сайтов - это волшебство! Я каждый день учусь и продолжаю стремиться стать в' +
    ' будущем отличным специалистом в мире разработки!';

function printed_el_text(el) {
    // var text = el.innerHTML,
    i = 0,
        printF = function () {
            i++;
            if (i <= textL.length) {
                el.innerHTML = textL.substr(0, i);
                setTimeout(printF, 60);
            }
        };
    printF();
};
//for (; ;) {
//setTimeout(function () {
printed_el_text(document.getElementById("about-me-text-blok"));
    //}, 8000);
//}
