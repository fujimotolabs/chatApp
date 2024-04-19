import Box from "@mui/material/Box";

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
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      {children}
    </Box>
  );
}