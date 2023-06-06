# Newsletter signup

## Description

## Parameters

## Usage

## Styles

## Scripts
```typescript
const form = document.querySelector('.newsletter-signup form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    const password = Form.querySelector('input[type="password"]').value;
    const confirmPassword = Form.querySelector('.confirm-password').value;
    
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    } else if (password.length > 30) {
        alert('Please enter a password less than 30 characters.');
        return;
    }
    
    if (!email.valid) {
        alert('Please enter a valid email address.');
        return;
    }
    if (password.length < 10) {
        alert('Please enter a password at least 10 characters.');
        return;
    }
    
    if (password.length > 30) {
        alert('Please enter a password less than 30 characters.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    
    
});

const sendDataToServer = (data) => {
    axios.post('/api/newsletter-signup', data)
        .then(handleResponse)
        .catch(handleError);
};

const getDataFromServer = (data) => {
    axios.get('/api/newsletter-signup', data)
        .then(handleResponse)
        .catch(handleError);
};

const updateDataOnServer = (data) => {
    axios.put('/api/newsletter-signup', data)
        .then(handleResponse)
        .catch(handleError);
};

const deleteDataFromServer = (data) => {
    axios.delete('/api/newsletter-signup', data)
        .then(handleResponse)
        .catch(handleError);
};

const unfriend = (data) => {
    axios.delete('/api/newsletter-signup', data)
        .then(handleResponse)
        .catch(handleError);
};

const friendRequest = (to, from) => {
    axios.post('/api/newsletter-signup', { to, from })
        .then(handleResponse)
        .catch(handleError);
};

const handleResponse = (response) => {
    console.log(response);
};

const acceptFriendRequest = (to, from) => {
    axios.post('/api/newsletter-signup', { to, from })
        .then(handleResponse)
        .catch(handleError);
};

const isPending = (to, from) => {
    axios.post('/api/newsletter-signup', { to, from })
        .then(handleResponse)
        .catch(handleError);
};

class RelationsController {
    /**
     * write a function that check to see if a user has a friend request pending
     * using mysql as the database.
     */
    async isPending(to, from)  {
        try {
            const query = `SELECT * FROM friends WHERE to = ? AND from = ?`;
            const result = await db.query(query);
            
            // if (results.length === 0) {
            //     return false;
            // } else {
            //     return true;
            // }
            // return result;
            return result.length === 0 ? false : true;
        } catch (err) {
            console.log(err);
        }
    }
    
    async alreadyFriends(to, from) {
        try {
            const query = `SELECT * FROM friends WHERE to = ? AND from = ?`;
            const result = await db.query(query);
            
            if (results.length === 0) {
                return false;
            } else {
                return true;
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    async sendFriendRequest(to, from) {
        if (await this.isPending() === false && await this.alreadyFriends() === false) {
            try {
                const query = `INSERT INTO friends (to, from) VALUES (?, ?)`;
                const result = await db.query(query);
                
                return result;
            } catch (err) {
                console.log(err);
            }
        }
    }
    
    /** q: what does the above function do? */
    /** a: it sends a friend request to a user. */
    /** q: what does the function check for? */
    /** a: it checks to see if the user has a pending friend request or if they are already friends. */

    /**
     * this method is responsible for accepting a friend request.
     * @param to
     * @param from
     */
    async acceptFriendRequest(to, from) {
        if (await this.isPending() === true && await this.alreadyFriends() === false) {
            try {
                const query = `INSERT INTO friends (to, from) VALUES (?, ?)`;
                const result = await db.query(query, [to, from]);
                
                return result;
            } catch (err) {
                console.log(err);
            }
        }
    }
    
    async reject(to, from) {
        try {
            const query = `DELETE FROM friends WHERE to = ? AND from = ?`;
            const result = await db.query(query, [to, from]);
            
            return result;
        } catch (err) {
            console.log(err);
        } catch (err) {
            console.log(err);
        }
        if (await this.isPending() === true && await this.alreadyFriends() === false) {
            try {
                const query = `INSERT INTO friends (to, from) VALUES (?, ?)`;
                const result = await db.query(query);
                
                return result;
            } catch (err) {
                console.log(err);
            }
        }
    }
    
    async unfriend(to, from) {
        try {
            const query = `DELETE FROM friends WHERE to = ? AND from = ?`;
            const result = await db.query(query, [to, from]);
            
            return result;
        } catch (err) {
            console.log(err);
        }
    }
    
    async block(to, from, reason) {
        try {
            const query = `INSERT INTO blocked (to, from) VALUES (?, ?)`;
            const result = await db.query(query, [to, from]);
            await this.unfriend(to, from);       
            return result;
        } catch (err) {
            console.log(err);
        }
    }
    
    async getFriends(to, from) {
        try {
            const query = `SELECT * FROM friends WHERE to = ? AND from = ?`;
            const result = await db.query(query, [to, from]);
            
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}

class PostController {
    async onNewStatusUpdate(user_id, content) {
        try {
            const query = `INSERT INTO posts (user_id, content) VALUES (?, ?)`;
            const result = await db.query(query, [user_id, content]);
            
            return result;
        } catch (err) {
            console.log(err);
        }
    }
    
    async onNewvideoUpload(user_id, content) {
        try {
            const query = `INSERT INTO posts (user_id, content) VALUES (?, ?)`;
            const result = await db.query(query, [user_id, content]);
            
            return result;
        } catch (err) {
            console.log(err);
        }
    }
    
    async onNewPhotoUpload(user_id, content) {
        try {
            const query = `INSERT INTO posts (user_id, content) VALUES (?, ?)`;
            const result = await db.query(query, [user_id, content]);
            
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}

class NewsfeedController {
    async getAllPosts(req, res) {
        try {
            const query = `SELECT * FROM posts`;
            const result = await db.query(query);
            
            return result;
        } catch (err) {
            console.log(err);
        }
    }
    
    async onAddPostToFeed(req, res) {
        try {
            const query = `INSERT INTO posts (user_id, content) VALUES (?, ?)`;
            const result = await db.query(query);
            
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}

```
## Structure
```html
<section class="newsletter-signup">
    
</section>
```
