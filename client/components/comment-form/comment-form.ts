export interface CommentFormData {
    comment_id: string;
    commenter_avatar_url: string;
    comment: string;
    date: Date;
}
export class CommentForm {
    public commentForm: HTMLFormElement;
    public submitBtn: HTMLFormElement;
    public formData: CommentFormData = {
        comment_id: '',
        commenter_avatar_url: '',
        comment: '',
        // @ts-ignore
        date: Date.now()

    };

    constructor() {
        this.commentForm = document.querySelector('.comment-form');
        this.submitBtn = document.querySelector('.comment-form-submit');

        this.cacheDom();
        this.initEvents();
    }

    cacheDom() {}

    // todo: refactor this function
    initEvents() {
        //this.submitBtn.addEventListener('click', this.onSubmit(formData));
    }

    onSubmit(formData: CommentFormData) {

    }
}

const cf = new CommentForm()
const formData: CommentFormData = {
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
