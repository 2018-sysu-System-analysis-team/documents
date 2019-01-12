# 第二次迭代会议

## 会议目标： 初步约定前后端接口

## 会议时间： 2018年11月11日

## 会议地点： 第三饭堂

## 会议人员： 林志平，梁任杰，刘嘉杰，李学思

## 会议时间： 30分钟

## 会议结果： 

前端与后端工程师讨论了确定了传输数据的格式，访问菜单数据，上传订单数据

* 小程序使用“GET”服务器对应地址获取菜单Dish，服务端返回JSON文件
   * dishID：菜的Id
   * dishName： 菜名
   * dishPrice： 菜的价格
   * dishIntroduction： 描述
   * dishPhoto： 照片保存路径

* 小程序使用“Post”提交订单Order
   * State：订单的状态，0未付款，1已付款，2订单完成
   * payment：总价
   * ItemId： 对应dishId 菜名
   * num：菜数量
   * title：菜名
   * price：价格
   * totalFree：菜的价格*数量
