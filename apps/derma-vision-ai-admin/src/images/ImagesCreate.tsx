import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { AnalysisResultsTitle } from "../analysisResults/AnalysisResultsTitle";
import { GoogleGeminiResultsTitle } from "../googleGeminiResults/GoogleGeminiResultsTitle";

export const ImagesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="imageUrl" source="imageUrl" />
        <SelectInput
          source="analysisStatus"
          label="analysisStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="analysisResultsItems"
          reference="AnalysisResults"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalysisResultsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="googleGeminiResultsItems"
          reference="GoogleGeminiResults"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoogleGeminiResultsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
