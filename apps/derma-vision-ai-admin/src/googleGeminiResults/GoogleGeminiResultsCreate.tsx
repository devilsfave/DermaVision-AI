import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ImagesTitle } from "../images/ImagesTitle";

export const GoogleGeminiResultsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="image.id" reference="Images" label="image">
          <SelectInput optionText={ImagesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
