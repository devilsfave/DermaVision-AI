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
import { AnalysisResultsWhereInput } from "./AnalysisResultsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AnalysisResultsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AnalysisResultsWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultsWhereInput)
  @IsOptional()
  @Field(() => AnalysisResultsWhereInput, {
    nullable: true,
  })
  every?: AnalysisResultsWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalysisResultsWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultsWhereInput)
  @IsOptional()
  @Field(() => AnalysisResultsWhereInput, {
    nullable: true,
  })
  some?: AnalysisResultsWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalysisResultsWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultsWhereInput)
  @IsOptional()
  @Field(() => AnalysisResultsWhereInput, {
    nullable: true,
  })
  none?: AnalysisResultsWhereInput;
}
export { AnalysisResultsListRelationFilter as AnalysisResultsListRelationFilter };
