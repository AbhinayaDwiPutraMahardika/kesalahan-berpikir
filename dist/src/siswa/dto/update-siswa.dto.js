"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSiswaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_siswa_dto_1 = require("./create-siswa.dto");
class UpdateSiswaDto extends (0, mapped_types_1.PartialType)(create_siswa_dto_1.CreateSiswaDto) {
}
exports.UpdateSiswaDto = UpdateSiswaDto;
//# sourceMappingURL=update-siswa.dto.js.map