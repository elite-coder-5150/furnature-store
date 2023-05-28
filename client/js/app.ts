export class Notification {
    constructor() {
        console.log('Notification constructor');
    }

    public notify(message: string): void {

    };

    getNotifications(id, type, error) {
        if (error) {
            alert('Error: ' + error);
        }

        if (type === 'friend_request') {
            return `
                <ul class="notifications">
                    <li class="notification">
                        <div class="profile">
                            <img src="https://placehold.it/50x50" alt="Profile picture" />
                        </div>
                        <div class="notification-text">
                            <p class="notification-message">Send you a new friend request</p>
                        </div>
                        <div class="meta">
                            <div class="time-ago">1 hour ago</div>
                        </div>
                    </li>
                </ul>
            `;
        } else if (type === 'friend_request_accepted') {
            return `
                <ul class="notifications">
                    <li class="notification">
                        <div class="profile">
                            <img src="https://placehold.it/50x50" alt="Profile picture" />
                        </div>
                        <div class="notification-text">
                            <p class="notification-message">Accepted your friend request</p>
                        </div>
                        <div class="meta">
                            <div class="time-ago">1 hour ago</div>
                        </div>
                    </li>
                </ul>
            `;
        } else if (type === 'private-message') {
            return `
                <ul class="notifications">
                    <li class="notification">
                        <div class="profile">
                            <img src="https://placehold.it/50x50" alt="Profile picture" />
                        </div>
                        <div class="notification-text">
                            <p class="notification-message">Send you a private message</p>
                        </div>
                        <div class="meta">
                            <div class="time-ago">1 hour ago</div>
                        </div>
                    </li>
                </ul>
            `;
        }
    }

    // q: what does the above function do?
    // a: it returns a string of html that is used to display a notification

    addNotification(id, type, error) {
        const notifications = [];
        const notification = {
            id: id,
            type: type,
            error: error
        };

        notifications.push(notification);
        return notifications;
    }
}

export class App {
    public notification: Notification;

    constructor() {
        this.notification = new Notification();
        console.log('App constructor');

        if (this.notification.getNotifications('', '', '')) {
            console.log('Notification is working');
        }
    }
}

export class SignupForm {
    constructor() {
        console.log('SignupForm constructor');
        this.cacheDom();
    }

    public onSubmit(event) {
        event.preventDefault();
        console.log('Form submitted');
    }

    public cacheDom() {
        const form = document.getElementById('newsletter-signup-form');
    }
}
