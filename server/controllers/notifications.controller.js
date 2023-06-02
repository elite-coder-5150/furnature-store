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
        while (_) try {
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
System.register("server", ["mysql", "express"], function (exports_1, context_1) {
    "use strict";
    var mysql_1, app, express_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (mysql_1_1) {
                mysql_1 = mysql_1_1;
            },
            function (express_1_1) {
                express_1 = express_1_1;
            }
        ],
        execute: function () {
            // const express = require('express');
            app = express_1["default"]();
            exports_1("default", db = mysql_1["default"].createConnection({
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'furniture_shop'
            }));
        }
    };
});
System.register("controllers/notifications.controller", ["server"], function (exports_2, context_2) {
    "use strict";
    var server_1, NotificationsController;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (server_1_1) {
                server_1 = server_1_1;
            }
        ],
        execute: function () {
            NotificationsController = /** @class */ (function () {
                function NotificationsController() {
                }
                NotificationsController.prototype.createNotification = function (notification) {
                    return __awaiter(this, void 0, void 0, function () {
                        var query, values;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    query = "insert into notifications (notification_id, user_id, message, type, is_read, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?)";
                                    values = [notification.id, notification.message, notification.read];
                                    return [4 /*yield*/, server_1["default"].query(query, values, function (err, result) {
                                            if (err)
                                                throw err;
                                            console.log("1 record inserted");
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                NotificationsController.prototype.getAllNotifications = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var sql, rows;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    sql = "select * from notifications";
                                    return [4 /*yield*/, server_1["default"].query(sql)];
                                case 1:
                                    rows = (_a.sent())[0];
                                    return [2 /*return*/, rows];
                            }
                        });
                    });
                };
                NotificationsController.prototype.getNotificationById = function (id) {
                    return __awaiter(this, void 0, void 0, function () {
                        var sql, rows;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    sql = "select * from notifications where notification_id = ?";
                                    return [4 /*yield*/, server_1["default"].query(sql, [id])];
                                case 1:
                                    rows = (_a.sent())[0];
                                    return [2 /*return*/, rows[0]];
                            }
                        });
                    });
                };
                NotificationsController.prototype.marAsRead = function (id) {
                    return __awaiter(this, void 0, void 0, function () {
                        var sql;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    sql = "update notifications set is_read = true where notification_id = ?";
                                    return [4 /*yield*/, server_1["default"].query(sql, [id])];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                NotificationsController.prototype.deleteNotification = function (id) {
                    return __awaiter(this, void 0, void 0, function () {
                        var sql;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    sql = "delete from notifications where notification_id = ?";
                                    return [4 /*yield*/, server_1["default"].query(sql, [id])];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                NotificationsController.prototype.closeConnection = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, server_1["default"].end()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return NotificationsController;
            }());
            exports_2("NotificationsController", NotificationsController);
        }
    };
});
