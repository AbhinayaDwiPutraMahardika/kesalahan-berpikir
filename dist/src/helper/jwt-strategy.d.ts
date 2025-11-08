import { Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
type Payload = {
    id: number;
    name: string;
    role: string;
};
declare const JWTStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JWTStrategy extends JWTStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: Payload): Promise<Payload>;
}
export {};
