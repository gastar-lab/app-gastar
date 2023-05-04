import { Row, Text, VStack, useColorMode } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
type Props = {
  goBack?: () => void;
  title: string;
};
export function PageHeader({ goBack, title }: Props) {
  return (
    <Row w="100%" h={50} alignItems="center" justifyContent="center">
      <MaterialCommunityIcons
        onPress={goBack}
        name="arrow-left"
        size={20}
        color={useColorMode().colorMode === "dark" ? "white" : "black"}
      />
      <VStack flex={1} alignItems="center" justifyContent="center">
        <Text fontSize="lg" fontWeight="300">
          {title}
        </Text>
      </VStack>
    </Row>
  );
}