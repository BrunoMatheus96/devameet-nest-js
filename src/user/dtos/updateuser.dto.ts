import { 
    MinLength, 
    IsString 
  } from 'class-validator'; 
import { UserMessagesHelper } from '../helper/messages.helper';
  
  export class UpdateUserDto { 
    @MinLength(2, { message: UserMessagesHelper.REGISTER_NAME_NOT_VALID }) 
    name: string; 
  
    @IsString() 
    avatar: string; 
  } 