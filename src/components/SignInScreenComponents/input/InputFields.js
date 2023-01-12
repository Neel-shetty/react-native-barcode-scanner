import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import { Formik } from "formik";
import * as yup from 'yup';

const InputFields = () => {
  return (
    <View style={styles.root}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Input
              placeholder={"Email/Username"}
              title={"Your Email/Username"}
              onChangeText={handleChange("email")}
              handleBlur={handleBlur("email")}
              value={values.email}
              fieldType={'email'}
            />
            <Input
              placeholder={"Password"}
              title={"Your Password"}
              onChangeText={handleChange("password")}
              handleBlur={handleBlur("password")}
              value={values.password}
              fieldType={"password"}
              secureTextEntry={true}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  root: {},
});
