/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import { IsOptional, ValidateNested } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ConsultationUpdateManyWithoutAnalysisResultsInput } from "./ConsultationUpdateManyWithoutAnalysisResultsInput";
import { ImageUpdateManyWithoutAnalysisResultsInput } from "./ImageUpdateManyWithoutAnalysisResultsInput";

@InputType()
class AnalysisResultUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  result?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageWhereUniqueInput)
  @IsOptional()
  @Field(() => ImageWhereUniqueInput, {
    nullable: true,
  })
  image?: ImageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ConsultationUpdateManyWithoutAnalysisResultsInput,
  })
  @ValidateNested()
  @Type(() => ConsultationUpdateManyWithoutAnalysisResultsInput)
  @IsOptional()
  @Field(() => ConsultationUpdateManyWithoutAnalysisResultsInput, {
    nullable: true,
  })
  consultations?: ConsultationUpdateManyWithoutAnalysisResultsInput;

  @ApiProperty({
    required: false,
    type: () => ImageUpdateManyWithoutAnalysisResultsInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateManyWithoutAnalysisResultsInput)
  @IsOptional()
  @Field(() => ImageUpdateManyWithoutAnalysisResultsInput, {
    nullable: true,
  })
  images?: ImageUpdateManyWithoutAnalysisResultsInput;
}

export { AnalysisResultUpdateInput as AnalysisResultUpdateInput };
