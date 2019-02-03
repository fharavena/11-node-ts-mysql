"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var router = express_1.Router();
router.get('/heroes', function (req, res) {
    var query = "\n        SELECT * \n        FROM heroes\n    ";
    mysql_1.default.ejecutarQuery(query, function (err, heroes) {
        if (err) {
            res.status(400).json({
                err: true,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroes: heroes
            });
        }
    });
});
router.get('/heroes/:id', function (req, res) {
    var id = req.params.id;
    var escapeID = mysql_1.default.instance.cnn.escape(id);
    console.log(escapeID);
    var query = "\n        SELECT * \n        FROM heroes\n        where id=" + escapeID + "\n    ";
    mysql_1.default.ejecutarQuery(query, function (err, heroe) {
        if (err) {
            res.status(400).json({
                err: true,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroe: heroe
            });
        }
    });
});
exports.default = router;
