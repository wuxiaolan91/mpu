// pages/components/tab/tab.js
Component({
  properties: {
    list: Array
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeId: 0
  },
  created () {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    clickTab: function (event) {
      const target = event.target;
      const dataset = target.dataset;
      this.setData({
        activeId: dataset.index
      });
    }
  }
})
