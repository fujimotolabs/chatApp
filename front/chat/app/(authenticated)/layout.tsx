import Sidebar from "@/component/layout/sidebar";
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
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Sidebar />
      {children}
    </Box>
  );
}