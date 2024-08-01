import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const ConsultationsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateTime" source="dateTime" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="notes" multiline source="notes" />
        <TextInput label="patient" source="patient" />
        <TextInput label="doctor" source="doctor" />
        <TextInput label="facility" source="facility" />
        <TextInput label="doctorName" source="doctorName" />
        <TextInput label="contactInfo" source="contactInfo" />
      </SimpleForm>
    </Create>
  );
};
