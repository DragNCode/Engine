"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleJson1 = void 0;
const handleJson1 = (req, res) => {
    console.log('object');
    console.log(req);
    res.json({
        message: 'recieved successfully'
    });
};
exports.handleJson1 = handleJson1;
