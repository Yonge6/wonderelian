import { opcOpportunityArticle } from "./article-opc-opportunity.js";
import { aiHomepageClarityArticle } from "./article-ai-homepage-clarity.js";
import { aiFirstProductArticle } from "./article-ai-first-product.js";
import { odysseyArticle } from "./article-odyssey.js";

const makerRoot = "/assets/notes/2026-08-21-maker-business-lab";
const brutalismRoot = "/assets/notes/2026-08-20-graphic-brutalism";
const wendaoRoot = "/assets/notes/2026-08-18-wendao-1-0";

export const importedArticles = [
  opcOpportunityArticle,
  aiHomepageClarityArticle,
  aiFirstProductArticle,
  odysseyArticle,
  {
    slug: "maker-business-three-numbers",
    date: "2026-08-21",
    readingTime: { zh: "约 8 分钟", en: "8 min read" },
    author: { zh: "永歌 Elian", en: "Elian Yong" },
    cover: `${makerRoot}/image-01.jpg`,
    zh: {
      label: "片刻随记 · 02",
      title: "想靠激光、3D 打印做副业赚钱？一门 Maker 生意，真正该算的是这三笔账",
      excerpt: "不要先问买哪台机器。先问卖什么、赚多少、多久回本。",
      read: "阅读全文",
      back: "返回片刻随记",
      content: `
MAKER BUSINESS LAB

不要先问买哪台机器。先问卖什么、赚多少、多久回本。

![先从产品和生意出发，再选择适合自己的生产方式](${makerRoot}/image-01.jpg)

做激光设备和创客产品这些年，我越来越确定一件事：很多人开始一门 Maker 生意时，第一个问题就问反了。

大家最先问的往往是：“我应该买哪台机器？”

但真正应该先问的是：我准备卖什么？谁会买？一单能赚多少？一个月能做多少？多久可以回本？

机器很重要，但机器从来不是生意的起点。

所以，我做了一个新网站：Maker Business Lab。它不急着向你推销设备，而是先陪你把产品、利润、产能和投入算清楚。

> Lead with money, not machines.\n先从生意出发，再选择机器。

## LAB NOTE 01｜一台好机器，不会自动变成一门好生意

设备参数很容易比较：功率多大、幅面多宽、速度多快、能加工什么材料。于是很多新手会自然地把注意力全部放在机器上。

但买回机器以后，真正困难的问题才出现：做什么产品？卖给谁？价格怎么定？材料、包装和人工算进去以后还有多少利润？订单增加时，产能跟得上吗？

工作室里多一台机器，不等于市场上多了一个值得购买的产品。

我想把顺序调回来：先找到可能成立的产品，再验证数字，最后选择适合的生产方式。

![先选择值得验证的产品，再决定需要什么设备](${makerRoot}/image-02.jpg)

## LAB NOTE 02｜先看产品机会，而不是先看设备目录

Maker Business Lab 目前整理了 7 个可以继续验证的创客产品方向，包括个性化保温杯、定制皮革章、亚克力婚礼标牌、分层木艺壁饰、3D 打印桌面收纳、几何花盆和热转印托特包。

每个产品都会从需求、毛利、竞争、制作难度和生产效率等角度给出一组可解释的机会信号。你可以看到参考售价、材料成本、单件毛利、制作时间和适合的销售渠道。

这不是“爆款预测”，也不是保证你照着做就能赚钱。它更像一张起点地图：帮你更快排除明显不适合自己的方向，把时间留给值得进一步测试的产品。

![把材料、售价、时间和订单量放进同一张账里](${makerRoot}/image-03.jpg)

## LAB NOTE 03｜把“感觉能赚钱”，变成可以修改的数字

创作者很容易爱上一个产品，却不一定认真算过它的商业模型。

一个杯子卖 32 美元，看起来不错。但杯坯、包装、损耗、平台费用和制作时间加起来是多少？每天能完成多少单？如果购买设备，按照真实订单量需要多久回本？

网站里有产品 ROI 计算器和保温杯利润计算器。你可以改动售价、材料成本、制作时间、订单量和设备投入，看毛利、产能与回本周期怎样变化。

我刻意让这些计算保持透明。结果不是一个神秘的“AI 答案”，而是一组你能看懂、能质疑、也能替换成自己真实数据的假设。

好的工具不是替你做决定，而是让你知道自己的决定建立在什么数字上。

![产品、预算与工作流不同，适合的生产路径也不同](${makerRoot}/image-04.jpg)

## LAB NOTE 04｜最后一步，才是匹配设备

当你已经知道想做什么，设备选择会简单很多。

Maker 设备匹配器会依次询问制造方式、产品类型、优先级、预计产量、投入级别和经验阶段，再给出最适合的设备类别与一个备选方向，并解释为什么匹配。

它同时覆盖激光制作、3D 打印和热压转印。推荐依据公开可见，不是付费排名，也不会把所有人强行导向同一个品牌。

因为有人需要速度，有人需要精细度；有人准备第一次尝试副业，有人已经每天处理几十个订单。脱离产品和工作流谈“最好机器”，其实没有意义。

## LAB NOTE 05｜这不是一个“AI 创业大师”

我没有想做一个输入几句话，就告诉你下个月能赚多少钱的网站。

市场会变，成本会变，每个人的设计能力、销售渠道和执行效率也不同。网站里的机会分数、利润和回本周期都是估算，不是收入承诺。

Maker Business Lab 真正想解决的，是让一个模糊的创业念头变得更具体：当问题变清楚，行动才不会只是冲动消费。

## LAB NOTE 06｜它适合三类人

如果你正在考虑用激光、3D 打印或热压转印做一份副业，可以先从产品机会开始，看看哪个方向更接近你的兴趣、预算和渠道。

如果你已经买了机器，却还没有稳定产品，可以用利润工具重新检查售价、成本和产能，找到真正卡住生意的变量。

如果你正在比较不同设备，不妨先完成设备匹配任务，再带着自己的产品、产量和优先级去看机器，而不是被参数牵着走。

![让手艺走出工作台，成为可以持续的小生意](${makerRoot}/image-05.jpg)

## LAB NOTE 07｜先做一遍生意，再决定买什么

Maker Business Lab 已经上线，默认英文，右上角可以切换中文。网站现在可以直接使用：

https://maker.wonderelian.com/

你可以从 7 个产品方向里选一个，把参考数据换成自己的数字，看看这门小生意在现实里是否成立。

如果最后的答案是“现在还不该买机器”，这同样是一个有价值的结果。

因为真正好的开始，不是拥有更多设备。

而是更清楚地知道，自己准备为谁创造什么价值，以及这件事怎样长期做下去。

![长按识别二维码，打开 Maker Business Lab](${makerRoot}/image-06.jpg)

Maker Business Lab

产品机会 · 利润测算 · 设备匹配

点击「阅读原文」，先做一遍生意

本文配图由 ChatGPT 设计生成
      `,
    },
    en: {
      label: "FIELD NOTE · 02",
      title: "Want a Laser or 3D-Printing Side Business? Start With These Three Numbers",
      excerpt: "Do not begin with the machine. Begin with what you will sell, what you will earn, and when the investment pays back.",
      read: "Read the essay",
      back: "Back to field notes",
      content: `
MAKER BUSINESS LAB

Do not begin by asking which machine to buy. Ask what you will sell, what you will earn, and how long it will take to recover your investment.

![Start with the product and the business, then choose the right production method](${makerRoot}/image-01.jpg)

After years of working with laser equipment and maker products, I have become certain of one thing: many people begin a maker business with the wrong first question.

They usually ask, “Which machine should I buy?”

The better questions are: What am I going to sell? Who will buy it? How much will I earn per order? How many can I make each month? When will the investment pay back?

Machines matter, but a machine is never the beginning of a business.

That is why I built Maker Business Lab. It does not rush to sell you equipment. It first helps you understand the product, profit, capacity, and investment.

> Lead with money, not machines.\nStart with the business, then choose the machine.

## LAB NOTE 01｜A Good Machine Does Not Automatically Create a Good Business

Machine specifications are easy to compare: power, bed size, speed, and compatible materials. New makers naturally put all their attention there.

The harder questions appear after the machine arrives. What will you make? Who will buy it? How will you price it? What remains after materials, packaging, labor, and waste? Can production keep up when orders grow?

One more machine in the studio does not create one more product worth buying in the market.

I want to restore the right sequence: find a product that might work, validate the numbers, then choose the production method that fits.

![Choose a product worth validating before deciding what equipment you need](${makerRoot}/image-02.jpg)

## LAB NOTE 02｜Look for Product Opportunities Before Browsing Equipment Catalogs

Maker Business Lab currently maps seven maker-product directions worth testing: personalized tumblers, custom leather patches, acrylic wedding signs, layered wood wall art, 3D-printed desk organizers, geometric planters, and heat-transfer tote bags.

Each product receives explainable opportunity signals across demand, margin, competition, production difficulty, and efficiency. You can inspect reference prices, material costs, unit margin, production time, and suitable sales channels.

This is not a viral-product prediction, and it does not promise that copying an idea will make money. It is a starting map: a faster way to rule out poor fits and save your time for products worth testing.

![Put material cost, price, time, and order volume into the same calculation](${makerRoot}/image-03.jpg)

## LAB NOTE 03｜Turn “This Feels Profitable” Into Numbers You Can Change

Creators easily fall in love with a product without ever calculating its business model.

A tumbler selling for $32 sounds promising. But what do the blank, packaging, waste, platform fees, and production time cost together? How many orders can you finish each day? At a realistic order volume, how long would new equipment take to pay back?

The site includes a product ROI calculator and a tumbler profit calculator. Change the selling price, material cost, production time, order volume, and equipment investment to see how margin, capacity, and payback move.

I deliberately kept the calculation transparent. The result is not a mysterious “AI answer,” but a set of assumptions you can understand, question, and replace with your own real data.

A good tool does not decide for you. It shows you the numbers beneath your decision.

![Different products, budgets, and workflows call for different production paths](${makerRoot}/image-04.jpg)

## LAB NOTE 04｜Match the Equipment Last

Once you know what you want to make, choosing equipment becomes much easier.

The Maker Equipment Matcher asks about production method, product type, priorities, expected volume, investment level, and experience. It then suggests a best-fit equipment category and an alternative, with an explanation for each match.

It covers laser making, 3D printing, and heat-transfer production. The recommendation logic is visible, is not paid placement, and does not push everyone toward the same brand.

Some makers need speed; others need detail. Some are testing their first side business; others already process dozens of orders a day. There is no meaningful “best machine” outside the context of a product and workflow.

## LAB NOTE 05｜This Is Not an “AI Business Guru”

I did not want to build a site that accepts a few sentences and tells you how much you will earn next month.

Markets change, costs change, and every person has different design ability, sales channels, and execution. Opportunity scores, profit, and payback periods on the site are estimates—not income promises.

Maker Business Lab has a simpler purpose: turn a vague business impulse into a concrete question. Once the question becomes clear, action no longer has to be an impulsive purchase.

## LAB NOTE 06｜Who It Is For

If you are considering a laser, 3D-printing, or heat-transfer side business, begin with product opportunities and see which direction fits your interests, budget, and channels.

If you already own a machine but do not have a stable product, use the profit tools to recheck pricing, cost, and capacity and identify the variable truly holding the business back.

If you are comparing equipment, complete the matching flow first. Then evaluate machines with your product, volume, and priorities in mind instead of being led by specifications.

![Let a craft leave the workbench and become a sustainable small business](${makerRoot}/image-05.jpg)

## LAB NOTE 07｜Run the Business Once Before Deciding What to Buy

Maker Business Lab is now live. English is the default, and Chinese is available from the top-right language switcher:

https://maker.wonderelian.com/

Choose one of the seven product directions, replace the reference data with your own numbers, and see whether the small business holds up in reality.

If the answer is “I should not buy a machine yet,” that is still a valuable result.

A good beginning is not owning more equipment.

It is knowing more clearly whom you want to create value for—and how you can keep doing it over time.

![Scan to open Maker Business Lab](${makerRoot}/image-06.jpg)

Maker Business Lab

Product opportunities · Profit calculators · Equipment matching

Run the business once before you buy

Images in this article were designed with ChatGPT.
      `,
    },
  },
  {
    slug: "graphic-brutalism-honest-power",
    date: "2026-08-20",
    readingTime: { zh: "约 8 分钟", en: "8 min read" },
    author: { zh: "永歌 Elian", en: "Elian Yong" },
    cover: `${brutalismRoot}/image-01.jpg`,
    zh: {
      label: "片刻随记 · 03",
      title: "今天这张风格，故意“不好看”：Graphic Brutalism 的诚实与力量",
      excerpt: "当所有画面都在努力变得顺滑，它偏偏把结构和接缝留在外面。",
      read: "阅读全文",
      back: "返回片刻随记",
      content: `
STYLE ATLAS · TODAY'S STYLE #09

当所有画面都在努力变得顺滑，它偏偏把结构和接缝留在外面。

![今日风格：Graphic Brutalism · 粗野主义视觉语汇](${brutalismRoot}/image-01.jpg)

今天打开「虾子曰艺术风格图鉴」，首页给我的风格是 Graphic Brutalism，中文叫「粗野主义视觉语汇」。

它第一眼并不讨巧：边框很硬，结构直接暴露，字体像系统默认，画面甚至保留一种“没有精修完”的感觉。

但我越看，越觉得它很适合今天。

当大多数界面、海报和 AI 图片都在努力变得圆润、顺滑、没有瑕疵时，粗野主义选择把接缝留在外面。它不急着讨好你，只是很诚实地告诉你：信息是怎样被摆上台面的。

> 这个画面是不是故意把结构露出来，让你看见信息是怎样被摆上台面的？

## SECTION 01｜粗野主义，不等于“随便做得难看”

Graphic Brutalism 借用了建筑粗野主义的气质：直接、沉重、裸露。就像一栋不把混凝土藏起来的建筑，平面设计中的粗野主义也不急着掩饰自己的边框、模块、按钮和网格。

但这里有一个很重要的区别：粗糙不是没有设计，而是把设计的痕迹留给你看。

真正的粗野主义依然有秩序。它只是拒绝用圆角、阴影、渐变和装饰，把一切磨得像同一块光滑的塑料。

![粗野主义的粗糙不是随便，底层依然有秩序](${brutalismRoot}/image-02.jpg)

## SECTION 02｜看懂它，只需要抓住三个线索

### 裸露结构

边框、模块、粗大的分区，甚至像默认按钮一样的控件，都被直接摆到台面上。结构不是幕后骨架，而是画面本身。

### 不精修表面

系统字体、生硬裁切、粗粝肌理和突兀留白都可以出现。但这些“不完美”必须有意组织，否则只会变成凌乱。

### 情绪直接

它常常克制用色、减少装饰，却用强硬的结构制造存在感。看起来直接、坚硬、未修饰，甚至带一点距离。

![同样拒绝过度精致，三种风格的组织逻辑并不相同](${brutalismRoot}/image-03.jpg)

## SECTION 03｜它和瑞士风格、Punk DIY 有什么不同？

粗野主义和瑞士风格都重视信息结构。但瑞士风格会把网格打磨成一种冷静、透明的秩序；粗野主义则故意让边框、默认感和未经抛光的表面站到前景。

它和 Punk DIY 也都拒绝精致的商业感。但 Punk DIY 更接近拼贴、复印、手写和自出版；粗野主义的核心，是把结构裸露出来，让信息以更硬的边界出现。

所以，判断一种风格不能只看它“像不像”。真正重要的是：它为什么这样组织画面，它在拒绝什么，又在强调什么。

## SECTION 04｜为什么今天的我们，会重新喜欢这种“粗”？

因为过度顺滑，正在让很多东西失去性格。

我们已经习惯了模板化的产品页、磨皮过度的照片，以及一眼看上去都很“对”、却很难记住的 AI 画面。粗野主义的价值，是把摩擦感重新带回来。

它允许一个品牌不那么圆滑，允许一张海报保留力气，也允许一个界面承认自己首先是用来传递信息的。

这种直接未必适合所有场景。医疗、金融、长时间阅读的产品依然需要克制；但用在文化活动、独立品牌、音乐、展览和观点型内容里，它往往能让表达更可信，也更容易被记住。

![今天的《虾子曰·昨日世界》用同一视觉语汇组织全球热点](${brutalismRoot}/image-04.jpg)

## SECTION 05｜真实案例：今天的《虾子曰·昨日世界》

今天的「虾子曰全球热点海报」正好用同一套粗野主义视觉语汇，完成了 2026.08.20 的「昨日世界」：1 张今日总览，加上 8 件全球热点。

把风格放进真实内容以后，它的作用会更清楚。黑、白、红的强对比先建立紧张而直接的新闻感；粗边框和硬分区把关税、AI 监管、无人机配送等不同议题压进明确层级；超大编号、剪切影像、网点与旧纸肌理，则让每张海报像一页可以被保存的独立报纸。

这里的“粗”不是装饰。新闻本身信息密度很高，如果一味追求柔和、精致，重点反而容易被淹没。粗野主义用强硬边界告诉读者先看什么、再看什么，让复杂信息保持冲击力，也保留可读性。

这也是从“认识一种风格”走向“真正会用一种风格”的关键：不是把红黑配色和粗字体贴到所有画面上，而是判断它是否适合内容。全球热点需要直接、清晰和力量感，粗野主义恰好能为这些信息提供共同的视觉语法。

打开今天的《昨日世界》，查看 1 张总览与 8 件全球热点：

https://xiazishuo.com/

## SECTION 06｜风格不只存在于海报里

在家居里，它可能是水泥、金属架与开放收纳；在穿搭里，是工装口袋、外露缝线和厚重边界；在摄影里，是建筑边缘、临时标牌和没有被美化的城市角落。

当你开始用这些线索观察生活，风格就不再只是一个英文名词，而会慢慢变成自己的审美词汇。

这也是我做「虾子曰艺术风格图鉴」的原因：它不替你生成图片，而是帮助你知道什么好看、为什么好看，以及怎么表达好看。

![把 120 种艺术与设计风格装进口袋里](${brutalismRoot}/image-05.jpg)

## SECTION 07｜每天 3 分钟，认识一种风格

网页版目前收录 120 种艺术与设计风格，可以直接打开今天的 Graphic Brutalism，继续看完整解析、对比与日常线索。

iPhone 用户也可以下载免费的「虾子曰艺术风格图鉴」App。现在公开版本为 1.3，支持搜索、收藏、中英双语和离线浏览，把 120 种风格装进口袋里。

你觉得这种直接更可信，还是会因为太生硬而产生距离？

不妨从今天这张图开始，建立自己的审美词库。

![长按识别二维码：打开今日风格，或前往 App Store 免费下载](${brutalismRoot}/image-06.jpg)

虾子曰艺术风格图鉴

每天 3 分钟认识一种风格
知道什么好看、为什么好看、怎么表达好看

点击「阅读原文」查看今日完整解析

文中风格图与界面截图来自「虾子曰艺术风格图鉴」
      `,
    },
    en: {
      label: "FIELD NOTE · 03",
      title: "Deliberately ‘Ugly’: The Honesty and Power of Graphic Brutalism",
      excerpt: "While every image is being polished smooth, this style leaves its structure and seams exposed.",
      read: "Read the essay",
      back: "Back to field notes",
      content: `
STYLE ATLAS · TODAY'S STYLE #09

While every image is being polished smooth, this style leaves its structure and seams exposed.

![Today's style: Graphic Brutalism](${brutalismRoot}/image-01.jpg)

When I opened Style Atlas today, the style waiting on the home screen was Graphic Brutalism.

It is not immediately charming. The borders are hard, the structure is exposed, the typography feels almost like a system default, and the composition seems deliberately unfinished.

The longer I looked, however, the more right it felt for the present moment.

While most interfaces, posters, and AI images work hard to become rounded, smooth, and flawless, Brutalism leaves the joints visible. It does not rush to please you. It simply shows, honestly, how information has been placed on the page.

> Is the composition deliberately exposing its structure so that you can see how the information was put on the table?

## SECTION 01｜Brutalism Is Not “Making Things Ugly at Random”

Graphic Brutalism borrows the direct, heavy, exposed character of Brutalist architecture. Just as a building may refuse to hide its concrete, Brutalist graphic design does not disguise its borders, modules, buttons, or grid.

But there is an important distinction: roughness is not the absence of design. It is the decision to leave evidence of design visible.

Real Brutalism still has order. It simply refuses to polish everything with rounded corners, shadows, gradients, and decoration until every surface resembles the same smooth plastic.

![Brutalist roughness is intentional; order still exists beneath it](${brutalismRoot}/image-02.jpg)

## SECTION 02｜Three Clues Are Enough to Read It

### Exposed structure

Borders, modules, heavy divisions, and even controls that resemble default buttons are placed in plain sight. Structure is not a hidden skeleton; it becomes the image itself.

### Unpolished surfaces

System fonts, abrupt crops, coarse textures, and uncomfortable empty space can all appear. But these “imperfections” must be deliberately organized, or they become mere disorder.

### Direct emotion

The palette is often restrained and decoration reduced, while rigid structure creates presence. The result feels direct, hard, unvarnished, and sometimes deliberately distant.

![Three styles may reject polish, yet organize their images in different ways](${brutalismRoot}/image-03.jpg)

## SECTION 03｜How Is It Different From Swiss Style or Punk DIY?

Brutalism and Swiss Style both value information structure. Swiss design refines the grid into calm, transparent order; Brutalism deliberately brings borders, defaults, and unpolished surfaces to the foreground.

Brutalism and Punk DIY also reject polished commercial taste. Punk DIY leans toward collage, photocopying, handwriting, and self-publishing. Brutalism is centered on exposing structure and giving information harder edges.

A style therefore cannot be understood only by whether something “looks like it.” What matters is why the image is organized that way, what it refuses, and what it emphasizes.

## SECTION 04｜Why Are We Drawn to This Roughness Again?

Because excessive smoothness is causing many things to lose their character.

We have grown used to templated product pages, over-retouched photographs, and AI images that look immediately “correct” yet are difficult to remember. Brutalism restores friction.

It lets a brand remain less agreeable, a poster retain physical force, and an interface admit that its first job is to communicate information.

This directness is not right for every context. Medical, financial, and long-form reading products still require restraint. But for cultural events, independent brands, music, exhibitions, and opinion-led content, it can make an expression feel more credible and memorable.

![Today's Xiazi Yesterday's World organizes global news through the same visual language](${brutalismRoot}/image-04.jpg)

## SECTION 05｜A Real Example: Today's “Yesterday's World”

Today's Xiazi global-news posters used the same Brutalist visual language for the August 20, 2026 edition of Yesterday's World: one daily overview and eight global stories.

Once a style enters real content, its purpose becomes clearer. Strong black, white, and red contrast establishes urgency. Thick borders and hard divisions organize tariffs, AI regulation, drone delivery, and other subjects into clear hierarchy. Oversized numbers, cut imagery, halftones, and aged-paper texture make each poster feel like a newspaper page worth keeping.

The roughness is not decoration. News is already dense with information; if everything is made soft and elegant, the priorities can disappear. Brutalism uses hard boundaries to tell the reader what to see first and next, preserving both impact and readability.

This is the shift from recognizing a style to knowing how to use it. The point is not to apply red, black, and heavy type everywhere. It is to judge whether the style suits the content. Global news needs directness, clarity, and force; Brutalism provides a shared visual grammar for them.

Open today's Yesterday's World to see the overview and all eight stories:

https://xiazishuo.com/

## SECTION 06｜Style Does Not Exist Only in Posters

At home it may appear as concrete, metal shelving, and open storage. In clothing it becomes utility pockets, exposed seams, and heavy boundaries. In photography it appears in building edges, temporary signs, and urban corners that have not been beautified.

Once you begin noticing life through these clues, a style stops being an English label and gradually becomes part of your own visual vocabulary.

That is why I made Style Atlas. It does not generate pictures for you. It helps you understand what looks good, why it looks good, and how to describe it.

![Carry 120 art and design styles in your pocket](${brutalismRoot}/image-05.jpg)

## SECTION 07｜Learn One Style in Three Minutes a Day

The web edition currently contains 120 art and design styles. Open today's Graphic Brutalism entry to continue with the full analysis, comparisons, and clues from everyday life.

iPhone users can also download the free Style Atlas app. Version 1.3 supports search, favorites, Chinese and English, and offline reading—120 styles in your pocket.

Does this directness feel more trustworthy to you, or does its hardness create distance?

Start with today's image and begin building your own visual vocabulary.

![Scan to open today's style or download the free App Store edition](${brutalismRoot}/image-06.jpg)

Style Atlas

One style in three minutes a day
Know what looks good, why it works, and how to express it

Open the full analysis of today's style

Style images and interface screenshots in this essay come from Style Atlas.
      `,
    },
  },
  {
    slug: "wendao-1-0-app-store",
    date: "2026-08-18",
    readingTime: { zh: "约 9 分钟", en: "9 min read" },
    author: { zh: "永歌 Elian", en: "Elian Yong" },
    cover: `${wendaoRoot}/image-01.jpg`,
    zh: {
      label: "片刻随记 · 04",
      title: "三慢问道 1.0 上架 App Store：把《道德经》读慢一点，也读近一点",
      excerpt: "把原文、校读、今译、现代解读与生活实践，放进一个安静的阅读体验。",
      read: "阅读全文",
      back: "返回片刻随记",
      content: `
三慢问道 · WENDAO · VERSION 1.0

以马王堆帛书乙本为主要底本，把原文、校读、今译、现代解读与生活实践，放进一个安静的阅读体验。

![三慢问道 1.0 · 真实自己，流动人生](${wendaoRoot}/image-01.jpg)

![慢下来，读一章《道德经》](${wendaoRoot}/image-02.jpg)

今天，三慢问道 Wendao 1.0 正式上架 Apple App Store。

目前可以在中国大陆以外的 App Store 店面免费下载，支持 iOS 15.0 及以上版本；不方便安装 App 的读者，也可以继续使用 H5 版：

https://wendao.wonderelian.com

对我来说，这不只是一个产品上架的消息。

它更像是过去一段时间里，我重新阅读《道德经》、重新理解生活，也重新学习怎样做一个安静产品的阶段性结果。

## CHAPTER 01｜为什么还要做一款《道德经》App？

今天的互联网上，并不缺少《道德经》的原文、译文和解读。

我们真正缺少的，也许不是“更多解释”，而是一种更清楚、更诚实，也更接近当下生活的阅读方式。

《道德经》经常以名句的形式出现。

“上善如/若水”“道法自然”“无为而治”……这些句子很熟悉，但当它们离开篇章、版本和语境以后，也很容易变成一句漂亮却遥远的话。

我想做的，是把这些古老文字重新放回它们应有的位置：

看见原字从哪里来，知道校补发生在哪里，理解一句话可能在说什么，也允许它与今天的工作、关系、选择和焦虑重新发生联系。

所以，三慢问道并不是想替任何人给出“正确答案”。

它更希望提供一个安静的入口，让我们可以慢下来，读一章，再想一想这一章与自己有什么关系。

![帛书乙本转写、校读正文与现代解读，边界清晰](${wendaoRoot}/image-03.jpg)

## CHAPTER 02｜三层文本：先看清边界，再进入理解

三慢问道以马王堆帛书乙本为主要底本，把文本分成三个层次：

### 第一层：帛书乙本转写

尽可能呈现底本原字、缺损与可辨识的边界，不把后人的判断悄悄伪装成“原文”。

### 第二层：校读正文

在必要的位置进行校补、断句和传世版本参照，并明确告诉读者这些变化发生在哪里。

### 第三层：现代解读

通过带声调拼音、逐句今译、本章主旨和现代解读，帮助今天的读者进入文本，而不是只停留在字面。

我很在意这种层次感。

因为面对一部流传两千多年的经典，尊重并不意味着不去解释；真正的尊重，是把“原文”“校读”和“理解”之间的边界说清楚。

![逐句今译与现代解读，让古老文字进入今天](${wendaoRoot}/image-04.jpg)

## CHAPTER 03｜从“读懂一句话”，到“今天可以做什么”

如果一章《道德经》只停留在“我好像看懂了”，它与生活之间仍然隔着很远的距离。

因此，每一章除了原文、今译与解读，还整理了三条更详细的“对我们的启发”。

同时，每章还有一个低负担的“今日一练”。

它不要求我们立刻改变人生，也不是又一项需要完成的打卡任务。

它只是试着把阅读变成当下可以做的一小步：慢一点回答，留意一次身体反应，少做一个急于证明自己的决定，或者在冲突里先让情绪流过去。

《道德经》不一定要被供在很高的地方。

它也可以进入今天的一次会议、一段关系、一个选择，或者一个睡不着的晚上。

![每章三条“对我们的启发”，连接真实生活](${wendaoRoot}/image-05.jpg)

## CHAPTER 04｜一个可以随时打开，也可以安静离开的阅读工具

三慢问道完整收录今本 81 章。

目录、搜索、偶遇一章与连续阅读互相贯通；日间和夜间模式、正文字号调整，则让每个人可以找到适合自己的阅读状态。

核心 81 章与阅读界面已经随 App 打包，无需登录，也可以离线阅读。

我希望它是一件低负担的工具。

你可以认真地从第一章读到第八十一章，也可以只在某一天偶遇一章。可以做笔记、继续思考，也可以读完就把手机放下。

产品不需要不断争夺注意力。

有时候，好的体验恰恰是它知道什么时候应该安静。

![目录、搜索、偶遇一章与连续阅读互相贯通](${wendaoRoot}/image-06.jpg)

## CHAPTER 05｜人生说明书：不是定义自己，而是多一个观察自己的角度

三慢问道也提供了一个自愿使用的“人生说明书”。

在选择提供出生资料后，可以获得由类型、策略、权威、人生角色与定义共同形成的个人内容，并继续阅读 12 个更具体的自我观察主题。

我并不认为一个系统能够告诉任何人“你应该成为谁”。

人生说明书更像一面镜子：它不替你做决定，只是提供一些新的问题，帮助你观察自己的节奏、关系、工作方式与真实反应。

其中的内容用于自我观察，不构成医疗、心理、法律建议，也不用于命运判断。

认识自己，不是给自己贴上一个固定标签。

而是在变化中，更诚实地看见自己。

![人生说明书提供另一种自我观察的角度](${wendaoRoot}/image-07.jpg)

## CHAPTER 06｜一休、不二、三慢、如水

在做三慢问道的过程中，我慢慢整理出四个自己很喜欢的词：

一休，是先照顾身体，也照顾情绪。

不二，是接受人生既有高峰，也有低谷。

三慢，是慢下来、慢慢来、慢慢成为。

如水，是不固执于某一种身份，在变化中保留自己的内核。

最后，它们汇成一句话：

> 向内认识自己，向外如水而行。

三慢问道 1.0 只是一个开始。

接下来，我会继续打磨文本、阅读体验与不同语言版本，也欢迎你把使用中遇到的问题和感受告诉我。

真实自己，流动人生。

愿我们都能在很快的世界里，给自己留一点慢下来的空间。

## 体验三慢问道｜App Store 与 H5

三慢问道 Wendao 1.0 已在中国大陆以外的 App Store 店面上线，免费下载，支持 iOS 15.0 及以上版本。

https://apps.apple.com/us/app/wendao-daodejing/id6796945428?l=zh-Hans-CN

无需安装，打开浏览器即可体验 H5 版：

https://wendao.wonderelian.com

三慢问道 · WENDAO

真实自己，流动人生
      `,
    },
    en: {
      label: "FIELD NOTE · 04",
      title: "Wendao 1.0 Is on the App Store: Reading the Tao Te Ching More Slowly—and More Closely",
      excerpt: "An unhurried reading experience that brings source text, textual notes, translation, interpretation, and daily practice together.",
      read: "Read the essay",
      back: "Back to field notes",
      content: `
WENDAO · VERSION 1.0

Based primarily on the Mawangdui Silk Manuscript B, Wendao brings source text, textual notes, modern translation, interpretation, and daily practice into one quiet reading experience.

![Wendao 1.0 · Be real, live fluidly](${wendaoRoot}/image-01.jpg)

![Slow down and read one chapter of the Tao Te Ching](${wendaoRoot}/image-02.jpg)

Today, Wendao 1.0 officially arrived on the Apple App Store.

It is currently available as a free download in App Store regions outside mainland China and supports iOS 15.0 or later. Readers who prefer not to install the app can continue using the web edition:

https://wendao.wonderelian.com

For me, this is more than a product release.

It is a milestone from a period in which I reread the Tao Te Ching, reconsidered how to live, and relearned how to make a quiet product.

## CHAPTER 01｜Why Make Another Tao Te Ching App?

The internet is not short of original text, translations, or interpretations of the Tao Te Ching.

What we may truly lack is not more explanation, but a way of reading that is clearer, more honest, and closer to life as we live it now.

The Tao Te Ching often reaches us as a collection of famous lines.

“The highest goodness is like water,” “The Way follows what is natural,” “Govern through non-action” — the lines are familiar. But once removed from their chapter, textual version, and context, they easily become beautiful yet distant slogans.

I wanted to return these ancient words to their proper place:

to show where the characters came from, disclose where reconstruction occurred, explore what a sentence might mean, and allow it to meet our work, relationships, choices, and anxiety today.

Wendao is therefore not trying to give anyone the “correct answer.”

It offers a quiet entrance: slow down, read one chapter, and consider what that chapter might have to do with you.

![Transcription, edited text, and interpretation are kept within clear boundaries](${wendaoRoot}/image-03.jpg)

## CHAPTER 02｜Three Layers of Text: See the Boundaries Before Entering the Meaning

Using the Mawangdui Silk Manuscript B as its primary source, Wendao separates the text into three layers.

### Layer one: transcription of Silk Manuscript B

The transcription preserves original characters, damage, and the limits of what can be identified wherever possible. Later judgments are not quietly disguised as “the original.”

### Layer two: edited reading text

Necessary reconstructions, punctuation, and references to received editions are made explicitly, so readers know where changes have occurred.

### Layer three: modern interpretation

Tone-marked pinyin, line-by-line modern Chinese, a chapter summary, and contemporary interpretation help today's reader enter the text rather than stopping at its surface.

I care deeply about this layering.

Respecting a classic transmitted for more than two thousand years does not mean refusing to explain it. Real respect means making the boundaries between source, editing, and understanding clear.

![Line-by-line translation and contemporary interpretation bring ancient words into the present](${wendaoRoot}/image-04.jpg)

## CHAPTER 03｜From “I Understand the Sentence” to “What Can I Do Today?”

If reading a chapter ends with “I think I understand it,” a large distance still remains between the text and life.

Alongside the source, translation, and interpretation, every chapter therefore includes three fuller reflections on what it may offer us.

Each chapter also includes one low-pressure practice for the day.

It does not ask us to transform our lives immediately, and it is not another habit-tracking task to complete.

It simply turns reading into one small action available now: answer more slowly, notice one response in the body, make one fewer decision driven by the urge to prove yourself, or let emotion pass before acting in a conflict.

The Tao Te Ching does not have to remain on a distant pedestal.

It can enter today's meeting, a relationship, a choice, or a sleepless night.

![Three reflections in every chapter connect the text with real life](${wendaoRoot}/image-05.jpg)

## CHAPTER 04｜A Reading Tool You Can Open at Any Time—and Leave Quietly

Wendao contains all 81 chapters of the received text.

The contents, search, a chance encounter with one chapter, and continuous reading work together. Day and night modes and adjustable text size help each reader find a comfortable state.

All 81 core chapters and the reading interface are bundled with the app. No account is required, and the text is available offline.

I wanted it to be a low-pressure tool.

You can read carefully from chapter one to eighty-one, or encounter a single chapter on an ordinary day. You can take notes and keep thinking, or simply put the phone down when you finish.

A product does not need to compete endlessly for attention.

Sometimes the best experience is one that knows when to become quiet.

![Contents, search, chance encounters, and continuous reading belong to one flow](${wendaoRoot}/image-06.jpg)

## CHAPTER 05｜A Personal Guide: Not a Definition, but Another Angle for Self-Observation

Wendao also offers an optional “Personal Guide.”

Readers who choose to provide birth information receive content shaped by type, strategy, authority, profile, and definition, followed by twelve more specific themes for self-observation.

I do not believe any system can tell a person who they should become.

The Personal Guide is closer to a mirror. It does not make decisions for you; it offers new questions for observing your rhythm, relationships, way of working, and genuine responses.

Its content is for self-observation. It is not medical, psychological, or legal advice, and it is not a prediction of fate.

Knowing yourself does not mean attaching a fixed label to yourself.

It means seeing yourself more honestly while you change.

![The Personal Guide offers another angle for observing yourself](${wendaoRoot}/image-07.jpg)

## CHAPTER 06｜Rest, Wholeness, Slowness, and Water

While making Wendao, I gradually gathered four Chinese phrases that became important to me.

Yixiu: care for the body first, and care for emotion too.

Buer: accept that life contains both peaks and valleys.

Sanman: slow down, take your time, and slowly become.

Rushui: do not cling to one identity; keep your inner nature while moving with change.

Together they became one line:

> Know yourself within.\nMove like water through the world.

Wendao 1.0 is only a beginning.

I will continue refining the text, the reading experience, and additional languages. I also welcome your questions and reflections from using it.

Be real. Live fluidly.

May we all preserve a little room to slow down in a very fast world.

## Experience Wendao｜App Store and Web

Wendao 1.0 is available free in App Store regions outside mainland China and supports iOS 15.0 or later.

https://apps.apple.com/us/app/wendao-daodejing/id6796945428

No installation is required for the web edition:

https://wendao.wonderelian.com

WENDAO

Be real. Live fluidly.
      `,
    },
  },
];
