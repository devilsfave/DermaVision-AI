import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HomeRemediesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="skinCondition" source="skinCondition" />
        <TextInput label="remedyDetails" multiline source="remedyDetails" />
      </SimpleForm>
    </Create>
  );
};
