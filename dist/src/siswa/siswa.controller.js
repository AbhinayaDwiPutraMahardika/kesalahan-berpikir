"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiswaController = void 0;
const common_1 = require("@nestjs/common");
const siswa_service_1 = require("./siswa.service");
const create_siswa_dto_1 = require("./dto/create-siswa.dto");
const update_siswa_dto_1 = require("./dto/update-siswa.dto");
let SiswaController = class SiswaController {
    siswaService;
    constructor(siswaService) {
        this.siswaService = siswaService;
    }
    create(createSiswaDto) {
        return this.siswaService.create(createSiswaDto);
    }
    findAll() {
        return this.siswaService.findAll();
    }
    findOne(nisn) {
        return this.siswaService.findOne(nisn);
    }
    update(nisn, updateSiswaDto) {
        return this.siswaService.update(nisn, updateSiswaDto);
    }
    remove(nisn) {
        return this.siswaService.remove(nisn);
    }
};
exports.SiswaController = SiswaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_siswa_dto_1.CreateSiswaDto]),
    __metadata("design:returntype", void 0)
], SiswaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SiswaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':nisn'),
    __param(0, (0, common_1.Param)('nisn')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SiswaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':nisn'),
    __param(0, (0, common_1.Param)('nisn')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_siswa_dto_1.UpdateSiswaDto]),
    __metadata("design:returntype", void 0)
], SiswaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':nisn'),
    __param(0, (0, common_1.Param)('nisn')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SiswaController.prototype, "remove", null);
exports.SiswaController = SiswaController = __decorate([
    (0, common_1.Controller)('siswa'),
    __metadata("design:paramtypes", [siswa_service_1.SiswaService])
], SiswaController);
//# sourceMappingURL=siswa.controller.js.map