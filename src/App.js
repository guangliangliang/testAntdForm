import "./styles.css";
import "./index.less";
import AntdForm from "./AntdForm";
import "antd/dist/antd.css";
import { tableFormData } from "./Data/tempData";
export default function App() {
  return (
    <div className="App">
      <h1>数据生成表单</h1>
      <AntdForm formData={tableFormData} />
    </div>
  );
}
