System.register("comment-form", [], function (exports_1, context_1) {
    "use strict";
    var CommentForm, cf, formData;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CommentForm = /** @class */ (function () {
                function CommentForm() {
                    this.formData = {
                        comment_id: '',
                        commenter_avatar_url: '',
                        comment: '',
                        // @ts-ignore
                        date: Date.now()
                    };
                    this.commentForm = document.querySelector('.comment-form');
                    this.submitBtn = document.querySelector('.comment-form-submit');
                    this.cacheDom();
                    this.initEvents();
                }
                CommentForm.prototype.cacheDom = function () { };
                CommentForm.prototype.initEvents = function () {
                    this.submitBtn.addEventListener('click', this.onSubmit(formData));
                };
                CommentForm.prototype.onSubmit = function () {
                };
                return CommentForm;
            }());
            exports_1("CommentForm", CommentForm);
            cf = new CommentForm();
            formData = {
                comment_id: '',
                commenter_avatar_url: '',
                comment: '',
                // @ts-ignore
                date: Date.now()
            };
            cf.onSubmit(formData);
            /**
             * I will finish this tomorrow when i go to the library.
             */
        }
    };
});
