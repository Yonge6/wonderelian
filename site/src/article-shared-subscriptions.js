const assetRoot = "/assets/notes/2026-09-18-shared-subscriptions";

export const sharedSubscriptionsArticle = {
  slug: "apple-shared-subscriptions-one-person-company",
  number: "09",
  date: "2026-09-18",
  readingTime: { zh: "约 8 分钟", en: "8 min read" },
  author: { zh: "永歌 Elian", en: "Elian Yong" },
  cover: `${assetRoot}/cover.png`,
  zh: {
    label: "片刻随记 · 09",
    title: "苹果允许多个 App 共用一份订阅，一人公司的新机会来了？",
    excerpt: "一份订阅，一组产品，一段长期关系：新能力真正改变的，也许不是价格，而是小开发者经营作品的方式。",
    read: "阅读全文",
    back: "返回片刻随记",
    content: `
![一份订阅，连接一组产品与生活时刻](${assetRoot}/cover.png)

如果一个人做了四个 App，通常会得到什么？

四套功能、四个更新计划、四张价格页，以及一个比以前更累的自己。

所以当我看到苹果刚公布的新订阅能力时，第一反应不是“终于可以多收几份钱了”。

我想到的是另一件事：一个人做的多个小产品，第一次有机会被当成一套完整的服务来经营。

这对一人公司来说，可能比再多一个支付按钮更有意思。

## 01 / ONE PASS · MANY MOMENTS｜苹果这次到底改了什么？

9 月 16 日，苹果在开发者网站公布了 iOS 27 的 Bundles 和 Suites。

名字有点像酒店早餐的不同套餐，区别其实很清楚。

**Bundle** 可以把多份自动续期订阅放进一次购买里。它既可以包含同一个开发者的多个 App，也可以由不同开发者合作组成。苹果写明，多开发者 Bundle 最多可以有五位开发者参与。

**Suite** 更像一张通行证：同一个开发者可以用一份订阅，让用户访问自己的一组 App，最多覆盖十五个 App。

购买时，App Store 会展示这份订阅包含的 App，帮助用户下载和使用。

不过，现在还不能把后台开关一拨，马上就上架“全家桶”。开发者需要提交申请，获得批准后再配合苹果完成配置；相关能力计划在 2026 年稍晚登陆 iOS 27、iPadOS 27、macOS 27 和 tvOS 27，并要求使用 StoreKit 2。[1][2]

所以，这是一条已经公布、可以开始准备的新路，不是一张今天就能兑现的支票。

## 02 / ONE PASS · MANY MOMENTS｜一份订阅，能不能陪一个人过完一天？

这条消息让我重新看了一遍自己做的几个产品。

早上醒来，我会打开虾子曰，看看昨天世界发生了什么。

中午想睡一会儿，我会打开一休冥想，听着自然声慢慢睡过去。夜里提前醒来，也会再听一段。

有空的时候，我会在三慢问道里读一章《道德经》。我尤其喜欢“对我们的启发”和“生活中的道”，因为读完原文以后，我还想知道：这句话跟今天的我有什么关系？

想理解自己时，我会打开不二，把它当成一份可以慢慢翻阅的“自己的使用说明书”。

它们看起来是四个不同的 App：新闻、声音、经典阅读、自我认识。

但如果把镜头拉远一点，它们都在服务同一个人，也都在回答相近的问题：怎样更清楚地看世界，也更安静地看自己。

![同一个人的一天，不同产品的使用时刻 · 概念示意](${assetRoot}/one-day.png)

这里我说的是产品设想。WonderElian 目前并没有开通苹果的 Suite，这几个 App 也没有共享一份订阅。

但苹果的新能力，让这种设想第一次有了更具体的产品形态：用户购买的可以不只是某一个功能，而是创作者长期提供的一组体验。

## 03 / ONE PASS · MANY MOMENTS｜卖“更多 App”，很可能是个坏主意

看到这里，很容易开始做一道危险的加法题：

一个 App 卖 18 元，四个 App 放一起，是不是就能卖 68 元？

如果只是把四张价格表订在一起，用户不会觉得自己买到了一套服务，只会觉得结账页面变长了。

多 App 订阅要成立，我认为至少要回答三个问题。

第一，是不是同一群人？

第二，它们是不是围绕一个共同承诺？

第三，每个 App 有没有一个独立而清楚的使用时刻？

一个负责早晨，一个负责睡前，一个负责阅读，一个负责记录。用户知道什么时候该打开谁，也知道为什么它们属于同一个家族。

这才叫产品组合。

否则就像在早餐套餐里放进一碗面、一把雨伞和一节线上英语课。东西都可能不错，但很难解释为什么要一起买。

## 04 / ONE PASS · MANY MOMENTS｜一人公司的机会，不是突然拥有十五个 App

苹果允许 Suite 最多覆盖十五个 App，并不意味着一人公司应该连夜做出十五个图标。

维护十五个没人想用的 App，和养十五盆已经忘记浇水的绿植差不多。数量只会让内疚变得更有规模。

真正的机会，是经营方式发生了变化。

过去，一个小开发者常常把希望押在单个 App 上：一次发布、一个商店页面、一条订阅曲线。产品没有跑起来，就像整家公司都没跑起来。

如果多个产品服务的是同一群人，一份 Suite 可能让创作者经营的是“长期关系”，而不是不断重新寻找下一批陌生用户。

有人因为一休认识你，后来开始读三慢问道；有人因为虾子曰进来，慢慢发现这里还有帮助自己安静下来的产品。

这并不保证转化，也不等于用户一定愿意为整套产品付费。但它提供了一种新的可能：一个产品负责第一次相遇，其他产品继续兑现同一个承诺。

对一人公司来说，这比追求每个 App 都成为独立爆款，更接近一种可以长期照顾的生意。

## 05 / ONE PASS · MANY MOMENTS｜共享订阅，也会把问题一起共享

一张通行证把产品连起来以后，优点会被放大，问题也会。

其中一个 App 长期不更新，用户不会只觉得那个 App 不值钱。他会开始怀疑整份订阅。

账户、权益、隐私、客服和取消流程，也不再是每个 App 各管一段。用户不关心你的技术架构，他只会问一句：“我明明订阅了，为什么这里还打不开？”

更现实的问题是维护成本。

一人公司最稀缺的通常不是创意，而是注意力。产品越多，测试、上架、内容、用户反馈和适配工作都会增加。

所以，共享订阅不是把更多东西塞进一个价格里，而是要求创作者把整个产品家族照顾得更一致。

这件事的难度，可能比单独卖四次更高。

## 06 / ONE PASS · MANY MOMENTS｜如果是我，会先做这三步

第一步，不急着设计套餐，先看哪个产品真的有人反复使用。

我会先问自己：如果明天只能留下一个，我最舍不得哪一个？如果只能推荐给一个朋友，我能不能说清它解决了什么？

第二步，找出产品之间真正共享的那条线。

不是因为它们都由我做，就应该放在一起。作者相同只是身份证，不是购买理由。用户需要看见的是：这些产品怎样一起让他的生活变得更好。

第三步，再决定哪些能力适合共享。

可以是一份会员权益、一套内容服务、跨 App 的收藏和记录，也可以只是更简单的价格选择。共享得越多，背后的维护责任越大。

先把一件事做得值得订阅，再考虑把第二个产品带进来。

## 07 / ONE PASS · MANY MOMENTS｜我更想经营的，是一套作品

这次苹果的更新，并不会自动制造一人公司。

它真正改变的，是小开发者可以怎样想象自己的产品。

以前，我们做完一个 App，再去想下一个。它们像散落在桌上的作品，各自有名字、图标和价格。

以后，它们也许可以像一本持续写下去的书：每个 App 是不同章节，但都属于同一个作者，也服务同一种生活。

早上看世界，中午安静下来，晚上读一章，再慢慢理解自己。

如果有一天，这些产品真的值得一个人长期使用，那么他订阅的就不只是四个 App。

他订阅的是一个创作者，准备长期为哪一种生活服务。

这才是我看到的一人公司机会。

### 资料与说明 · 核对日期 2026-09-18

[1] Apple Developer：Get your subscriptions ready for iOS 27  
https://developer.apple.com/news/

[2] Apple Developer：Create Bundles and Suites for auto-renewable subscriptions  
https://developer.apple.com/app-store/subscriptions/bundles-and-suites/

本文对产品组合及 WonderElian 的讨论为个人判断和设想，不表示相关产品已共享订阅，也不构成收入或转化承诺。配图为 AI 辅助创作的概念插画。
`,
  },
  en: {
    label: "Field Notes · 09",
    title: "Apple Now Lets Multiple Apps Share One Subscription. Is This a New Opportunity for One-Person Companies?",
    excerpt: "One subscription, a family of products, and a long-term relationship: the real change may be how small developers build a body of work.",
    read: "Read the note",
    back: "Back to Field Notes",
    content: `
![One subscription connecting a family of products and moments](${assetRoot}/cover.png)

If one person builds four apps, what do they usually end up with?

Four feature sets, four release plans, four pricing pages—and a more exhausted version of themselves.

So when I saw Apple's newly announced subscription capabilities, my first thought was not, “At last, I can charge people several times.”

I thought about something else: for the first time, several small products made by one person could be run as one coherent service.

For a one-person company, that may be more interesting than adding another payment button.

## 01 / ONE PASS · MANY MOMENTS｜What exactly did Apple change?

On September 16, Apple announced Bundles and Suites for iOS 27 on its developer website.

The names sound a little like different hotel breakfast packages, but the distinction is straightforward.

A **Bundle** combines multiple auto-renewable subscriptions into one purchase. It can include subscriptions from one developer across one or more apps, or bring together apps from different developers. Apple says a multi-developer Bundle can include up to five developers.

A **Suite** works more like a pass: one developer can use a single subscription to give people access across a family of apps, covering as many as fifteen apps.

During purchase, the App Store shows the apps included in the subscription, making them easier to download and use.

This is not yet a switch developers can flip to publish an instant “all-in-one package.” They must submit a request and, if approved, work with Apple to complete the configuration. Apple says the capabilities are planned for later in 2026 on iOS 27, iPadOS 27, macOS 27, and tvOS 27, and require StoreKit 2.[1][2]

So this is an announced path worth preparing for, not a cheque that can be cashed today.

## 02 / ONE PASS · MANY MOMENTS｜Can one subscription accompany someone through an entire day?

The announcement made me look again at the products I have built.

When I wake up, I open Xiazi to see what happened in the world yesterday.

When I want to nap at noon, I open Yixiu Meditation and fall asleep to nature sounds. If I wake too early at night, I listen again.

When I have a little time, I read a chapter of the *Tao Te Ching* in Wendao. I especially like the parts about what a passage can teach us and how it returns to daily life, because after reading the original and its translation, I still want to ask: what does this have to do with me today?

When I want to understand myself, I open Buer and treat it as a personal operating manual I can browse slowly.

They look like four different apps: news, sound, classic reading, and self-understanding.

But from farther away, they serve the same person and address related questions: how to see the world more clearly, and how to see oneself more quietly.

![Different products meeting the same person at different moments of the day · concept illustration](${assetRoot}/one-day.png)

This is a product idea. WonderElian has not enabled an Apple Suite, and these apps do not currently share a subscription.

Apple's new capability does, however, give this idea a more concrete product form. A customer could buy more than one feature; they could subscribe to a set of experiences that a creator keeps developing over time.

## 03 / ONE PASS · MANY MOMENTS｜Selling “more apps” is probably a bad idea

At this point, it is easy to begin a dangerous addition exercise:

If one app costs RMB 18, should four apps together cost RMB 68?

If all you do is staple four price lists together, customers will not feel they are buying a service. They will only feel that the checkout page got longer.

For a multi-app subscription to make sense, I think it must answer at least three questions.

First, are the apps for the same people?

Second, do they share a common promise?

Third, does each app have its own clear moment of use?

One belongs to the morning, one to bedtime, one to reading, and one to reflection. People know when to open each app and why they belong to the same family.

That is a product portfolio.

Otherwise, it is like putting a bowl of noodles, an umbrella, and an online English class into one breakfast package. Each may be useful, but it is hard to explain why they should be bought together.

## 04 / ONE PASS · MANY MOMENTS｜The opportunity is not suddenly owning fifteen apps

The fact that an Apple Suite can cover up to fifteen apps does not mean a one-person company should stay up all night making fifteen icons.

Maintaining fifteen apps no one wants is like keeping fifteen plants you have forgotten to water. Scale only makes the guilt larger.

The real opportunity is a change in the operating model.

Small developers have often placed all their hopes on one app: one launch, one store page, one subscription curve. If the product does not work, it can feel as though the entire company has failed.

If several products serve the same people, a Suite may let a creator cultivate a long-term relationship instead of repeatedly searching for the next group of strangers.

Someone may discover you through Yixiu, then begin reading Wendao. Someone else may arrive through Xiazi and gradually discover products that help them become still.

That does not guarantee conversion, and it does not mean people will pay for the whole portfolio. But it introduces a new possibility: one product creates the first meeting, while the others continue to fulfil the same promise.

For a one-person company, that feels closer to a business one can care for over time than trying to turn every app into an independent hit.

## 05 / ONE PASS · MANY MOMENTS｜A shared subscription also shares every problem

Once one pass connects several products, their strengths are amplified—and so are their problems.

If one app goes without updates for too long, customers will not only think that app has lost value. They may begin to doubt the entire subscription.

Accounts, entitlements, privacy, support, and cancellation can no longer be handled as isolated pieces. Customers do not care about your technical architecture. They ask one question: “I subscribed, so why can I not open this?”

The more practical issue is maintenance.

For a one-person company, the scarcest resource is usually attention rather than ideas. More products bring more testing, releases, content, feedback, and compatibility work.

A shared subscription is therefore not a way to cram more things into one price. It asks the creator to care for an entire product family with greater consistency.

That may be harder than selling four products separately.

## 06 / ONE PASS · MANY MOMENTS｜If it were me, I would begin with three steps

First, before designing a package, identify which product people truly use repeatedly.

I would ask myself: if I could keep only one tomorrow, which would I miss most? If I could recommend only one to a friend, could I clearly explain the problem it solves?

Second, find the line the products genuinely share.

They should not be grouped merely because I made all of them. A common author is an identity card, not a reason to buy. People need to see how the products work together to improve their lives.

Third, decide which capabilities should be shared.

It could be one set of membership benefits, a content service, cross-app favourites and records, or simply an easier pricing choice. The more you share, the more responsibility you take on behind the scenes.

Make one thing worth subscribing to before bringing in the second product.

## 07 / ONE PASS · MANY MOMENTS｜What I want to build is a body of work

Apple's update will not create a one-person company automatically.

What it changes is how a small developer can imagine their products.

Previously, we finished one app and then thought about the next. They sat like separate works on a table, each with its own name, icon, and price.

In the future, they might read like a book that continues to be written: every app is a different chapter, but they belong to one author and serve one way of living.

See the world in the morning, become still at noon, read a chapter in the evening, and slowly understand yourself.

If these products one day deserve a place in someone's life for the long term, that person will be subscribing to more than four apps.

They will be subscribing to the kind of life a creator has chosen to serve over time.

That is the opportunity I see for a one-person company.

### Sources and notes · Checked September 18, 2026

[1] Apple Developer: Get your subscriptions ready for iOS 27  
https://developer.apple.com/news/

[2] Apple Developer: Create Bundles and Suites for auto-renewable subscriptions  
https://developer.apple.com/app-store/subscriptions/bundles-and-suites/

The discussion of product portfolios and WonderElian reflects personal judgment and a product concept. It does not mean these products currently share a subscription, and it makes no promise about revenue or conversion. The illustrations were created with AI assistance.
`,
  },
};
