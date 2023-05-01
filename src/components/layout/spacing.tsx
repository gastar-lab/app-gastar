import { Box } from "native-base";

export function LayoutSpacing({
  children,
  bg,
}: {
  children: JSX.Element[];
  bg: string;
}) {
  return (
    <Box
      flex={1}
      bg={bg}
      alignItems="center"
      justifyContent="flex-start"
      p={3}
      pt={10}
      pb={0}
    >
      {children}
    </Box>
  );
}
