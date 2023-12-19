import { DevTool } from "@hookform/devtools";
import { Button, Input, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(4, { message: "Name is Required" }),
});

const defaultValues = { firstName: "euoa" };
const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
    // mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  //   console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}
        />
        <Button onClick={() => reset({ defaultValues })}>Reset</Button>
        <input type="submit" />
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
