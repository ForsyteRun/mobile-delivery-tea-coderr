import { IsString } from "class-validator";

export class RefreshTokensRequest {
  @IsString()
  token: string;
}