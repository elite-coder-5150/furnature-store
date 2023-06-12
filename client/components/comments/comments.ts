export class Comments {
    public commenterId;
    public comments;
    constructor(commenterId: string = '') {
        this.commenterId = commenterId;

        this.cacheDom();
        this.initEvents();
    }
    
    testFn() {
        console.error('error')
    }
    
    cacheDom() {
        this.comments = document.querySelector('.comments');
    }

    initEvents() {
        this.comments.addEventListener('click', this.toggleComments)
    }

    toggleComments() {

    }

    addCommentToList(comment: string) {

    }
}

let c = new Comments();
c.testFn();
c.addCommentToList('');
c.addCommentToList('testing');
