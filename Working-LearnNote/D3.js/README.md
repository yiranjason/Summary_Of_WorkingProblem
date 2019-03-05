## D3.js学习过程Get知识点

### 个人学习顺序【代码顺序】

1. __[HelloWorld.html](HelloWorld.html)__ |*选择集概念入门*
            
2. __[Element-operation.html](Element-operation.html)__ | *选择集的选择、增加、删除操作*

3. __[Data-operate.html](Data-operate.html)__ | *数据绑定⇨选择集* 

4. __[D3-simpledemo.html](D3-simpledemo.html)__ | *简易demo⇨了解d3绘制图表的组成部分*

5. __[D3-scaleLinear.html](D3-scaleLinear.html)__ | *D3.js--线性比例尺*

6. __[D3-firstBar.html](D3-firstBar.html)__ | *D3.js--柱形图入门*

***

### 选择元素及绑定数据

> 选择集的概念：由d3.select()/d3.selectAll() 的结果是一个选择集，对于此的后续链式操作则类似于Jquery的链式语法。

> 绑定数据：

>> 
|方法|解释|
|:--:|:--:|
|datum()|绑定单个数据到选择集上|
|data()|绑定一组数据到选择集上|  

***

### 布局

> 布局：当原始数据无法直接进行绘制时，则需要进行布局，布局的作用是可以推导出定位元素的辅助数据

