/**
 * 改自萌娘百科同名小工具：https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes/tree/master/src/gadgets/patrolPlus
 * 进行了一点小修改，快速巡查不会弹窗确认，不会询问是否将本页面编辑全标记为已巡查。
 */
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
$(function () {
    if (!["Recentchanges", "Watchlist"].includes(mw.config.get("wgCanonicalSpecialPageName"))) {
        return;
    }
    var api = new mw.Api();
    var patrolling = false;
    var list = [];
    var running = false;
    var handlePatroll = function (title, _revid) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        var _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _b = (_a = api).postWithToken;
                    _c = ["patrol"];
                    _d = {
                        action: "patrol",
                        format: "json"
                    };
                    return [4, (function () { return __awaiter(void 0, void 0, void 0, function () {
                            var data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(typeof _revid !== "number")) return [3, 2];
                                        return [4, api.post({
                                                action: "query",
                                                prop: "revisions",
                                                rvprop: "ids",
                                                rvlimit: 1,
                                                rvdir: "newer",
                                                titles: title
                                            })];
                                    case 1:
                                        data = _a.sent();
                                        if (Reflect.has(data, "error")) {
                                            throw data.error;
                                        }
                                        return [2, Object.entries(data.query.pages)[0][1].revisions[0].revid];
                                    case 2: return [2, _revid];
                                }
                            });
                        }); })()];
                case 1: return [4, _b.apply(_a, _c.concat([(_d.revid = _e.sent(),
                            _d)]))];
                case 2: return [2, _e.sent()];
            }
        });
    }); };
    $("abbr.unpatrolled").each(function (_, ele) {
        var self = $(ele);
        if (self.closest("tbody").find("tr")[1] && self.closest("tr").index() === 0) {
            return;
        }
        var container = $('<a href="#" class="patrolLink" style="user-select:none"></a>');
        self.after(container).appendTo(container).before("[").after("]");
        self = container;
        var link = self.closest("li,tr").find('a[href*="diff"]:not([href*="diff=0"])').first();
        var uri, title, revid;
        if (link[0]) {
            uri = new mw.Uri(link.attr("href"));
            title = uri.query.title;
            revid = +uri.query.diff;
        }
        else {
            uri = new mw.Uri(self.closest("li, tr").find(".mw-changeslist-history").first().attr("href"));
            title = uri.query.title;
        }
        if (!list.includes(title)) {
            list.push(title);
        }
        self.attr({
            "data-title": list.indexOf(title),
            "data-revid": revid
        });
        self.on("click", function (event) { return __awaiter(void 0, void 0, void 0, function () {
            var textStatus, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        if (patrolling) {
                            return [2];
                        }
                        patrolling = true;
                        $("a.patrolLink").not(self).css({
                            color: "#aaa",
                            "text-decoration": "none"
                        });
                        textStatus = $("<span></span>", {
                            html: '[<img src="https://img.moegirl.org.cn/common/d/d1/Windows_10_loading.gif" style="height: 1em; margin-top: -.25em;">正在标记中……]'
                        });
                        self.after(textStatus).hide();
                        running = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, handlePatroll(title, revid)];
                    case 2:
                        data = _a.sent();
                        if (Reflect.has(data, "error")) {
                            throw data.error;
                        }
                        textStatus.text("[✓]");
                        setTimeout(function () {
                            window.setTimeout(function () {
                                textStatus.remove();
                                self.show().replaceWith("");
                            }, typeof revid === "number" ? 16 : 3000);
                        }, 2000);
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        textStatus.text("[\u6807\u8BB0\u5931\u8D25\uFF1A".concat(error_1 instanceof Error ? error_1.name : error_1.code, "\uFF0C\u8BF7\u57283\u79D2\u540E\u91CD\u8BD5]"));
                        window.setTimeout(function () {
                            textStatus.remove();
                            self.show();
                        }, 3000);
                        return [3, 4];
                    case 4:
                        $("a.patrolLink").removeAttr("style");
                        patrolling = false;
                        running = false;
                        return [2];
                }
            });
        }); });
    });
    new Image().src = "https://img.moegirl.org.cn/common/d/d1/Windows_10_loading.gif";
    $(window).on("beforeunload", function () { return running ? true : undefined; });
});
