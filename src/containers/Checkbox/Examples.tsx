import { useState } from "react";
import { Checkbox } from "../../components/ui";
import CheckboxControlContainer from "./CheckboxControlExample";
import CodePreview from "../../components/CodePreview";

export default function Examples() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div className="mt-8 space-y-6">
      <h3>Examples</h3>
      <CodePreview
        components={
          <div className="flex flex-col gap-3">
            <Checkbox
              checked={checked1}
              onChange={(checked) => setChecked1(checked)}
              desc="This is a checkbox"
            />
            <Checkbox
              checked={checked2}
              onChange={(checked) => setChecked2(checked)}
              desc="This is a checkbox"
            />
          </div>
        }
        desc={"Basic usage of checkbox."}
        codes={[
          {
            type: "typescript",
            content: `function Demo(){
  const [checked, setChecked] = useState(false)
  return <>
    <Checkbox   
      checked={checked} 
      onChange={(checked) => setChecked(checked)} 
      desc="This is a checkbox" />
</>
}`,
          },
        ]}
      />

      <CodePreview
        components={
          <div className="flex flex-col gap-3">
            <Checkbox disabled desc="Disabled checkbox" />
            <Checkbox disabled checked desc="Disabled checkbox" />
          </div>
        }
        desc={"Disabled checkbox."}
        codes={[
          {
            type: "typescript",
            content: `function Demo(){
  return <>
    <Checkbox disabled desc="Disabled checkbox" />
</>
}
`,
          },
        ]}
      />

      <CodePreview
        components={<CheckboxControlContainer />}
        desc={"Control checked and disabled status"}
        codes={[
          {
            type: "typescript",
            content: `function Demo(){
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);

  return <>
    <Checkbox
      checked={checked}
      disabled={disabled}
      desc="This is a checkbox"
    />
    <Checkbox
      checked={checked}
      disabled={disabled}
      desc="This is a checkbox"
    />
</>
}
`,
          },
        ]}
      />
    </div>
  );
}
