// components/amount/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number,
      value:1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputChangeHandle(e){
      // console.log(e);
      var value = e.detail.value;
      var myEventDetail = {
        val:value
      }
      this.triggerEvent("myevent",myEventDetail);

    },
    subtract(e){
      // console.log(2);
      var count = this.data.count;
      count > 1? count--:1;

      this.setData({
        count:count
      })

      var myEventDetail = {
        val: count
      }
      this.triggerEvent("myevent", myEventDetail);

      //点击减号触发
      this.triggerEvent("subevent");
    },
    add(e){ 
      var count = this.data.count;
      this.setData({
        count: ++count
      })
      var myEventDetail = {
        val: count
      }
      this.triggerEvent("myevent", myEventDetail);

      //点击加号触发
      this.triggerEvent("addevent");
    }
  }
})
