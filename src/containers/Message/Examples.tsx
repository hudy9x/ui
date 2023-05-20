import CodePreview from "../../components/CodePreview";
import {
  Button,
  messageError,
  messageInfo,
  messageSuccess,
  messageWarning,
} from "../../components/ui";
export default function Examples() {
  const success = () => {
    messageSuccess("This is a success message");
  };

  const errorHandler = () => {
    messageError("Your request has been failed");
  };
  const warningHandler = () => {
    messageWarning("Please make sure that this action can not be undo");
  };
  const inforHandler = () => {
    messageInfo("The message only shown one time");
  };

  return (
    <div className="mt-8 space-y-7">
      <CodePreview
        components={
          <div className="space-x-1">
            <Button primary title="Success message" onClick={success} />
            <Button title="Error message" onClick={errorHandler} />
            <Button title="Warning message" onClick={warningHandler} />
            <Button title="Info message" onClick={inforHandler} />
          </div>
        }
        codes={[
          {
            type: "typescript",
            content: `import {
  messageError,
  messageInfo,
  messageSuccess,
  messageWarning,
} from "../components";

function Component(){
  const success = () => {
    messageSuccess("This is a success message");
  };

  const errorHandler = () => {
    messageError("Your request has been failed");
  };
  const warningHandler = () => {
    messageWarning("Please make sure that this action can not be undo");
  };
  const inforHandler = () => {
    messageInfo("The message only shown one time");
  };
  return <>
 </>; 
}`,
          },
        ]}
      />{" "}
    </div>
  );
}
