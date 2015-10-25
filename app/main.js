define(["jquery", "huahua", "phodal", "propose"], function($, huahua, phodal, propose) {
    while(propose.times < 99) {
        huahua.listen(phodal.ask("where")("were")("you"));
        huahua.reply.propose();
    }
    huahua.propose("Yes");
    var ever = phodal.love(huahua) && huahua.love(phodal);
    for(ever;;);
});
