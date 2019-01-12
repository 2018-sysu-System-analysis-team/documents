# 1. 简介
## 1.1 目的
&emsp;&emsp;  本文档全面与系统地表述目标软件系统的构架，并通过使用多种视图来从不同角度描述系统的各个主要方面，以满足相关涉众（客户、设计人员等）
对目标系统的不同关注焦点。<br>
&emsp;&emsp;  本文档记录并表述了架构师对系统构架方面做出的重要决策；项目经理将根据构架定义的构件结构制定项目的开发计划；
&emsp设计员将据此进行各构件的详细设计；测试设计员按照构架设计系统的总体测试框架；另外构架文档还用于指导各构件的实施、集成及测试。
## 1.2 范围
&emsp;&emsp; 本文档适用于“中大小食点菜APP”的总体应用构架。

# 2. 表示
&emsp;&emsp; 本文档以一系列的视图（View）来表示系统的软件构架，主要包括用例视图、逻辑视图、进程视图、部署视图、实施视图（即RUP推荐的4+1视图）等；
每个视图拥有一个或多个模型（Model）（例如逻辑视图包含分析模型、设计模型和数据模型等）；并围绕相关视图来描述系统的基本结构、组成机制与工作原理等。<br>
&emsp;&emsp; 本文档还将系统的构架机制描述也放在了逻辑视图之下。<br>
&emsp;&emsp; 本文档主要使用统一建模语言（UML）来充当相关模型的表达语言；主要图表（Diagram）引用自目标系统的Rose Model。<br>

# 3. 构架设计目标与约束
&emsp;&emsp; 描述构架设计必须满足的关键系统功能需求和质量约束，这些功能需求和质量要求对软件构架有重大的影响，并决定了构架的设计。<br>
&emsp;&emsp; 本节同时还列明影响构架的其他相关因素，如软件的复用策略、使用商业构件、设计与实施的策略等<br>

# 3.1 关键功能需求
&emsp;&emsp; 本软件主要满足顾客和店家两方面的需求。<br>
&emsp;&emsp; 顾客：顾客需要在手机小程序进行点餐和支付功能。<br>
&emsp;&emsp; 店主：需要实现: <br>
&emsp;&emsp;&emsp;&emsp; 1.价格，描述，数量管理等功能。<br>
&emsp;&emsp;&emsp;&emsp; 2.还可以进行月销量、月销售额统计等功能。<br>

# 3.2 开发策略
本软件使用瀑布模型开发。

