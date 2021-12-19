import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";

const Products = React.memo(() => {
  const router = useRouter();
  console.log("router::::", router);
  const { slug } = router.query;
  console.log("slug:::", slug);
  if (slug === "hello") {
    return <Typography variant="h1">404</Typography>;
  }
  return (
    <div>
      <Typography variant="h1">Product</Typography>
      {slug === "coca" && <Typography variant="h3">Coca</Typography>}
      {slug === "pepsi" && <Typography variant="h3">pepsi</Typography>}
    </div>
  );
  //   return <Typography variant="h1">Product {slug}</Typography>;
});

export default Products;
