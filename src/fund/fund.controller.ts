import * as nCommon from '@nestjs/common';
import { Service } from './fund.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import * as models from '../models'

// TODO: Create an interface that all controllers should implement
@nCommon.Controller('fund')
export class Controller {
  constructor(private readonly fundService: Service) {}

  // TODO: Prob filter by user id
  @nCommon.UseGuards(JwtAuthGuard)
  @nCommon.Get()
  list(): Promise<models.entities.Fund[]> {
    return this.fundService.list();
  }


  @nCommon.UseGuards(JwtAuthGuard)
  @nCommon.Get(':id')
  get(@nCommon.Param('id') id: number): Promise<models.entities.Fund | null> {
    return this.fundService.get(id);
  }

  @nCommon.Post()
  create(@nCommon.Body() fund: models.entities.Fund.ForCreate): Promise<models.entities.Fund> {
    return this.fundService.create(fund)
  }

}
