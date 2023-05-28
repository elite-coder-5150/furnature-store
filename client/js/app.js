System.register("app", [], function (exports_1, context_1) {
    "use strict";
    var Notification, App, SignupForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Notification = /** @class */ (function () {
                function Notification() {
                    console.log('Notification constructor');
                }
                Notification.prototype.notify = function (message) {
                };
                ;
                Notification.prototype.getNotifications = function (id, type, error) {
                    if (error) {
                        alert('Error: ' + error);
                    }
                    if (type === 'friend_request') {
                        return "\n                <ul class=\"notifications\">\n                    <li class=\"notification\">\n                        <div class=\"profile\">\n                            <img src=\"https://placehold.it/50x50\" alt=\"Profile picture\" />\n                        </div>\n                        <div class=\"notification-text\">\n                            <p class=\"notification-message\">Send you a new friend request</p>\n                        </div>\n                        <div class=\"meta\">\n                            <div class=\"time-ago\">1 hour ago</div>\n                        </div>\n                    </li>\n                </ul>\n            ";
                    }
                    else if (type === 'friend_request_accepted') {
                        return "\n                <ul class=\"notifications\">\n                    <li class=\"notification\">\n                        <div class=\"profile\">\n                            <img src=\"https://placehold.it/50x50\" alt=\"Profile picture\" />\n                        </div>\n                        <div class=\"notification-text\">\n                            <p class=\"notification-message\">Accepted your friend request</p>\n                        </div>\n                        <div class=\"meta\">\n                            <div class=\"time-ago\">1 hour ago</div>\n                        </div>\n                    </li>\n                </ul>\n            ";
                    }
                    else if (type === 'private-message') {
                        return "\n                <ul class=\"notifications\">\n                    <li class=\"notification\">\n                        <div class=\"profile\">\n                            <img src=\"https://placehold.it/50x50\" alt=\"Profile picture\" />\n                        </div>\n                        <div class=\"notification-text\">\n                            <p class=\"notification-message\">Send you a private message</p>\n                        </div>\n                        <div class=\"meta\">\n                            <div class=\"time-ago\">1 hour ago</div>\n                        </div>\n                    </li>\n                </ul>\n            ";
                    }
                };
                // q: what does the above function do?
                // a: it returns a string of html that is used to display a notification
                Notification.prototype.addNotification = function (id, type, error) {
                    var notifications = [];
                    var notification = {
                        id: id,
                        type: type,
                        error: error
                    };
                    notifications.push(notification);
                    return notifications;
                };
                return Notification;
            }());
            exports_1("Notification", Notification);
            App = /** @class */ (function () {
                function App() {
                    this.notification = new Notification();
                    console.log('App constructor');
                    if (this.notification.getNotifications('', '', '')) {
                        console.log('Notification is working');
                    }
                }
                return App;
            }());
            exports_1("App", App);
            SignupForm = /** @class */ (function () {
                function SignupForm() {
                    console.log('SignupForm constructor');
                    this.cacheDom();
                }
                SignupForm.prototype.onSubmit = function (event) {
                    event.preventDefault();
                    console.log('Form submitted');
                };
                SignupForm.prototype.cacheDom = function () {
                    var form = document.getElementById('newsletter-signup-form');
                };
                return SignupForm;
            }());
            exports_1("SignupForm", SignupForm);
        }
    };
});
