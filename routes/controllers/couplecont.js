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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoupleController = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var CoupleController = /** @class */ (function () {
    function CoupleController() {
    }
    CoupleController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name, secondName, createdCouple, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        console.log(req.text);
                        name = req.body.first;
                        secondName = req.body.second;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prisma.couple.create({
                                data: {
                                    first: name,
                                    second: secondName
                                }
                            })];
                    case 2:
                        createdCouple = _a.sent();
                        return [2 /*return*/, res.json(createdCouple)];
                    case 3:
                        error_1 = _a.sent();
                        // Обработка других ошибок
                        console.error(error_1);
                        return [2 /*return*/, res.status(500).json({ error: "Internal server error" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CoupleController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.couple.findMany()];
                    case 1:
                        types = _a.sent();
                        return [2 /*return*/, res.json(types)];
                }
            });
        });
    };
    CoupleController.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var word, type;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        word = req.params;
                        console.log(word);
                        return [4 /*yield*/, prisma.couple.findUnique({
                                where: {
                                    id: Number(word.id),
                                }
                            })];
                    case 1:
                        type = _a.sent();
                        if (!word) {
                            return [2 /*return*/, res.status(401).send("ERROR NOT FOUND")];
                        }
                        res.json(type);
                        return [2 /*return*/];
                }
            });
        });
    };
    CoupleController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var deleting;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.couple.deleteMany({})];
                    case 1:
                        deleting = _a.sent();
                        return [2 /*return*/, res.json(deleting)];
                }
            });
        });
    };
    return CoupleController;
}());
exports.CoupleController = CoupleController;
