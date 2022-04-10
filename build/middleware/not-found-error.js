"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundImage = void 0;
const fs_1 = __importDefault(require("fs"));
const paths_1 = require("../paths");
const notFoundImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const existingImage = fs_1.default.existsSync((0, paths_1.fullPath)(String(req.query.filename)));
    if (!existingImage) {
        res
            .status(404)
            .send({ status: 404, message: 'Image Not Found', success: false });
    }
    next();
});
exports.notFoundImage = notFoundImage;
