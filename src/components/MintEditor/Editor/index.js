import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import "./styles.css";
import { Box } from "@mui/system";


const someCode = `import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={myTheme}
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}
export default App;`


const myTheme = createTheme({
  dark: "dark",
  settings: {
    background: "#454545",
    foreground: "#ffffff",
    caret: "#353535",
    selection: "#383838",
    selectionMatch: "#353535",
    gutterBackground: "#353535",
    gutterForeground: "#ffffff",
    gutterBorder: "#353535",
    lineHighlight: "#323232",
  },
  styles: [
    { tag: t.comment, color: "#787b80" },
    { tag: t.definition(t.typeName), color: "#194a7b" },
    { tag: t.typeName, color: "#194a7b" },
    { tag: t.tagName, color: "#aabbff" },
    { tag: t.variableName, color: "#2fff14" },
    { tag: t.className, color: '#df56fb' },
    { tag: t.literal, color: '#ff88ff' },
    { tag: t.string, color: '#ff6d64' },
  ],
});

export default function Editor() {
  return (
    <Box sx={{flexGrow:1}}>
    <CodeMirror
      value={someCode}
      height="calc(100vh - 64px)"
      theme={myTheme}
      width="100%"
      extensions={[javascript({ jsx: true })]}
    />
  </Box>
  );
}
