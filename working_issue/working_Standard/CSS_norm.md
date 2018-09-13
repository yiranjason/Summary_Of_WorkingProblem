## CSS编写规范

> 编码：@charset "utf-8"

------

> 头部增加项目创建日期信息 
>> - `/*xm_name  20180913 */ ` 
>> - `/*start 20180913 GJ<jie.yr127@gmail.com> modify*/`

------ 

> class与id的使用：纯写样式控制时，一般都使用class，特殊的除外，这么做是因为id的优先级高，在协同开发时不利于样式重置

------

> css简写，用以提升下载速度，减少文件大小，代码简洁可读
>> - ~~`margin-top：0; margin-right:10px; margin-bottom:10px; margin-left:0;`~~
>>> __`margin:0 10px 10px 0;`__
>> - ~~`border-width:2px; border-style:solid; border-color:#000`~~
>>> __`border:2px solid #000;`__
>> - border四边不一样时：~~`border-top-width:1px; border-right-width:4px; border-bottom-width:5px; border-left-width:3px;`~~
>>> __`border-width:1px 4px 5px 3px;`__
>> - 同样的border可以只设置某几边的样式不一，应当先定义border的整体样式，再进行修改: ~~`border-right:2px solid #000; border-bottom:3px solid #000;`~~
>>> __`border:1px solid #000; border-width:1px 2px 3px 1px;`__
>> - color的表示上，在允许的条件下使用简写方式，如：`#ffffff`--> `#fff`;不满足条件的仍然使用6位表示.  
>> - font诸多属性也可以使用简写方式：~~`font-style:italic; font-weight:bold; font-variant:small-caps; font-size:1em; font-family:SimSun,Arial,sans-serif; line-height:150%;`~~
>>> __`font:1em/1.5 bold italic small-caps SimSun,Arial,sans-serif;`__
>> - background:背景设置图片及其位置，重复方式等参数时，~~`backgroun-image:url('banner.png'); background-position:top center; background-repeat:no-repeat`~~
>>> __`background:url(banner.png) no-repeat top center;`__
>> - list-style列表：~~`list-style-type:square; list-style-position:inside; list-style-image:url('filename.gif');`~~
>>> __`list-style:square inside url('filename.gif');`__

------

> 注释中应尽量使用英文代替中文注释，目的为防止编码错误时乱码的情况发生.
>> font-family中遇到中文字体样式也应当使用英文表示：
>> - 黑體：SimHei;
>> - 宋體：SimSun;  [由於Opera和Safari不認識SimSun,所以盡量用'宋體']
>> - 新宋體：NSimSun;
>> - 仿宋：FangSong;
>> - 楷體：KaiTi;
>> - 仿宋_GB2312：FangSong_GB2312;
>> - 微軟正黑體：Microsoft_JhengHei;
>> - 微軟雅黑：Microsoft_YaHei;

