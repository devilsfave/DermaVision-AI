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
import { AnalysisResultsWhereInput } from "./AnalysisResultsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AnalysisResultsOrderByInput } from "./AnalysisResultsOrderByInput";

@ArgsType()
class AnalysisResultsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnalysisResultsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AnalysisResultsWhereInput, { nullable: true })
  @Type(() => AnalysisResultsWhereInput)
  where?: AnalysisResultsWhereInput;

  @ApiProperty({
    required: false,
    type: [AnalysisResultsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AnalysisResultsOrderByInput], { nullable: true })
  @Type(() => AnalysisResultsOrderByInput)
  orderBy?: Array<AnalysisResultsOrderByInput>;

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

export { AnalysisResultsFindManyArgs as AnalysisResultsFindManyArgs };