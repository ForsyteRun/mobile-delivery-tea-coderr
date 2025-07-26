import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()

export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getAllUsers() {
    return await this.appService.getAllUsers();
  }
}
