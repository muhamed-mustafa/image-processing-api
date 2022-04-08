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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const fs_1 = __importDefault(require("fs"));
const paths_1 = require("../paths");
describe('Test endpoint response', () => {
    it('gets the api/images endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.default)
            .get('/api/images?filename=fjord&width=300&height=400')
            .expect(200);
        expect(res.body).toBeDefined();
        expect(res.type).toEqual('text/html');
        expect(res.statusCode).toEqual(200);
    }));
});
describe('Image transform', () => {
    it('Expect transform to not throw error', () => __awaiter(void 0, void 0, void 0, function* () {
        const Query = { filename: 'fjord', width: '200', height: '400' };
        yield (0, supertest_1.default)(index_1.default)
            .get('/api/images')
            .query(Object.assign({}, Query))
            .expect(200);
        const existingImage = fs_1.default.existsSync((0, paths_1.thumbPath)(`${Query.filename}-thumb(${Query.width}x${Query.height})`));
        console.log(existingImage);
        expect(existingImage).toBeDefined();
    }));
    it('Expect transform to throw specific error', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.default).get('/api/images').expect(400);
        expect(res.body).toEqual({ error: 'Input file is missing' });
        expect(res.statusCode).toBe(400);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield fs_1.default.promises.rm('./public/assets/images/thumb', {
        recursive: true,
    });
    yield fs_1.default.promises.mkdir('./public/assets/images/thumb');
}));
