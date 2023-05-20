import ButtonPage from "../../../containers/Button";
import Checkbox from "../../../containers/Checkbox";
import Message from "../../../containers/Message";
import Tooltip from "../../../containers/Tooltip";
import Pagination from "../../../containers/Pagination";

export default function Page({ params }) {
  console.log(params, "owijeroiwjeorij");
  const component = params.component;
  if (component === "button") {
    return <ButtonPage />;
  }

  if (component === "checkbox") {
    return <Checkbox />;
  }

  if (component === "message") {
    return <Message />;
  }

  if (component === "tooltip") {
    return <Tooltip />;
  }

  if (component === "pagination") {
    return <Pagination />;
  }

  return <></>;
}
