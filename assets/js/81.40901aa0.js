(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1279:function(v,_,p){"use strict";p.r(_);var l=p(15),i=Object(l.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("p",[v._v("心里有些忐忑，很是不安。或者说是比较焦虑把。")]),v._v(" "),p("p",[v._v("这周就上了几天的班，上海的疫情突然非常严重了，每日的2W多新增，很多同事只能居家隔离了，想想自己幸好是从上海回来了。")]),v._v(" "),p("p",[v._v("这周我主要把时间都花在了 高数的学习上了，每天都能看1节-2节课程不等，进度不是很快。 英语的每天的学习是拉下来了，考虑到英语的学习可以充分利用到 零散的时间来做，下周一开始我就要到办公室上班，办公室里面怕是不能再来看数学视频了，但是抽空的时候，应该可以看看 英语和 专业课的内容。")]),v._v(" "),p("p",[v._v("目前来说，英语主要涉及到的还是单词的积累和记忆的阶段，记忆的过程是个反反复复的过程，一开始有些感觉这些单词或是太简单了，可能这是个幻觉，如果把这些单词放到具体的语言环境中，就不一定能够都认识出来了。")]),v._v(" "),p("p",[v._v("如果单独来看英文，是否能想起它的中文，这个还需要利用anki来进行单词记忆的整理。")]),v._v(" "),p("p",[v._v("最让我感觉到不安的就是，工作上需要来对于IDC组件进行配置，而这个我是之前没有做过的。")]),v._v(" "),p("p",[v._v("之前和我说的是 要做好IDC功能的验证工作，比如表的同步的验证，当时主要说的是表的增量问题，没有说到全量同步的问题，如果可以的话，稳妥来说的话，GIS项目组有个同事之前 做的就是手动导了些数据进入了PG，不太确定，没有验证的功能，可以交给之前的同事来做。")]),v._v(" "),p("p",[v._v("那我目前来做最最重要的事情，就是要做好 3中类型表的 增量同步的验证工作。 研究了3个样例的 表模型结构，我目前主要的工作要拆解成几个部分。")]),v._v(" "),p("ol",[p("li",[p("p",[v._v("找到合适的工具，从Oracle 中的这些表，通过表模型的转换到 PG类型的表。")]),v._v(" "),p("ul",[p("li",[v._v("记得郑姐说过有个工具可以考虑来做的。")]),v._v(" "),p("li",[v._v("刘杰也说了有个 什么aws 的工具也可以来做的。")]),v._v(" "),p("li",[v._v("主要考虑到是字段映射，重点看看有个空间字段类型，如何使得Oracle  和 PG进行兼容。")]),v._v(" "),p("li",[v._v("还可以主动找找资料，找找有经验的人，郑姐、兵哥、冲哥、刘杰、李建。 还可以找找研发中心的人，看看怎么来解决。")]),v._v(" "),p("li",[v._v("这个难度还是有些的，可能要多花些时间。")]),v._v(" "),p("li",[v._v("主要的调试工作，就放在测试环境来做。")])])]),v._v(" "),p("li",[p("p",[v._v("配置增量同步的测试")]),v._v(" "),p("ul",[p("li",[p("p",[v._v("仔细研读 文档内容，这个可以直接提出问题来。")]),v._v(" "),p("p",[v._v("问问刘杰，问问冲哥，问问研发中心的人怎么来弄。")])]),v._v(" "),p("li",[p("p",[v._v("可以找个简单的表来做，这个应该难度不太大。 问问人，应该能够解决。")])]),v._v(" "),p("li",[p("p",[v._v("主要的调试工作，就放在测试环境来做。")])])])]),v._v(" "),p("li",[p("p",[v._v("配置下全量同步测试")]),v._v(" "),p("p",[v._v("这个貌似不太着急，后续看看。")])]),v._v(" "),p("li",[p("p",[v._v("整体方案的整合")]),v._v(" "),p("p",[v._v("目前来说，还不太情况，是否有表需要回传，部分数据回传，这个难度是不小的，讨论整体方案的时候，一定要拉着数据组来做。")]),v._v(" "),p("p",[v._v("会议内容包括同步哪些表，同步的策略是什么。")]),v._v(" "),p("p",[v._v("批量表同步的时候，如何进行规划，同步计划的规划，同步通道的规划。是否有需要按照表的大小，重要程度进行区分来做？？")])])]),v._v(" "),p("p",[v._v("整体我的想法是，这两天要做些准备工作，比如说 郑姐说的那个工具如何来找，比如说 文档多多研究几遍，比如说空间字段转换案例呢？")]),v._v(" "),p("p",[v._v("首先，当时分配任务的时候，也只是说到是 做好表同步的验证工作，既然是验证，就需要时间，测试环境需要时间，生产环境部署也需要时间。别人催是别人的事情，不要破坏自己做事情的节奏，如果要加快速度，就需要追加资源，目前来说，都是自己在慢慢摸索，有些生产环境的测试我还不敢大胆来做，必须的要找个相应的测试环境验证通过后，找同事确认之后再来操作。")]),v._v(" "),p("p",[v._v("我想下一周，最为主要的任务就是要把 简单的表 做好增量同步的配置测试工作，要把这个工作给做完成。  对于 空间字段的转换这块，要有写突破，比如说 方向明确，确认PG的兼容性，确认IDC同步的兼容性。")]),v._v(" "),p("p",[v._v("如果再有人来催，我就大胆的表述目前的实际情况，大胆的问领导要资源，反过来向领导来施加压力。  刘杰很忙，只能间接的问些问题，也没有演示教过我来怎么操作，目前我也只是在学习研发中心的文档，慢慢来摸索的过程。上次安排他来参加下 业务提供的表模型需求对接 和相应的同步需求沟通会，他也是再三推辞，直接点就是不愿意参加，不愿意不想参与这个事情。如果领导认同这种情况和现状的话，那我就只能按照现状，根据自己的学习和掌握的节奏来弄，反复摸索，反复测试，具体的生产操作的时候，需要 有人来指点下。")]),v._v(" "),p("p",[v._v("心理不太痛快的原因，大概率就是 感觉压力有些大， 学习的压力很大，目前学习进度 一般，英语还拉下不少，专业课还没有开始。 每天投入了大把大把的时间，要是之后上班的话，学习的时间将会受到压缩。")]),v._v(" "),p("p",[v._v("另外，要做一个自己还没有完全掌握和擅长的事情，是有些难度的，是有个适应的过程的，要对自己有充分的信心和耐心，要掌握好自己的节奏感。任务项要拆解出来，每天完成一点点，每天都在坚持，我相信成功是不远了。")]),v._v(" "),p("p",[v._v("心里不痛快的时候，要找到一个发泄的途径，写周记是个非常好的途径，分析这一周所发生的事情，哪些事情做得好，要继续坚持下去，哪些事情做的不好，要改正，后续不能够犯错了。")]),v._v(" "),p("p",[v._v("人确实是个情绪化的动物，往往会被眼前的事情而遮蔽情绪，生气的时候，焦虑的时候，往往也就失去了 对事物的正确的判断了。我的经验告诉我，如果自己真的有这些情绪了，不妨让自己慢下来，是不是自己走的太急了。自己写些 分析的文字，自己解刨自己，像是一个好朋友在和自己 谈谈心聊聊天，自己一定会柳暗花明的一天。 分析可能出现的最坏的结果是什么，发现也没什么不得了的事情，生产上操作的时候，我肯定是 反复确认的。 而且操作的时候，肯定也会先来做个 测试表 来验证的，验证通过了，自己才会去操作的。")])])}),[],!1,null,null,null);_.default=i.exports}}]);