// components/infocell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,//类型(必填),目前接受的类型包括：String,Number,Bolean,Object,Array,null(表示任意类型)
      value:'',
    },
    desc:{
      type:String,
      value:''
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
    popView:function(){
      // console.log(123);
      //注册时间
      this.triggerEvent("popView");//里面的名字无所谓，只要跟父级的绑定的一样就行了
    }
  }
})
