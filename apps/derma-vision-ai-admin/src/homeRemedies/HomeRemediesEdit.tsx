import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HomeRemediesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="skinCondition" source="skinCondition" />
        <TextInput label="remedyDetails" multiline source="remedyDetails" />
      </SimpleForm>
    </Edit>
  );
};
