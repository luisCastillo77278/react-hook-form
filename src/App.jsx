import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

function App() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (value) => console.log(value);

  return (
    <form>
      <Controller
        name={"textValue"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={"Text Value"} />
        )}
      />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </form>
  );
}

export default App;
