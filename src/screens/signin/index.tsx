import { ImageBackground, ScrollView } from "react-native";
import React, { useState } from "react";
import z from "zod";
import {
  Box,
  Factory,
  Heading,
  FormControl,
  Button,
  Pressable,
  Input,
  Icon,
  Text,
  HStack,
  VStack,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SigninSchema = z.object({
  email: z
    .string({
      errorMap: () => ({
        message: "Preencha o campo",
      }),
    })
    .email("Digite um e-mail válido"),
  password: z
    .string({
      errorMap: () => ({
        message: "Preencha o campo",
      }),
    })
    .min(6, "A senha deve conter no minímo 6 digitos"),
});

type SigninType = z.infer<typeof SigninSchema>;

const Signin = () => {
  const [showPassword, setShowPassword] = useState(true);
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
  });

  const navigation = useNavigation();

  const onSubmit = (data: SigninType) => {
    console.log("data", data);
    navigation.navigate("Home", { screen: "Home" });
  };
  
  const goToForgotPasswordScreen = () => {};
  const goToSignUpScreen = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box bg="trueGray.700" height={220} pt={10} px={3}>
        <ImageBackground
          source={require("../../../assets/g.png")}
          resizeMode="contain"
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Heading
            color="white"
            marginTop="auto"
            mb="25px"
            fontWeight="normal"
            fontSize="5xl"
          >
            Entre na sua conta
          </Heading>
        </ImageBackground>
      </Box>

      <VStack px={3} mt={58}>
        <FormControl isRequired isInvalid={!!errors.email}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <Input
                height={50}
                keyboardType="email-address"
                onChangeText={onChange}
                placeholder="Digite seu e-mail"
                fontSize="md"
                borderRadius={8}
                _focus={{
                  borderColor: "trueGray.700",
                  bg: "transparent",
                }}
                InputLeftElement={
                  <Icon
                    color="gray.400"
                    size={6}
                    ml={14}
                    as={Ionicons}
                    name="mail-outline"
                  />
                }
              />
            )}
          />
          {errors.email?.message && (
            <FormControl.ErrorMessage>
              {errors.email.message}
            </FormControl.ErrorMessage>
          )}
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.password} mt="32px">
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                height={50}
                onChangeText={onChange}
                secureTextEntry={showPassword ? true : false}
                placeholder="Digite sua senha"
                fontSize="md"
                borderRadius={8}
                _focus={{
                  borderColor: "trueGray.700",
                  bg: "transparent",
                }}
                InputRightElement={
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Icon
                      as={Ionicons}
                      name={showPassword ? "eye-off" : "eye"}
                      size={26}
                      mr={3}
                      color="gray.400"
                    />
                  </Pressable>
                }
                InputLeftElement={
                  <Icon
                    color="gray.400"
                    size={6}
                    ml={14}
                    as={Ionicons}
                    name="key-outline"
                  />
                }
              />
            )}
          />
          {errors.password?.message && (
            <FormControl.ErrorMessage>
              {errors.password.message}
            </FormControl.ErrorMessage>
          )}
        </FormControl>

        <Box my="32px">
          {/* Implementar o Radio "Lembrar de Mim" */}

          <Pressable alignSelf="flex-end" onPress={goToForgotPasswordScreen}>
            {({ isHovered, isFocused, isPressed }) => (
              <Text color={isPressed ? "blue.800" : "blue.600"}>
                Esqueci minha senha
              </Text>
            )}
          </Pressable>
        </Box>

        <Button
          height={50}
          onPress={handleSubmit(onSubmit)}
          borderRadius={8}
          bg="trueGray.700"
          _text={{
            fontSize: "md",
          }}
          _pressed={{
            bg: "trueGray.800",
          }}
          isLoading={isSubmitting}
        >
          Entrar
        </Button>

        <HStack space={3} alignItems="center" my="32px">
          <Box height="1px" bg="trueGray.700" flex={1} />
          <Text fontSize="md">Ou</Text>
          <Box height="1px" bg="trueGray.700" flex={1} />
        </HStack>

        <Button
          variant="outline"
          borderRadius={8}
          height={50}
          _text={{
            fontSize: "md",
            color: "dark.50",
          }}
          _pressed={{
            bg: "gray.200",
            borderColor: "trueGray.700",
          }}
          leftIcon={
            <Icon
              size={8}
              mr="12px"
              color="trueGray.700"
              as={Ionicons}
              name="logo-google"
            />
          }
        >
          Entrar com o Google
        </Button>

        <HStack alignItems="center" space={2} justifyContent="center">
          <Text mt="32px">Nao tem uma conta?</Text>

          <Pressable alignSelf="flex-end" onPress={goToSignUpScreen}>
            {({ isHovered, isFocused, isPressed }) => (
              <Text color={isPressed ? "blue.800" : "blue.600"}>
                Cadastre-se
              </Text>
            )}
          </Pressable>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default Signin;
