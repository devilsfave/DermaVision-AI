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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { AnalysisResultUpdateManyWithoutImagesInput } from "./AnalysisResultUpdateManyWithoutImagesInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { AnalysisResultWhereUniqueInput } from "../../analysisResult/base/AnalysisResultWhereUniqueInput";

@InputType()
class ImageUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imagePath?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  metadata?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => AnalysisResultUpdateManyWithoutImagesInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultUpdateManyWithoutImagesInput)
  @IsOptional()
  @Field(() => AnalysisResultUpdateManyWithoutImagesInput, {
    nullable: true,
  })
  analysisResults?: AnalysisResultUpdateManyWithoutImagesInput;

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
    type: () => AnalysisResultWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultWhereUniqueInput)
  @IsOptional()
  @Field(() => AnalysisResultWhereUniqueInput, {
    nullable: true,
  })
  analysisResult?: AnalysisResultWhereUniqueInput | null;
}

export { ImageUpdateInput as ImageUpdateInput };
