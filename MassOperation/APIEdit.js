"use strict";
$(() => {
    if (mw.config.get("wgAction") === "edit" || mw.config.get("wgAction") === "submit") {
        const pageName = mw.config.get("wgPageName");
        const pageText = $("#wpTextbox1").val();
        const editSummary = $("#wpSummary").val();
    
        if (pageText) {
            let requestCount = 1;
            window.interval = setInterval(() => {
                new mw.Api().postWithToken("csrf", {
                    format: "json",
                    action: "edit",
                    minor: true,
                    summary: editSummary,
                    title: pageName,
                    text: pageText,
                }).done(() => {
                    console.log(`Done: ${requestCount} requests in total.`);
                    clearInterval(window.interval);
                }).fail((err) => {
                    requestCount += 1;
                    console.log(`Failed: ${err}.`);
                });
            }, 100);
        }
    }
});