/**
 * 非常简陋的批量发提醒脚本
 * 请修改内容后在浏览器内按F12打开控制台直接发送
 */
"use strict";
$(() => {
    // 在这里输入你要发送的用户名，按需添加
    const userList = ["BearBin", "Bear_Bin", "BearB1n", "阿熊"];

    // 在下面输入你发送的标题、内容
    for (const item of userList) {
        new mw.Api().postWithToken("csrf", {
            format: "json",
            action: "edit",
            section: "new",
            watchlist: "nochange",
            title: `User_talk:${item}`,

            // 这里是章节标题
            sectiontitle: "测试标题",
            
            // 这里是章节正文内容，记得转义，换行用\n
            text: "你的内容——~~~~",

            // 这里是编辑摘要
            summary: "测试摘要",
        });
    }
});