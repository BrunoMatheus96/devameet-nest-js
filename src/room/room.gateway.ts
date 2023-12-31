import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { RoomService } from './room.service';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { JoinRoomDto } from './dtos/joinroom.dto';
import { UpdateUserPositionDto } from './dtos/updateposition.dto';

type ActiveSocketType = { room: String, id: String, userId: String }

@WebSocketGateway({ cors: true })
export class RoomGateway implements OnGatewayInit, OnGatewayDisconnect {

  constructor(private readonly service: RoomService) { }

  @WebSocketServer() wss: Server;

  private logger = new Logger(RoomGateway.name);
  private activeSockets: ActiveSocketType[] = [];

  handleConnection(client: any, ...args: any[]) {
    this.logger.debug(`Client: ${client.id} connect`);
  }

  async handleDisconnect(client: Socket) {
    this.logger.debug(`Client: ${client.id} disconnect`);

  }

  afterInit(server: any) {
    this.logger.log('Gateway initialized');
  }


}