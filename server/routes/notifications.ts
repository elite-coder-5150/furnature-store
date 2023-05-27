import express from 'express';
const router = express.Router();

// @ts-ignore
import { NotificationController } from '../controllers/notification.controller';
const notificationController = new NotificationController();

router.get('/notifications', notificationController.getAllNotifications);
router.get('/notifications/:id', notificationController.getNotification);
router.post('/notifications', notificationController.createNotification);
router.put('/notifications/:id', notificationController.updateNotification);
router.delete('/notifications/:id', notificationController.deleteNotification);
