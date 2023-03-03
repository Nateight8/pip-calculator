import React from "react";
import {
  Container,
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  Grid,
  Button,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { calcPips } from "@/redux/features/pipCalcSlice";
import { setOpen } from "@/redux/features/stateSlice";
import { FormikProps } from "formik";

type Props = {};

function FormComp({}: Props) {
  const initialValues = {
    entry_price: "",
    stop_loss: "",
    take_profit: "",
    position_size: "",
    currency: "",
  };

  const dispatch = useDispatch();

  const forexPairs = [
    { name: "EUR/USD", pipValue: 10 },
    { name: "USD/JPY", pipValue: 1000 },
    { name: "GBP/USD", pipValue: 10 },
    { name: "USD/CHF", pipValue: 10 },
    { name: "AUD/USD", pipValue: 10 },
    { name: "USD/CAD", pipValue: 10 },
    { name: "NZD/USD", pipValue: 10 },
  ];

  interface FieldProps {
    field: {
      name: string;
      value: any;
      onChange: (event: React.ChangeEvent<any>) => void;
      onBlur: (event: React.FocusEvent<any>) => void;
    };
    form: {
      touched: { [field: string]: boolean };
      errors: { [field: string]: string };
      setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean
      ) => void;
    };
  }

  return (
    <Formik
      initialValues={initialValues}
      // validate={validate}
      onSubmit={(values) => {
        dispatch(calcPips(values));
        dispatch(setOpen());
        console.log(values);
      }}
    >
      {() => {
        return (
          <Form>
            <Container maxWidth="xs" sx={{ paddingY: "3.5rem" }}>
              <Grid container>
                <Grid item xs={12} p={1}>
                  <Field name="currency" as="select" id="currency">
                    {({ field, form }: FieldProps) => {
                      return (
                        <FormControl
                          sx={{ minWidth: 220 }}
                          size="small"
                          margin="dense"
                          fullWidth
                        >
                          <InputLabel id="demo-select-small">
                            Currency Pair
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Currency Pair"
                            {...field}
                            onChange={(e) => {
                              form.setFieldValue("currency", e.target.value);
                            }}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>

                            {forexPairs.map(({ name, pipValue }) => (
                              <MenuItem key={name} value={pipValue}>
                                {name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      );
                    }}
                  </Field>
                </Grid>

                <Grid item p={1} xs={4}>
                  <Field
                    as={TextField}
                    name="entry_price"
                    id=""
                    label="Entry Price"
                    size="small"
                    margin="dense"
                    fullWidth
                    type="number"
                  />
                </Grid>
                <Grid item p={1} xs={4}>
                  <Field
                    as={TextField}
                    name="stop_loss"
                    id=""
                    label="Stop Loss"
                    size="small"
                    margin="dense"
                    fullWidth
                    type="number"
                  />
                </Grid>
                <Grid item p={1} xs={4}>
                  <Field
                    as={TextField}
                    name="take_profit"
                    id=""
                    label="Take Profit"
                    size="small"
                    margin="dense"
                    fullWidth
                    type="number"
                  />
                </Grid>
                <Grid item p={1} xs={12}>
                  <Field
                    as={TextField}
                    name="position_size"
                    label="Lot Size"
                    type="number"
                    size="small"
                    margin="dense"
                    fullWidth
                    defaultValue={0.001}
                    inputProps={{
                      step: 0.001,
                      min: 0.001,
                    }}
                  />
                </Grid>

                <Grid item p={1} xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    Calculate
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormComp;
