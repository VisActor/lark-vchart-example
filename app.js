App({
  onShow(options) {
    /**
     * PC端站点图表示例二维码扫码时, 传入type参数.
     * 这里在小程序热启动时, 更新绑定在App实例上的options对象, 用于给preview页面提供type参数.
     */
    this.options = options;
  },
  // 分享文案
  onShareAppMessage(opt) {
    return {
      title: "VChart 飞书小程序示例",
      path: "/pages/index/index",
      PCPath: "/pages/index/index",
      PCMode: "sidebar-semi",
      imageUrl: "",
      success(res) {
        console.log("success", res);
      },
      fail(errr) {
        console.error(errr);
      },
    };
  },
});
