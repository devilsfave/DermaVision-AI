/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConsultationsWhereInput } from "./ConsultationsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ConsultationsCountArgs {
  @ApiProperty({
    required: false,
    type: () => ConsultationsWhereInput,
  })
  @Field(() => ConsultationsWhereInput, { nullable: true })
  @Type(() => ConsultationsWhereInput)
  where?: ConsultationsWhereInput;
}

export { ConsultationsCountArgs as ConsultationsCountArgs };
