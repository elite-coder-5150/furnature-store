// @ts-ignore
import  db  from "../server";
export class NotificationsController {
   async getAllNotifications(req, res) {
       try {
           const sql = "select * from notifications";

          db.query(sql, (error, results) => {
              if (error) {
                  console.error(error);
                  res.status(500).send(error);
              } else if (results.length === 0) {
                  res.status(404).send("Notifications not found");
              } else {
                  res.status(200).send(results);
              }
          })
       } catch (error) {
           return res.status(500).send(error);
       }
   }

   async getNotification(req, res) {
       try {
           const { id } = req.params;
           const sql = "select * from notifications where notification_id=?";

           db.query(sql, [id], (error, results) => {
               if (error) {
                   console.error(error);
                   res.status(500).send(error);
               } else if (results.length === 0) {
                   res.status(404).send("Notification not found");
               } else {
                     res.status(200).send(results[0]);
               }
           });
       } catch (error) {
           return res.status(500).send(error);
       }
   }

   async createNotification(req, res) {
       try {
           const { title, type, description, date, user_id } = req.body;
           const sql = "insert into notifications (notification_id, user_id, message, type, created_at, updated_at) values (null, ?, ?, ?, ?, ?)";

           db.query(sql, [user_id, description, type, date, date], (error, results) => {
               if (error) {
                   console.error(error);
                   res.status(500).send(error);
               } else if (results.length === 0) {
                   res.status(404).send("Notification not found");
               } else {
                   res.status(200).send(results[0]);
               }
           });
       } catch (error) {
           return res.status(500).send(error);
       }
   }

    async updateNotification(req, res) {
       try {
            const { id } = req.params;
            const { title, type, description, date, user_id } = req.body;
            const sql = "update notifications set user_id=?, message=?, type=?, created_at=?, updated_at=? where notification_id=?";

            db.query(sql, [user_id, description, type, date, date, id], (error, results) => {
                if (error) {
                     console.error(error);
                    res.status(500).send(error);
                } else if (results.length === 0) {
                    res.status(404).send("Notification not found");
                } else {
                    res.status(200).send(results[0]);
                }
          });
       } catch (error) {
           return res.status(500).send(error);
       }
    }

    async deleteNotification(req, res) {
       try {
           const { id } = req.params;
           const sql = "delete from notifications where notification_id=?";

          db.query(sql, [id], (error, results) => {
              this.getNotificationQuery(error, results, res);
          });
       } catch (error) {
           return res.stauts(500).send(error);
       }
    }

    getNotificationQuery(error, results, res) {
        if (error) {
            console.error(error);
            res.status(500).send(error);
        } else if (results.length === 0) {
            res.status(404).send("Product not found");
        } else {
            res.status(200).send(results[0]);
        }
    }
}

