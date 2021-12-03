import { container } from "tsyringe";

import NotificationRepository from "@modules/Notification/repositories/interfaces/NotificationRepository";

import UserRepository from "@modules/Notification/repositories/interfaces/UserRepository";

import IoServer from "@modules/Notification/application/interfaces/IoServer";
import IOSocketAdapter from "@modules/Notification/application/infra/IOSocketAddapter";

// container.registerSingleton<IoServer>("IoServer", IOSocketAdapter);
