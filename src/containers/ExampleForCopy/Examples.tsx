import CodePreview from "../../components/CodePreview";
import { Button } from "../../components/ui";
export default function Examples() {
  return (
    <div className="mt-8 space-y-7">
      <CodePreview
        components={
          <>
            <Button title="click me" primary />
          </>
        }
        codes={[
          {
            type: "typescript",
            content: `
function Demo() {
 return <div></div>
}
`,
          },
        ]}
      />
    </div>
  );
}
