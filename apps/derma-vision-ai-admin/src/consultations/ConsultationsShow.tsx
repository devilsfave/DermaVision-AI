import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ConsultationsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dateTime" source="dateTime" />
        <TextField label="status" source="status" />
        <TextField label="notes" source="notes" />
        <TextField label="patient" source="patient" />
        <TextField label="doctor" source="doctor" />
        <TextField label="facility" source="facility" />
        <TextField label="doctorName" source="doctorName" />
        <TextField label="contactInfo" source="contactInfo" />
      </SimpleShowLayout>
    </Show>
  );
};
