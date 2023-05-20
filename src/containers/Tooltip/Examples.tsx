import CodePreview from "../../components/CodePreview";
import { Button, Tooltip } from "../../components/ui";
export default function Examples() {
  return (
    <div className="mt-8 space-y-7">
      <CodePreview
        components={
          <div className="flex gap-3">
            <Tooltip title="Tooltip 1st" position="bottom center">
              <Button title="Bottom center" />
            </Tooltip>
            <Tooltip title="Tooltip 2nd">
              <Button title="Top center" />
            </Tooltip>
            <Tooltip title="Tooltip 3rd" position="left">
              <Button title="Left " />
            </Tooltip>
            <Tooltip title="Tooltip 4th" position="right">
              <Button title="Right" />
            </Tooltip>
          </div>
        }
        codes={[
          {
            type: "typescript",
            content: `function Demo(){
return <>
    <Tooltip title="Tooltip 1st" position="bottom center">
      <Button title="Bottom center" />
    </Tooltip>

    <Tooltip title="Tooltip 2nd">
      <Button title="Top center" />
    </Tooltip>

    <Tooltip title="Tooltip 3rd" position="left">
      <Button title="Left " />
    </Tooltip>

    <Tooltip title="Tooltip 4th" position="right" >
      <Button title="Right" />
    </Tooltip>
</>
}`,
          },
        ]}
      />
    </div>
  );
}
