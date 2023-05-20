import CodePreview from "../../components/CodePreview";
import { Pagination } from "../../components/ui";
export default function Examples() {
  const onChange = (page: number) => {
    console.log(page);
  };
  return (
    <div className="mt-8 space-y-7">
      <CodePreview
        components={
          <>
            <Pagination current={0} total={0} onChange={onChange} />
            <Pagination current={2} total={45} onChange={onChange} />
            <Pagination current={1} total={76} onChange={onChange} />
            <Pagination current={1} total={91} onChange={onChange} />
            <Pagination current={7} total={91} onChange={onChange} />
          </>
        }
        codes={[
          {
            type: "typescript",
            content: `
function Demo() {
 return <div>
    <Pagination current={2} total={45} onChange={onChange} />
</div>
}
`,
          },
        ]}
      />
    </div>
  );
}
