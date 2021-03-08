import moment from "moment";
const today = moment();
function disabledDate(current) {
  return current && current < moment().subtract(1, "days");
}
const defaultFormDefaultLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 }
  }
};

const formNextLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};

// 没有名称只有右侧的数据的布局
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 18,
      offset: 6
    }
  }
};

const tableFormData = {
  form: {
    name: "test",
    ...defaultFormDefaultLayout
  },
  items: [
    {
      item: {
        label: "Input",
        name: "Input",
        rules: [{ required: true, message: "请输入您的元数据名称" }]
      },
      type: "Input",
      mixin: {
        placeholder: "请输入",
        defaultValue: "Input"
      }
    },
    {
      item: {
        label: "Text",
        name: "Text"
      },
      type: "Text",
      value: "showText",
      tooltipMixin: {
        placement: "bottomRight"
      }
    },
    {
      item: {
        label: "InputPassword",
        name: "InputPassword",
        rules: [{ required: true, message: "不能为空" }]
      },
      type: "InputPassword",
      mixin: {
        placeholder: "请输入"
      }
    },
    {
      item: {
        label: "InputNumber",
        name: "InputNumber"
      },
      type: "InputNumber",
      mixin: {
        placeholder: "请输入"
      }
    },
    {
      item: {
        label: "TextArea",
        name: "TextArea"
      },
      type: "TextArea",
      mixin: {
        placeholder: "请输入",
        rows: 4
      }
    },
    {
      item: {
        label: "Slider",
        name: "Slider"
      },
      type: "Slider",
      mixin: {
        min: 1,
        max: 20,
        value: 10
      }
    },
    {
      item: {
        label: "Switch",
        name: "Switch"
      },
      type: "Switch",
      mixin: {
        defaultChecked: false,
        checkedChildren: "开启"
      }
    },
    {
      item: {
        label: "Rate",
        name: "Rate"
      },
      type: "Rate",
      mixin: {
        defaultValue: 2.5
      }
    },
    {
      item: {
        label: "Tag",
        name: "Tag"
      },
      type: "Tag",
      value: [{ name: "tag1" }, { name: "tag2" }]
    },
    {
      item: {
        label: "Cascader",
        name: "Cascader"
      },
      type: "Cascader",
      mixin: {
        options: [
          {
            value: "zhejiang",
            label: "Zhejiang",
            children: [
              {
                value: "hangzhou",
                label: "Hangzhou",
                children: [
                  {
                    value: "xihu",
                    label: "West Lake"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      item: {
        label: "DatePicker",
        name: "DatePicker"
      },
      type: "DatePicker",
      mixin: {
        defaultValue: moment(today),
        disabledDate: disabledDate
      }
    },
    {
      item: {
        label: "MonthPicker",
        name: "MonthPicker"
      },
      type: "MonthPicker",
      mixin: {
        defaultValue: moment(today)
      }
    },
    {
      item: {
        label: "RangePicker",
        name: "RangePicker"
      },
      type: "RangePicker",
      mixin: {
        defaultValue: moment(today),
        disabledDate: disabledDate
      }
    },
    {
      item: {
        label: "WeekPicker",
        name: "WeekPicker"
      },
      type: "WeekPicker",
      mixin: {
        defaultValue: moment(today)
      }
    },
    {
      item: {
        label: "TimePicker",
        name: "TimePicker"
      },
      type: "TimePicker",
      mixin: {
        defaultValue: moment(today)
      }
    },
    {
      item: {
        label: "Checkbox",
        name: "Checkbox"
      },
      type: "Checkbox",
      mixin: {
        options: [
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" }
        ],
        defaultValue: "Apple"
      }
    },
    {
      item: {
        label: "Radio",
        name: "Radio"
      },
      type: "Radio",
      mixin: {
        options: [
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" }
        ],
        defaultValue: "Apple"
      }
    },
    {
      item: {
        label: "Transfer",
        name: "Transfer"
      },
      type: "Transfer",
      mixin: {}
    },
    {
      item: {
        label: "TreeSelect",
        name: "TreeSelect"
      },
      type: "TreeSelect",
      mixin: {
        idKey: "key",
        titleKey: "title",
        childrenKey: "children",
        treeData: [
          {
            key: "001",
            title: "001",
            children: [
              {
                key: "001001",
                title: "001001"
              },
              {
                key: "001002",
                title: "001002"
              }
            ]
          },
          {
            key: "002",
            title: "002",
            children: [
              {
                key: "002001",
                title: "002001"
              },
              {
                key: "002002",
                title: "002002"
              }
            ]
          }
        ]
      }
    },
    {
      item: {
        label: "Select",
        name: "Select"
      },
      type: "Select",
      mixin: {
        options: [
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" }
        ],
        defaultValue: "Apple"
      }
    },
    {
      item: {
        label: "SelectNext",
        name: "SelectNext"
      },
      type: "Select",
      mixin: {
        options: [
          {
            label: "Apple",
            value: "Apple",
            childer: [
              {
                label: "Apple1",
                value: "Apple1"
              },
              {
                label: "Apple2",
                value: "Apple2"
              }
            ]
          },
          {
            label: "Pear",
            value: "Pear",
            childer: [
              {
                label: "Pear1",
                value: "Pear1"
              }
            ]
          },
          {
            label: "Orange",
            value: "Orange",
            childer: [
              {
                label: "Orange1",
                value: "Orange1"
              }
            ]
          }
        ],
        next: "childer",
        defaultValue: "Apple1"
      }
    },
    {
      item: {
        label: "Upload",
        name: "Upload"
      },
      type: "Upload",
      value: "上传文件",
      mixin: {
        name: "files",
        action: "action"
      }
    },
    {
      item: {
        name: "button",
        ...tailFormItemLayout
      },
      type: "Button",
      value: "自定义按钮"
    },
    {
      item: {
        label: "",
        name: "Submit",
        ...tailFormItemLayout
      },
      type: "Submit",
      mixin: {
        label: "提交按钮"
      }
    }
  ]
};

export { tableFormData };
