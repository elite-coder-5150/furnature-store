interface Notification {
    id: number;
    message: string;
    read: boolean;
}

// @ts-ignore
import db from "../server";

export class NotificationsController {
    async createNotification(notification: Notification) {

        const query = "insert into notifications (notification_id, user_id, message, type, is_read, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?)";
        const values = [notification.id, notification.message, notification.read];

        await db.query(query, values, (err, result) => {
            if (err) throw err;
            console.log("1 record inserted");
        })
    }

    async getAllNotifications() {
        const sql = "select * from notifications";
        const [rows] = await db.query(sql);
        return rows as Notification[];
    }

    async getNotificationById(id: number) {
        const sql = "select * from notifications where notification_id = ?";
        const [rows] = await db.query(sql, [id]);
        return rows[0] as Notification;
    }

    async marAsRead(id: number) {
        const sql = "update notifications set is_read = true where notification_id = ?";
        await db.query(sql, [id]);
    }

    async deleteNotification(id: number) {
        const sql = "delete from notifications where notification_id = ?";
        await db.query(sql, [id]);
    }

    async closeConnection() {
        await db.end();
    }
}

