System.register("server", ["mysql/promise", "express"], function (exports_1, context_1) {
    "use strict";
    var promise_1, app, express_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (promise_1_1) {
                promise_1 = promise_1_1;
            },
            function (express_1_1) {
                express_1 = express_1_1;
            }
        ],
        execute: function () {
            // const express = require('express');
            app = express_1["default"]();
            exports_1("default", db = promise_1["default"].createConnection({
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
                NotificationsController.prototype.addNotification = function (id, type, message) {
                    var sql = "insert into notifications (notification_id, user_id, message, created_at, updated_at, type, message) values (?, ?, ?, ?, ?, ?, ?)";
                    var values = [type, message];
                    server_1["default"].query(sql, values, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log(result);
                        }
                    });
                };
                return NotificationsController;
            }());
            exports_2("NotificationsController", NotificationsController);
        }
    };
});
