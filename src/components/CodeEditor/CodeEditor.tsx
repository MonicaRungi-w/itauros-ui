import Editor, { EditorProps } from "@monaco-editor/react";
import React from "react";

import "../common.css";
import "./CodeEditor.css";

type JSONEditorProps = EditorProps & {
  value: any;
  onChange: (data: any) => void;
  theme?: "vs-dark" | "light";
  language: string;
  disabled?: boolean;
};

const JSONEditor = ({
  theme = "light",
  language,
  value,
  onChange,
  disabled = false,
  ...props
}: JSONEditorProps) => {
  return (
    <>
      <div className="itauros-ui-code-editor-json-wrapper">
        <Editor
          height="90vh"
          {...props}
          defaultLanguage={language}
          theme={theme}
          defaultValue={
            value ? JSON.stringify(value, null, 2) : "//insert code here"
          }
          onChange={(value) => onChange(value)}
          options={{
            domReadOnly: disabled,
            readOnly: disabled,
          }}
        />
      </div>
    </>
  );
};

export default JSONEditor;
