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
import { AnalysisResultWhereInput } from "./AnalysisResultWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AnalysisResultOrderByInput } from "./AnalysisResultOrderByInput";

@ArgsType()
class AnalysisResultFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnalysisResultWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AnalysisResultWhereInput, { nullable: true })
  @Type(() => AnalysisResultWhereInput)
  where?: AnalysisResultWhereInput;

  @ApiProperty({
    required: false,
    type: [AnalysisResultOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AnalysisResultOrderByInput], { nullable: true })
  @Type(() => AnalysisResultOrderByInput)
  orderBy?: Array<AnalysisResultOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AnalysisResultFindManyArgs as AnalysisResultFindManyArgs };