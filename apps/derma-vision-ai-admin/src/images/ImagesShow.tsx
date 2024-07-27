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

import { IMAGES_TITLE_FIELD } from "./ImagesTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ImagesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="analysisStatus" source="analysisStatus" />
        <TextField label="uploadedAt" source="uploadedAt" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="AnalysisResults"
          target="imageId"
          label="AnalysisResultsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="result" source="result" />
            <ReferenceField label="image" source="images.id" reference="Images">
              <TextField source={IMAGES_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="GoogleGeminiResults"
          target="imageId"
          label="GoogleGeminiResultsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="geminiResult" source="geminiResult" />
            <ReferenceField label="image" source="images.id" reference="Images">
              <TextField source={IMAGES_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
