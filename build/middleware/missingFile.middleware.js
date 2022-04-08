"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingFile = void 0;
const missingFile = (req, res, next) => {
    const { filename, width, height } = req.query;
    if (!filename || !width || !height) {
        return res.status(400).send({ error: 'Input file is missing' });
    }
    next();
};
exports.missingFile = missingFile;
