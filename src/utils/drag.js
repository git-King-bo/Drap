
function addHandler(element, type, handler) {
    //  这里是兼容代码，不需要兼容的可以不加
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
    } else {
        element["on" + type] = handler;
    }
}
function getTarget(event) {
    return event.target || event.srcElement;
}
function preventDefault(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}
export const dragApi = (mainImagelist, btn) => {
    // let btn = document.getElementById("myBtn");
    // let that = this;
    addHandler(btn, "dragstart", function (e) {
        debugger
        // console.log('dragstart', getTarget(e))
        // 此事件表示拖拽开始事件，可通过e.target拿到拖拽的元素
        btn.dragStartEle = getTarget(e);
    });
    addHandler(
        // 拖拽经过哪些元素上面就会触发该事件，可通过e.target知道我拖拽的元素目前在那个元素上面
        btn,
        "dragover",
        function (e) {
            preventDefault(e);
            // console.log('dragover', getTarget(e))

            btn.dragEndEle = getTarget(e);
        },
        false
    );
    addHandler(
        // 可以通过这个事件拿到当前元素拖到了哪个元素之上
        btn,
        "dragenter",
        function (e) {
            // console.log('dragenter', getTarget(e))

            preventDefault(e);
        },
        false
    );
    addHandler(
        btn,
        // 通过这个事件可以知道当前拖拽的元素是在那个元素落下的
        "drop",
        function (e) {
            // console.log('drop', getTarget(e))

            let target = getTarget(e);
            preventDefault(e);
            // 拖动元素，放置目标
            if (btn.dragStartEle && target) {
                // debugger
                if (
                    target.nodeName === "IMG" &&
                    btn.dragStartEle.nodeName === "IMG"
                ) {
                    // 交换
                    let startI = btn.dragStartEle.id;
                    let endI = btn.dragEndEle.id;
                    mainImagelist[startI] = btn.dragEndEle.src;
                    mainImagelist[endI] = btn.dragStartEle.src;
                    console.log(mainImagelist, '--')
                }
            }
        },
        false
    );

}
