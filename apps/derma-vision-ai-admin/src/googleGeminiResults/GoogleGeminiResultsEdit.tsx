import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ImagesTitle } from "../images/ImagesTitle";

export const GoogleGeminiResultsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="image.id" reference="Images" label="image">
          <SelectInput optionText={ImagesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
