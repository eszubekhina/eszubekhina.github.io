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
var parent = document.getElementById("navigation");
parent.addEventListener('mouseout', makeMouseOutFn(parent), true);

