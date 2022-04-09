"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumbPath = exports.fullPath = void 0;
const path_1 = __importDefault(require("path"));
const fullPath = (imageName) => {
    return path_1.default.join(__dirname, '..', 'public', 'assets', 'images', 'full', `${imageName}.jpg`);
};
exports.fullPath = fullPath;
const thumbPath = (imageName) => {
    return path_1.default.join(__dirname, '..', 'public', 'assets', 'images', 'thumb', `${imageName}`);
};
exports.thumbPath = thumbPath;
