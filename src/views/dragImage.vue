<template>
  <div class="img-box" id="btnOne">
    <!-- // 主要是把索引值记下来了 :id="i" -->
    <img :src="item" alt="" v-for="(item, i) in mainlist" :key="i" :id="i" />
  </div>
  <div class="img-box" id="myBtn">
    <!-- // 主要是把索引值记下来了 :id="i" -->
    <img
      :src="item"
      alt=""
      v-for="(item, i) in mainImagelist"
      :key="i"
      :id="i"
    />
  </div>
  <div class="draggable">拖动可以调整三张图片顺序</div>
</template>
<script>
import { defineComponent } from "vue";
import { dragApi } from "../utils/drag";
export default defineComponent({
  setup() {},
  data() {
    return {
      mainImagelist: [
        "https://mdsp8.qhimg.com/t017641766efa02bb02.png",
        "https://img1.baidu.com/it/u=1605341541,1182642759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
        "https://img2.baidu.com/it/u=1979633876,2912484447&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      ],
      mainlist: [
        "https://mdsp8.qhimg.com/t017641766efa02bb02.png",
        "https://img1.baidu.com/it/u=1605341541,1182642759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
        "https://img2.baidu.com/it/u=1979633876,2912484447&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      ],
      aa: "12",
    };
  },
  watch: {
    mainImagelist: {
      handler: function (newValue, oldValue) {
        console.log("数组已经发生变化", newValue, oldValue);
      },
      deep: true,
    },
  },
  //   computed: {
  //     mainlist: function () {
  //       console.log(mainlist, "message 变化了");
  //     },
  //   },
  mounted() {
    // debugger;

    let btn = document.getElementById("myBtn");
    let btnOne = document.getElementById("btnOne");
    let that = this;
    that.aa = "555";
    dragApi(that.mainImagelist, btn);
    dragApi(that.mainlist, btnOne);

    // this.addHandler(btn, "dragstart", function (e) {
    //   // 此事件表示拖拽开始事件，可通过e.target拿到拖拽的元素
    //   btn.dragStartEle = that.getTarget(e);
    // });
    // this.addHandler(
    //   // 拖拽经过哪些元素上面就会触发该事件，可通过e.target知道我拖拽的元素目前在那个元素上面
    //   btn,
    //   "dragover",
    //   function (e) {
    //     that.preventDefault(e);
    //     btn.dragEndEle = that.getTarget(e);
    //   },
    //   false
    // );
    // this.addHandler(
    //   // 可以通过这个事件拿到当前元素拖到了哪个元素之上
    //   btn,
    //   "dragenter",
    //   function (e) {
    //     that.preventDefault(e);
    //   },
    //   false
    // );
    // this.addHandler(
    //   btn,
    //   // 通过这个事件可以知道当前拖拽的元素是在那个元素落下的
    //   "drop",
    //   function (e) {
    //     let target = that.getTarget(e);
    //     that.preventDefault(e);
    //     // 拖动元素，放置目标
    //     if (btn.dragStartEle && target) {
    //       if (
    //         target.nodeName === "IMG" &&
    //         btn.dragStartEle.nodeName === "IMG"
    //       ) {
    //         // 交换
    //         let startI = btn.dragStartEle.id;
    //         let endI = btn.dragEndEle.id;
    //         that.mainImagelist[startI] = btn.dragEndEle.src;
    //         that.mainImagelist[endI] = btn.dragStartEle.src;
    //       }
    //     }
    //   },
    //   false
    // );
  },
  methods: {
    addHandler(element, type, handler) {
      //  这里是兼容代码，不需要兼容的可以不加
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
      } else {
        element["on" + type] = handler;
      }
    },
    getTarget(event) {
      return event.target || event.srcElement;
    },
    preventDefault(event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
  },
});
</script>
<style scoped lang="scss">
.img-box {
  width: 400px;
  padding: 10px;
  border: 1px solid #d3d5e0;
  display: flex;
  justify-content: space-between;
  margin-left: 96px;
  img {
    width: 128px;
    height: 84px;
  }
}

.draggable {
  font-size: 12px;
  color: #626886;
  padding-top: 6px;
  padding-bottom: 24px;
  margin-left: 96px;
}
</style>
