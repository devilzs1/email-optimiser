

import { AppBar, Box, Button, Toolbar } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useHtmlContent } from "../../context/HTMLContentContext";
import EmailEditor from "react-email-editor";


const Example = () => {
  const emailEditorRef = useRef(null);
  const navigate = useNavigate();
  const { setHtmlContent } = useHtmlContent();

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      // console.log("exportHtml", html);
      setHtmlContent(html);
      navigate("/campaigns/create-campaign");
    });
  };

  const onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
  };

  const onLoad = (unlayer) => {
    console.log("onLoad", unlayer);
    unlayer.addEventListener("design:loaded", onDesignLoad);
  };

  const onReady = (unlayer) => {
    console.log("onReady", unlayer);
  };

  return (
    <>
      <AppBar position="fixed">
      <Toolbar sx={{justifyContent: "space-between"}}>
        <h1>Design Email template</h1>

        {/* <button onClick={togglePreview}>
          {preview ? "Hide" : "Show"} Preview
        </button> */}
        {/* <button onClick={saveDesign}>Save Design</button> */}
        <Button onClick={exportHtml} variant="contained"  color="success">Save & Exit</Button>
      </Toolbar>

      </AppBar>
      <Box mt={10}/>

        <EmailEditor
          ref={emailEditorRef}
          onLoad={onLoad}
          onReady={onReady}
          options={{
            appearance: {
              theme: "modern_light",
            },
          }}
          minHeight={"90vh"}
          
        />
    </>
  );
};

export default Example;
