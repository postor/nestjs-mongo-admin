import { ReferenceInput, SelectInput, TextInput, required } from "react-admin"

export default () => {
  return <>

    <TextInput source="title" validate={[required()]} fullWidth />
    <ReferenceInput
      source="user" // This is the field in your resource that stores the user's ID
      reference="users" // The resource to reference
    >
      <SelectInput
        fullWidth
        optionText={(record) => `${record.name} | ${record.email}`}
      />
    </ReferenceInput>
    <TextInput source="content" multiline rows={5} fullWidth />
  </>
}