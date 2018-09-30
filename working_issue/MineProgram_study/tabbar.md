## 小程序单页面内的tabbar功能 切换显示内容

``` xml
<view>
  <view class="swiper-tab">
    <view class="bre swiper-tab-list {{tab==0 ? 'on' : ''}}" data-current="0" bindtap="tab_click">图文详情</view>
    <view class="swiper-tab-list {{tab==1 ? 'on' : ''}}" data-current="1" bindtap="tab_click">产品参数</view>
  </view>
  <swiper current="{{tab}}" class="swiper-box" duration="300" style="height:{{winHeight - 31}}px" bindchange="tab_slide">
    <swiper-item>
      图文详情
    </swiper-item>
    <swiper-item>
      产品参数
    </swiper-item>
  </swiper>
</view>```
``` css
.swiper-tab{  
    width: 100%;  
    border-bottom: 2rpx solid #eee;  
    text-align: center;  
    line-height: 80rpx;
    background: #fff;
    font-size: 14px;
}  
.on{ 
  color: #dd2727;  
  border-bottom: 5rpx solid #dd2727;
}  
.swiper-tab-list{  
  font-size: 29rpx;  
    display: inline-block;  
    width: 49.5%;  
    color: #333; 
} ```

``` javascript
Page({
  data: {
    tab: 0
  },
  tab_slide: function (e) {//滑动切换tab 
    var that = this;
    that.setData({ tab: e.detail.current });
  },
  tab_click: function (e) {//点击tab切换
    var that = this;
    if (that.data.tab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        tab: e.target.dataset.current
      })
    }
  },
})
```