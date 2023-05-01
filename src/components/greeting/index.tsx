import { Row, Text, VStack } from "native-base";
import ThemeToggle from "../theme-toggle";

export function Greeting({
  userName,
  ...props
}: {
  userName: string;
  [key: string]: any;
}) {
  return (
    <Row w="100%" justifyContent={"space-between"} {...props}>
      <VStack>
        <Text fontSize="md" fontWeight={"300"}>
          Olá!
        </Text>
        <Text fontSize="xl" mt={-1} fontWeight={"500"}>
          {userName}
        </Text>
      </VStack>
      <ThemeToggle />
    </Row>
  );
}
