Page({
  data: {
    spec: null,
    events: null,
    styles: null,

    // 传递样式
    // styles: `
    //   height: 300px;
    //   width: 100%
    // `
  },

  onLoad(options) {
    this.chartType = options.type;
    const spec = require(`../../data/${this.chartType}`).default;
    this.setData({
      // 设置数据
      spec,
    });
  },

  onChartInit() {
    console.log('chart 实例初始化完成');

    this.selectComponent("#chart", res => {
      const chartInstance = res && res.chart; // 获取 chart 实例
      console.log('获取 VChart 实例', chartInstance);
    });
  },

  onChartReady() {
    console.log('chart 实例渲染完成');
  },
});
