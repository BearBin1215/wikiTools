/**
 * 简陋的批量发讨论页信息脚本
 * 写好内容后打开任意萌百页面按F12从控制台直接发送
 */

"use strict";
$(() => {
    // 在这里输入你要发送的用户名，按需添加
    const userList = ["BearBin", "Bear_Bin", "BearB1n", "阿熊"];

    const isBot = mw.config.get("wgUserGroups").includes("bot") || mw.config.get("wgUserGroups").includes("flood");
    for (const item of userList) {
        new mw.Api().postWithToken("csrf", {
            format: "json",
            action: "edit",
            section: "new",
            watchlist: "nochange",
            tags: "Automation tool",
            title: `User_talk:${item}`,
            bot: isBot,

            // 这里是章节标题
            sectiontitle: "测试标题",

            // 这里是章节正文内容
            text: "你的内容。双印号记得转义，换行请用\n——~~~~",

            // 这里是编辑摘要
            summary: "测试摘要",
        })
            .done(() => {
                console.log(`向用户${item}发送消息成功。`);
            })
            .fail((err) => {
                console.log(`向用户${item}发送消息失败：${err}。`);
            });
    }
});