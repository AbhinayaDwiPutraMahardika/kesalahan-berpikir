"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const FormatValidation = (errors) => {
    const messages = errors.map(it => Object.values(it.constraints || {}).join(", "))
        .join(";");
    return new common_1.BadRequestException(`error validation: ${messages}`);
};
exports.default = FormatValidation;
//# sourceMappingURL=validation-format.js.map