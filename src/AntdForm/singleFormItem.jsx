/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import {
  Cascader,
  Input,
  TreeSelect,
  InputNumber,
  Transfer,
  Slider,
  Switch,
  Button,
  Radio,
  Rate,
  Select,
  Checkbox,
  DatePicker,
  Col,
  Row,
  TimePicker,
  Upload,
  Icon,
  message,
  Tag,
  Tooltip
} from "antd";
import { is, setObjDefaultValue } from "../utils";
import PropTypes from "prop-types";

const { Option, OptGroup } = Select;
const { TreeNode } = TreeSelect;
const { Dragger } = Upload;
const { Group: RadioGroup } = Radio;
const { Group: CheckboxGroup } = Checkbox;
const { TextArea, Group: InputGroup, Password: InputPassword } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class SingleFormItem extends Component {
  constructor(props) {
    super(props);
    this.UploadButtonRef = React.createRef(null);
  }

  onEventChange = (event) => {
    this.setValue(event.target.value);
  };

  onValueChange = (value) => {
    this.setValue(value);
  };

  onDateChange = (date, dateString) => {
    this.setValue(dateString);
  };

  setValue = (value) => {
    const { onChange } = this.props;
    onChange(value);
  };

  onButtonClick = (obj) => {
    const { text, buttonClick } = this.props;
    buttonClick(text, obj);
  };

  render() {
    const {
      type = "",
      mixin = {},
      text,
      manualSubmit,
      tooltipMixin
    } = this.props;
    let { onEventChange: onChange } = this;
    if (
      [
        "Checkbox",
        "Select",
        "InputNumber",
        "Slider",
        "Switch",
        "Rate",
        "Cascader",
        "TreeSelect",
        "Button"
      ].includes(type)
    ) {
      onChange = this.onValueChange;
    } else if (
      ["MonthPicker", "RangePicker", "WeekPicker", "DatePicker"].includes(type)
    ) {
      onChange = this.onDateChange;
    }
    let mixinObj = {
      onChange,
      ...mixin
    };
    const getRadio = () => {
      const { radios = [] } = mixinObj;
      delete mixinObj.radios;
      const radioItems = radios.map((item) => {
        const { value, label } = item;
        return (
          <Radio key={value} value={value}>
            {label}
          </Radio>
        );
      });
      return <Radio.Group {...mixinObj}>{radioItems} </Radio.Group>;
    };
    const getSelect = () => {
      const { options = [], next } = mixinObj;
      delete mixinObj.options;
      let optionItems = options.map((item) => {
        const { value, label } = item;
        return (
          <Option key={value} value={value}>
            {label}
          </Option>
        );
      });
      if (next) {
        optionItems = options.map((item) => {
          const { value, label } = item;
          const children = item[next];
          return (
            <OptGroup key={value} label={label}>
              {children.map((item) => {
                const { value, label } = item;
                return (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                );
              })}
            </OptGroup>
          );
        });
      }
      return (
        <Select {...mixinObj} allowClear>
          {optionItems}
        </Select>
      );
    };

    const getTags = () => {
      let { text: texts = [] } = this.props;
      const main = texts.map((item) => {
        const { name } = item;
        return <Tag key={name}>{name.toUpperCase()}</Tag>;
      });
      return <>{main}</>;
    };

    const getUpload = () => {
      const UploadClick = () => {
        const { uploadButtonClick } = this.props;
        const flag = uploadButtonClick();
        if (flag) {
          console.log(flag);
          this.UploadButtonRef.current.click();
        }
      };
      return (
        <>
          <Button onClick={UploadClick}>{text}</Button>
          <Upload
            {...mixinObj}
            onChange={(info) => {
              const { status } = info.file;
              if (status !== "uploading") {
                console.log(info.file, info.fileList);
              }
              if (status === "done") {
                message.success(
                  `${info.file.name} file uploaded successfully.`
                );
                this.onButtonClick(info);
              } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
              }
            }}
          >
            <Button ref={this.UploadButtonRef}></Button>
          </Upload>
        </>
      );
    };
    let itemTypeObjs = {
      Text: (
        <Tooltip placement="topRight" {...tooltipMixin} title={text}>
          <span>{text}</span>
        </Tooltip>
      ),
      Input: <Input {...mixinObj} />,
      InputPassword: <InputPassword {...mixinObj} />,
      TextArea: <TextArea allowClear {...mixinObj} />,
      InputNumber: <InputNumber {...mixinObj} />,
      Slider: <Slider {...mixinObj} />,
      Switch: <Switch {...mixinObj} />,
      Rate: <Rate {...mixinObj} />,
      Tag: getTags,
      Cascader: <Cascader {...mixinObj} />,
      DatePicker: <DatePicker {...mixinObj} />,
      MonthPicker: <MonthPicker {...mixinObj} />,
      RangePicker: <RangePicker {...mixinObj} />,
      WeekPicker: <WeekPicker {...mixinObj} />,
      TimePicker: <TimePicker {...mixinObj} />,
      Checkbox: <CheckboxGroup {...mixinObj} />,
      Submit: () => {
        const { label = "提交" } = mixinObj;
        return (
          <Button
            type="primary"
            htmlType="submit"
            onClick={(e) => {
              e.preventDefault();
              manualSubmit();
            }}
            {...mixinObj}
          >
            {label}{" "}
          </Button>
        );
      },
      Upload: getUpload,
      Button: (
        <Button
          type="primary"
          onClick={(e) => {
            this.onButtonClick();
          }}
          {...mixinObj}
        >
          {text}{" "}
        </Button>
      ),
      Dragger: () => {
        const onDraggerChange = (info) => {
          const { status } = info.file;
          if (status !== "uploading") {
            console.log(info.file, info.fileList);
          }
          if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        };
        mixinObj.onChange = onDraggerChange;
        return (
          <Dragger {...mixinObj}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
          </Dragger>
        );
      },
      InputGroup: () => {
        return (
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
              <Col span={8}>
                <Input defaultValue="26888888" />
              </Col>
            </Row>
          </InputGroup>
        );
      },
      Select: getSelect,
      Radio: getRadio,
      Transfer: <Transfer {...mixinObj} />,
      TreeSelect: () => {
        const {
          idKey = "key",
          titleKey = "title",
          childrenKey = "children",
          treeData = []
        } = mixinObj;

        const renderTreeNodes = (data) =>
          data.map((item) => {
            if (item[childrenKey]) {
              return (
                <TreeNode key={item[idKey]} title={item[titleKey]}>
                  {renderTreeNodes(item[childrenKey])}
                </TreeNode>
              );
            }
            return <TreeNode key={item[idKey]} title={item[titleKey]} />;
          });
        return (
          <TreeSelect treeDefaultExpandAll showSearch {...mixinObj}>
            {renderTreeNodes(treeData)}
          </TreeSelect>
        );
      }
    };
    itemTypeObjs = setObjDefaultValue(itemTypeObjs, null);
    const result = itemTypeObjs[type];
    /* if(Radio){

      } */
    return is.Function(result) ? result() : result;
  }
}

SingleFormItem.propTypes = {
  /**
   * name
   */
  type: PropTypes.string,
  /**
   * 点击提交按钮时调用
   */
  mixin: PropTypes.object,
  /**
   * 每次改变数据或者 按钮点击时调用
   */
  value: PropTypes.string,
  /**
   * 改变表单项内容时调用
   */
  onChange: PropTypes.func,
  /**
   * 按钮点击时调用
   */
  buttonClick: PropTypes.func,
  /**
   * 按钮点击时调用
   */
  uploadButtonClick: PropTypes.func
};

SingleFormItem.defaultProps = {
  type: "",
  mixin: {},
  value: "",
  onChange: () => {},
  buttonClick: () => {},
  uploadButtonClick: () => {
    return true;
  }
};

export default SingleFormItem;
