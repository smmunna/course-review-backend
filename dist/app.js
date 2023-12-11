"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const course_route_1 = require("./app/modules/course/course.route");
const joiError_middleware_1 = __importDefault(require("./middleware/joiError.middleware"));
const successResponse_middleware_1 = __importDefault(require("./middleware/successResponse.middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/course', course_route_1.courseRoutes);
app.use('/api/courses', course_route_1.courseRoutes);
// Handling joi validation error
app.use(joiError_middleware_1.default);
app.use(successResponse_middleware_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
