import { Matches, MinLength } from "class-validator";
import { MeetMessagesHelper } from "../helpers/meetmessages.helper";



export class CreateMeetDto {

  //@({ message: MeetMessagesHelper.CREATE_NAME_NOT_VALID })
  @MinLength(2, { message: MeetMessagesHelper.CREATE_NAME_NOT_VALID })
  name: string;

  //@IsNotEmpty({ message: MeetMessagesHelper.CREATE_COLOR_NOT_FOUND })
  @Matches(/[0-9A-Fa-f]{3,6}/, {
    message: MeetMessagesHelper.CREATE_COLOR_NOT_VALID,
  })
  color: string;
}