import { Row, Text } from "native-base";
import ThemeToggle from "../theme-toggle";

export function Greeting({
  userFirstName,
  ...props
}: {
  userFirstName: string;
  [key: string]: any;
}) {
  return (
    <Row w="100%" justifyContent={"space-between"} {...props}>
      <Text fontSize="2xl" fontWeight={"600"}>
        Olá, {userFirstName}
      </Text>
      <ThemeToggle />
    </Row>
  );
}
