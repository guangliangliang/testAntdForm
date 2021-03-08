import "./styles.css";
import "./index.less";
import AntdForm from "./AntdForm";
import "antd/dist/antd.css";
import { tableFormData } from "./Data/tempData";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <AntdForm formData={tableFormData} />
      <h2> Start editing to see some magic happen!</h2>
    </div>
  );
}
