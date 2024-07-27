import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
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

export const ImagesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
