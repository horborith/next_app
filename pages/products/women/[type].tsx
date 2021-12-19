import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";

const Types = React.memo(() => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div>
      <Typography variant="h4">Type {JSON.stringify(router)}</Typography>
    </div>
  );
});

export default Types;
