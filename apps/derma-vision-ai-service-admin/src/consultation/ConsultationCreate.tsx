import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { AnalysisResultTitle } from "../analysisResult/AnalysisResultTitle";

export const ConsultationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="analysisResult.id"
          reference="AnalysisResult"
          label="AnalysisResult"
        >
          <SelectInput optionText={AnalysisResultTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
