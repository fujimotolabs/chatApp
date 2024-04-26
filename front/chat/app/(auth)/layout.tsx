import Box from "@mui/material/Box";
import { grey } from '@mui/material/colors';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        height: "100vh",
        color: "Black",
        backgroundColor: grey[600],
        borderRadius: 1,
      }}
    >
      {children}
    </Box>
  );
}