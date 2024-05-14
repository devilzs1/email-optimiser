// import React from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardActionArea,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Divider,
//   Typography,
// } from "@mui/material";

// const TemplateCard = ({ image, name, html }) => {
//   return (
//     <>
//       <Card sx={{ maxWidth: 250 }}>
//         <CardMedia component="img" height="250" image={image} alt={name} />
//         <Divider sx={{ width: "100%" }} />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {name}
//           </Typography>
//         </CardContent>
//       </Card>
//       <Box
//         sx={{ display: "flex", justifyContent: "center" }}
//         onMouseEnter={(e) =>
//           (e.currentTarget.lastChild.style.visibility = "visible")
//         }
//         onMouseLeave={(e) =>
//           (e.currentTarget.lastChild.style.visibility = "hidden")
//         }
//       >
//         <CardActions sx={{ visibility: "hidden" }}>
//           <Button size="small" variant="contained">
//             Apply
//           </Button>
//           <Button size="small" variant="outlined">
//             Preview
//           </Button>
//         </CardActions>
//       </Box>
//     </>
//   );
// };

// export default TemplateCard;


import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import {SaveDrawer} from "./Drawer";

const TemplateCard = ({ id, image, name, html }) => {
      const [openDialog, setOpenDialog] = useState(false);
      const handleCloseDialog = () => {
        setOpenDialog(false);
      };
      const handleOpenDialog = () => {
        setOpenDialog(true);
      };

  return (
    <>
    <Stack gap={1}>
      <Card>
        <CardMedia component="img" height="250" image={image} alt={name} />
        <CardContent>
          <Typography variant="h5" component="div" textAlign={"center"}>
            {name}
          </Typography>
          <Divider />
        </CardContent>
        <Stack direction="row" gap={2} px={2} mb={1} justifyContent={"center"}>
          <Button variant="contained" onClick={handleOpenDialog}>
            Apply
          </Button>
          {id !== 0 && <Button variant="outlined">Preview</Button>}
        </Stack>
      </Card>
    </Stack>
    {openDialog && (
     <SaveDrawer open={openDialog} handleClose={handleCloseDialog} />
       )}
    </>
  );
};

export default TemplateCard;
