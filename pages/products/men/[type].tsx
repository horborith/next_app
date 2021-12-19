import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";

const Types = React.memo(() => {
  const router = useRouter();
  const { type } = router.query;
  console.log("slug:::", router.query);

  return (
    <div>
      <Typography variant="h1">Type {type}</Typography>
      {slug === "coca" && <Typography variant="h3">Coca</Typography>}
      {slug === "pepsi" && <Typography variant="h3">pepsi</Typography>}
    </div>
  );
  //   return <Typography variant="h1">Product {slug}</Typography>;
});

export default Types;
