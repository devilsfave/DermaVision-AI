import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { IMAGE_TITLE_FIELD } from "./ImageTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ANALYSISRESULT_TITLE_FIELD } from "../analysisResult/AnalysisResultTitle";

export const ImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="imagePath" source="imagePath" />
        <TextField label="metadata" source="metadata" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="AnalysisResult"
          source="analysisresult.id"
          reference="AnalysisResult"
        >
          <TextField source={ANALYSISRESULT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="AnalysisResult"
          target="imageId"
          label="Analysis Results"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="result" source="result" />
            <ReferenceField label="Image" source="image.id" reference="Image">
              <TextField source={IMAGE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
