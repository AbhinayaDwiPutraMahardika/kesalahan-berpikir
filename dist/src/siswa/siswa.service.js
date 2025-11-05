"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiswaService = void 0;
const common_1 = require("@nestjs/common");
let SiswaService = class SiswaService {
    siswa = [];
    create(createSiswaDto) {
        this.siswa.push(createSiswaDto);
        return 'This action adds a new siswa';
    }
    findAll() {
        return this.siswa;
    }
    findOne(nisn) {
        const siswa = this.siswa.find((s) => s.nisn === nisn);
        if (!siswa) {
            throw new common_1.NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
        }
        return siswa;
    }
    update(nisn, updateSiswaDto) {
        const siswa = this.findOne(nisn);
        Object.assign(siswa, updateSiswaDto);
        return siswa;
    }
    remove(nisn) {
        const index = this.siswa.findIndex((s) => s.nisn === nisn);
        if (index === -1) {
            throw new common_1.NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
        }
        this.siswa.splice(index, 1);
    }
};
exports.SiswaService = SiswaService;
exports.SiswaService = SiswaService = __decorate([
    (0, common_1.Injectable)()
], SiswaService);
//# sourceMappingURL=siswa.service.js.map