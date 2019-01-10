数据接口
菜单获取Dish
方法GET   http://134.175.97.167:9090/api/dishes
返回JSON
[
    {
        "dishId": 1,
        "dishName": "baicai",
        "dishPrice": 2,
        "dishIntroduction": "白菜",
        "dishPhoto": "/img/baicai.jpg"
    }
]
dishId:菜的Id，dishName：菜名，dishPrice：菜的价格，dishIntroduction：描述，dishPhoto：照片保存路径。

提交订单Order
方法POST  http://134.175.97.167:9090/api/Orders?UserId=2
参数UserId=2是用户Id
Post数据内容为
{
  "state": 0,
  "payment": 48,
  "orderItems": [
    {
      "itemId": 2,
      "num": 4,
      "title": "白菜",
      "price": 6.0,
      "totalFree": 24
    },
    {
      "itemId": 2,
      "num": 4,
      "title": "白菜",
      "price": 6.0,
      "totalFree": 24
    }
  ]
}

State：订单的状态，0未付款，1已付款，2订单完成，payment：总价，
orderItems：序列，表示订单中每一个菜的数据，
ItemId等价于dishId 菜名，num：菜数量，title：菜名，price：价格，totalFree：菜的价格*数量
返回JSON格式
{
    "orderId": 6,
    "payment": 48,
    "state": 0,
    "creatTime": "2018-12-17T10:02:26.1551577+08:00",
    "endTime": "2018-12-17T10:02:26.1551577+08:00",
    "userId": 2,
    "orderItems": [
        {
            "orderItemId": 12,
            "itemId": 2,
            "orderId": 0,
            "num": 4,
            "title": "白菜",
            "price": 6,
            "totalFree": 24
        },
        {
            "orderItemId": 13,
            "itemId": 2,
            "orderId": 0,
            "num": 4,
            "title": "白菜",
            "price": 6,
            "totalFree": 24
        }
    ]
}
大部分跟上面一样，不同的是加了OrderId，订单的Id，还是订单创建时间，结束时间。
还有修改订单接口，这后面再写。


修改并确认支付接口，手机端确认支付后直接发送订单信息到网站服务器
接口地址：http://134.175.97.167:9090/api/Orders/2       提交方式：post
功能就能修改菜单，确认支付功能，只要
Post ,内容格式： application/json
{
  "orderId": 1,       //订单id
  "state": 1,         //state =1 ,表示已付款状态
  "payment": 3.0,     //价格
   "orderItems": [     //这里只要跟上面返回的数据一样就好，不用改
        {
            "orderItemId": 12,
            "itemId": 2,
            "orderId": 0,
            "num": 4,
            "title": "白菜",
            "price": 6,
            "totalFree": 24
        },
        {
            "orderItemId": 13,
            "itemId": 2,
            "orderId": 0,
            "num": 4,
            "title": "白菜",
            "price": 6,
            "totalFree": 24
        }
    ]
}

这个没有返回值，如果成功修改的话会显示http code 200状态









