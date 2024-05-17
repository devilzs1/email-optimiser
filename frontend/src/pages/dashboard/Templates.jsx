import { AppBar, Box, Button, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom';
import LineChart from '../../components/LineChart';
import ConversionChart from '../../components/CoversionChart';
import PerformanceOverTime from '../../components/PerformanceOverTime';
// import FunnelChart from '../../components/FunnelChart';

const Templates = () => {
    const isMediumScreen = useMediaQuery("(max-width:728px)");

  return (
    <Stack
      sx={{
        backgroundColor: "#f5f8fa",
        // height: "100vh",
        // width: `calc(100% - ${250}px)`,
        width: "100%",
      }}
      p={4}
      gap={3}
    >
      {/* <AppBar
        position="fixed"
        sx={{
          p: 2,
          backgroundColor: "inherit",
          color: "#000",
          width: `calc(100% - ${250}px)`,
        }}
      > */}
        {/* <Toolbar> */}
        <Stack
          direction={isMediumScreen ? "column" : "row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h2">Templates</Typography>
          <Button
            variant="contained"
            sx={{
              padding: "4px 20px",
              borderRadius: "20px",
              height: "2.5rem",
              width: isMediumScreen ? "100%" : "auto",
            }}
            component={Link}
            to={`/email/templates`}
          >
            <Typography sx={{ textTransform: "capitalize" }}>
              Create template
            </Typography>
          </Button>
        {/* </Toolbar> */}
      {/* </AppBar> */}
        </Stack>

      {/* <Stack sx={{overflow: "hidden", height: "500px"}}>
        <LineChart />
      </Stack> */}

      {/* <Stack><FunnelChart/></Stack> */}
      <Box m={isMediumScreen ? 1: 4}>
        <ConversionChart />
      </Box>

      <Box m={isMediumScreen ? 1: 4}>
        <PerformanceOverTime />
      </Box>
      <Box mt={2}/>
    </Stack>
  );
}

export default Templates


// import { AppBar, Button, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material'
// import { Link } from 'react-router-dom';
// import LineChart from '../../components/LineChart';
// // import FunnelChart from '../../components/FunnelChart';

// const Templates = () => {
//     const isMediumScreen = useMediaQuery("(max-width:728px)");

//   return (
//     <Stack
//       sx={{ backgroundColor: "#f5f8fa", height: "100vh", width: "100%" }}
//       p={4}
//       gap={3}
//     >
//       <AppBar position='fixed'>
//         <Toolbar>
//           <Stack
//             direction={isMediumScreen ? "column" : "row"}
//             justifyContent={"space-between"}
//             alignItems={"center"}
//           >
//             <Typography variant="h2">Templates</Typography>
//             <Button
//               variant="contained"
//               sx={{
//                 padding: "4px 20px",
//                 borderRadius: "20px",
//                 height: "2.5rem",
//                 width: isMediumScreen ? "100%" : "auto",
//               }}
//               component={Link}
//               to={`/email/templates`}
//             >
//               <Typography sx={{ textTransform: "capitalize" }}>
//                 Create template
//               </Typography>
//             </Button>
//           </Stack>
//         </Toolbar>
//       </AppBar>

//       {/* <Stack>/ */}
//       <LineChart />
//       {/* </Stack> */}

//       <Stack>{/* <FunnelChart/> */}</Stack>
//     </Stack>
//   );
// }

// export default Templates