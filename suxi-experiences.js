/* 素喜青山 / SuXi — property references and suggested independent itineraries. */
const art={hero:'assets/suxi/hero.webp',sleep:'assets/sleep.webp',soak:'assets/soak.webp',escape:'assets/escape.webp',ritual:'assets/sleep-ritual.webp',spa:'assets/relax-spa.webp',walk:'assets/forest-walk.webp',aroma:'assets/aroma-detail.webp'};
const mediaRoot='assets/suxi-gallery/';
const propertySource='https://hotels.ctrip.com/hotels/117174952.html';
const roomSource='https://www.wingontravel.com/hotel/detail-chongzhou-117174952/qingcheng-mountain-suxi-qingshan-forest-homestay/';
const routes=[
 {id:'forest',name:'青山循绿',en:'FOREST & VIEWS',image:'assets/suxi/forest.webp',subtitle:'空中栈道 · 玻璃观景台',fit:'喜欢散步、摄影，希望以轻松的方式走进森林的住客。',duration:'两晚停留；第二天安排约 60–90 分钟园内漫步。',description:'从森林空中栈道走向玻璃观景台，在树冠之间停一停，把一段午后交给青山与云影。',stops:'素喜青山 → 森林空中栈道 → 玻璃观景台 → 山谷景观平台 → 返房休息。',included:'建议加入「森林栈道漫步」与「云台候暮」；均为园内自主游览建议。',fee:'住宿按房型报价；平台介绍的公共设施开放与收费以到店确认为准。',conditions:'雨雾、湿滑或设施维护时调整；儿童由成人陪同，高处观景按现场指引。',recommended:['walk','view']},
 {id:'bath',name:'竹影暖汤',en:'BAMBOO & BATH',image:'assets/suxi/bamboo-bath.webp',subtitle:'竹景汤池 · 观景闲坐',fit:'偏爱泡浴与安静停留，想把大部分时间留在民宿里的住客。',duration:'两晚停留；泡浴时长和场次遵循现场设施指引。',description:'在竹景汤池里歇一歇，再回到窗边看青山。想要独享泡浴时，可咨询流岚等私汤房型。',stops:'抵达安顿 → 预约竹景汤池 → 补水休息 → 观景平台候暮 → 次日自在早餐。',included:'建议加入「竹景泡汤」与「云台候暮」；客房私汤仅对应明确配备的房型。',fee:'公共汤池使用规则、私汤房费及其他项目以所订套餐说明为准。',conditions:'先确认汤池开放、使用规则与房型设施；不将泡池描述为天然温泉。',recommended:['bath','view']},
 {id:'tea',name:'茶园知味',en:'TEA & TOGETHERNESS',image:'assets/suxi/tea-house.webp',subtitle:'私家茶园 · 森林茶屋',fit:'喜欢茶、自然观察和与同伴闲聊，希望舒舒服服度过午后的住客。',duration:'两晚停留；茶园漫步约 30 分钟，茶叙约 60–90 分钟。',description:'沿私家茶园慢慢走，看看叶色，再到森林茶屋围坐。用一壶茶和几句闲话，收藏青山的日常。',stops:'素喜青山 → 私家茶园 → 森林茶屋 → 素喜餐厅用餐 → 返房闲读。',included:'建议加入「茶园识绿」与「森林围炉茶叙」；饮茶形式随季节与供应调整。',fee:'茶品、茶点与餐食另询当日菜单；不默认包含采茶、制茶或讲解课程。',conditions:'茶园以观赏漫步为主，不自行采摘；明火围炉仅在民宿允许的场地与时段安排。',recommended:['garden','tea']},
 {id:'culture',name:'街子访古',en:'TOWN & TEMPLE',image:'assets/suxi/jiezi.webp',subtitle:'街子古镇 · 光严禅院',fit:'想在森林小住之外，留半天感受川西街巷与古寺清静的住客。',duration:'两晚停留；第二天预留约半天，含自行往返交通。',description:'把半天留给街子古镇与光严禅院。沿老街散步，在古寺安静停留，回到素喜青山续一杯茶。',stops:'素喜青山 → 街子古镇 → 光严禅院 → 返回森林茶屋；可按体力只选一处。',included:'建议加入「街子与古寺半日」与「森林围炉茶叙」；为自主出行建议。',fee:'交通、停车、门票及茶饮按实际发生另付，未包含包车或导游。',conditions:'出发前核对景区开放、预约与交通；古寺参访尊重现场规则，遇闭园只安排古镇。',recommended:['culture','tea']}
];
const rooms=[
 {id:'view-double',name:'流岚私汤套房',en:'LIULAN · PRIVATE BATH',area:70,bed:'大床配置，床宽以预订页为准',capacity:2,guests:'建议 1–2 位',intro:'公开房型资料列有独享院落与私汤，适合想多留一点私人休息时间的住客。',facilities:['独享院落','客房私汤','独立卫浴','具体配置以预订页为准'],fee:'按日期查询房价',galleryKey:'bath'},
 {id:'courtyard-twin',name:'寒酥庭院双床房',en:'HANSU · COURTYARD TWIN',area:40,bed:'双床配置，床宽以预订页为准',capacity:2,guests:'建议 2 位',intro:'公开房型资料列有独院、户外凉亭与茶桌，适合与朋友结伴小住。',facilities:['双床','独享院落','户外凉亭','庭院茶桌'],fee:'按日期查询房价',galleryKey:'tea'},
 {id:'family-suite',name:'扶光览山双卧套房',en:'FUGUANG · TWO BEDROOMS',area:90,bed:'双卧配置，床型以预订页为准',capacity:4,guests:'建议 2–4 位',intro:'公开资料列示为览山双卧套房，可作为家庭与同伴同行时的房型意向。',facilities:['双卧布局','览山视野','独立卫浴','加住规则另询'],fee:'按日期查询房价',galleryKey:'walk'}
];
const roomThemes=Object.fromEntries(routes.map(r=>[r.id,{name:r.name,description:'先选喜欢的出游节奏，再挑合适的居停空间。以下为公开资料中的三款房型参考。',note:'路线不改变房型配置。房间面积参考公开预订资料，入住人数、床型及套餐以正式预订信息为准。'}]));
function roomForRoute(room,routeId='forest'){
 const theme=roomThemes[routeId]||roomThemes.forest;
 const captions=['空间氛围参考 · 非实拍','另一视角氛围参考 · 非实拍','细节氛围参考 · 非实拍'];
 const gallery=captions.map((caption,i)=>({src:mediaRoot+`room-${room.galleryKey}-${room.id}-0${i+1}.webp`,caption}));
 return {...room,image:gallery[0].src,gallery,theme,themeIntro:room.intro};
}
const activities=[
 {id:'walk',name:'森林栈道漫步',images:['../suxi/forest.webp','activity-walk-02.webp'],duration:'建议 45–60 分钟',text:'沿民宿森林空中栈道慢行，从树叶间看光线，也给自己留几次停步。',conditions:'自主漫步；开放与路面情况到店确认，雨天不赶路，不离开开放步道。'},
 {id:'view',name:'云台候暮',images:['../suxi/forest.webp','faq-weather.webp'],duration:'建议 20–40 分钟',text:'到玻璃观景台或山谷景观平台坐坐，看云层与晚霞；阴天也有青山可看。',conditions:'自主观景；日落与能见度随天气变化，高处设施以现场开放为准。'},
 {id:'bath',name:'竹景泡汤',images:['../suxi/bamboo-bath.webp','activity-bath-02.webp'],duration:'遵循现场使用指引',text:'以民宿公开介绍的户外竹景汤池为体验线索。泡后补水、闲坐，给休息留足时间。',conditions:'提前咨询开放与预约；客房私汤需选择对应房型，公共池与私汤分开确认。'},
 {id:'tea',name:'森林围炉茶叙',images:['../suxi/tea-house.webp','activity-tea-02.webp'],duration:'建议 60–90 分钟',text:'在森林茶屋与同伴围坐，一壶茶慢慢喝。暖季也可用普通茶席延续相聚时光。',conditions:'茶品、茶点、费用与围炉形式需提前沟通，不包含默认的专业茶艺课程。'},
 {id:'garden',name:'茶园识绿',images:['../suxi/tea-house.webp','../about-garden-v2.webp'],duration:'建议 20–30 分钟',text:'走进私家茶园，看叶色、闻草木气息，用观察与摄影记下不同季节的绿。',conditions:'自主观赏建议，不采摘、不损伤植株；不默认提供采茶或制茶服务。'},
 {id:'culture',name:'街子与古寺半日',images:['../suxi/jiezi.webp','faq-flexible.webp'],duration:'建议半天',text:'在街子古镇闲逛，再按开放情况前往光严禅院。把沿途留白当作两晚小住的一部分。',conditions:'自主出行；交通、门票与餐饮另计，需出发前确认目的地开放和道路情况。'}
].map(a=>({...a,image:mediaRoot+a.images[0],gallery:a.images.map((src,i)=>({src:mediaRoot+src,caption:i?'场景氛围参考 · 非实拍':'体验意境参考 · 非实拍'}))}));
const faqImages=['included','flexible','children','pets','weather','changes','availability'].map(id=>mediaRoot+`faq-${id}.webp`);
const schedule=[
 ['初见','第一天午后','抵达素喜青山，安顿行李，熟悉茶屋、观景平台与当日开放设施。'],
 ['候暮','第一天傍晚','在景观平台看看天色，再按需要预约素喜餐厅；不必急着外出。'],
 ['随行','第二天白天','按所选路线走栈道、逛茶园、安排泡汤，或留半天给街子古镇。'],
 ['闲居','第二天夜晚','回房闲读或与同伴饮茶，把夜晚留给舒适的休息。'],
 ['再会','第三天上午','用过早餐，收好行李；退房时间按订单与民宿确认。']
];
const faqs=[
 ['路线包含住宿和所有活动吗？','四条路线是依托民宿设施与周边景点设计的自主行程建议，并非民宿已上架的打包产品。住宿、饮茶、餐食、泡汤及交通是否包含，需查看对应套餐并向民宿确认。'],
 ['可以不参加某项活动吗？','可以。活动安排可自由增减，也可以只保留房型意向。栈道、茶园、平台是自主体验建议；汤池、茶屋及用餐请提前咨询时段。'],
 ['可以带孩子吗？','公开资料显示可接待儿童，扶光双卧套房可作为家庭出游的房型参考。实际可住人数、儿童早餐与加床规则以所订房型条款为准；栈道和高处平台由成人全程陪同。'],
 ['可以带宠物吗？','目前检索到的预订平台列示不可携带宠物。政策可能调整，携宠出行前请直接向民宿确认，不以备注替代接待许可。'],
 ['下雨会影响行程吗？','雨雾天以民宿开放指引为准，暂停不宜使用的栈道或高处平台，可改为茶屋品茶、室内阅读与休息。古镇、禅院出行前也应核对路况及开放信息。'],
 ['取消或改期有什么规则？','取消和改期随入住日期、房型、套餐及预订渠道而变化。请在正式付款前查看订单的退改条款，本页行程意向不产生扣费或预订义务。'],
 ['如何确认房态和价格？','请前往民宿的实时预订页面，或通过其公布的联系方式确认。本网站仅在当前浏览器整理行程意向，未连接民宿订单系统，不发送联系信息、不占用房源。']
];
