"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const joi_1 = __importDefault(require("joi"));
const course_route_1 = require("./app/modules/course/course.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/courses', course_route_1.courseRoutes);
// Handling joi validation error
app.use((err, req, res, next) => {
    if (err instanceof joi_1.default.ValidationError) {
        res.send({
            status: 400,
            message: "validation error",
            details: err.details.map((detail) => detail.message)
        });
    }
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
