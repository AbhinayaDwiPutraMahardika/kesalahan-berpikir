"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
let TodosService = class TodosService {
    todos = [
        { id: 1, title: 'slip', status: 'success' },
        { id: 2, title: 'run', status: 'pending' },
    ];
    showAll() {
        return this.todos;
    }
    showById(id) {
        const nemu = this.todos.find((aidi) => aidi.id === id);
        if (!nemu) {
            throw new common_1.NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
        }
        return nemu;
    }
    add(title, status) {
        const idke = {
            id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1,
            title,
            status,
        };
        this.todos.push(idke);
        return idke;
    }
    update(id, title, status) {
        const tambah = this.showById(id);
        tambah.title = title;
        tambah.status = status;
        return tambah;
    }
    remove(id) {
        const index = this.todos.findIndex((item) => item.id === id);
        if (index === -1)
            throw new common_1.NotFoundException(`Todo dengan ID ${id} tidak ditemukan`);
        this.todos.splice(index, 1);
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
//# sourceMappingURL=todos.service.js.map