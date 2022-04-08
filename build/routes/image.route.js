"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRoute = void 0;
const express_1 = __importDefault(require("express"));
const missingFile_middleware_1 = require("../middleware/missingFile.middleware");
const image_controller_1 = require("../controllers/image.controller");
const router = express_1.default.Router();
exports.imageRoute = router;
router.get('/images', missingFile_middleware_1.missingFile, image_controller_1.imageController);
