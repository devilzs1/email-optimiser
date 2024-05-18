
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
import {TemplateDialog} from "./TemplateDialog";

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
     <TemplateDialog open={openDialog} handleClose={handleCloseDialog} />
       )}
    </>
  );
};

export default TemplateCard;
