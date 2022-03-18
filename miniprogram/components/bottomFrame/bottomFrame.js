Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {

  },
  data: {
    flag:false,
    wrapAnimate:'wrapAnimate',
    bgOpacity:0,
    frameAnimate:'frameAnimate',
  },
  properties: {
    frameTitle: {
      type: String,
      value: '标题',
    }
  },
  
  methods: {
    // 显示背景底部弹窗
    showFrame() {
      this.setData({ 
        flag: true, 
        wrapAnimate: 'wrapAnimate',
        frameAnimate: 'frameAnimate'
      });
    },
    // 关闭背景底部弹窗
    hideFrame() {
      const that= this;
      that.setData({ 
        wrapAnimate: 'wrapAnimateOut', 
        frameAnimate: 'frameAnimateOut'
      });
      setTimeout(()=>{
        that.setData({ flag: false})
      },400)
    },
    catchNone(){
      //阻止冒泡
    },
    _showEvent() {
      this.triggerEvent("showEvent");
    },
    _hideEvent() {
      this.triggerEvent("hideEvent");
    }
  }
})