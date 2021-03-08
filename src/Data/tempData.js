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
        label: "元数据名称",
        name: "name",
        rules: [{ required: true, message: "请输入您的元数据名称" }]
      },
      type: "Input",
      mixin: {
        placeholder: "请输入"
      }
    },
    {
      item: {
        label: "存储对象",
        name: "storeObjectId"
      },
      type: "Select",
      mixin: {
        placeholder: "请选择",
        options: [],
        next: "dsDatastoreObjectVoList"
      }
    },
    {
      item: {
        label: "元数据来源",
        name: "datasourceId"
      },
      type: "Select",
      mixin: {
        placeholder: "请选择",
        options: [
          { label: "气象局", value: "气象局" },
          { label: "-", value: "-" }
        ]
      }
    },
    /*  {
      item:{
        label:"存储时间",
        name:"createTime",
      },
      type:'Select',
      mixin:{
        placeholder:"请选择",
        options:[],
      }
    }, */
    {
      item: {
        label: "元数据标签",
        name: "tagList",
        ...formNextLayout
      },
      type: "Select",
      mixin: {
        placeholder: "请选择",
        mode: "multiple",
        options: []
      }
    },
    {
      item: {
        label: "类型",
        name: "type"
      },
      type: "Select",
      mixin: {
        placeholder: "请选择",
        options: [
          { label: "全量", value: "0" },
          { label: "增量", value: "1" }
        ]
      }
    },
    {
      item: {
        label: "统计周期",
        name: "statPeriod"
      },
      type: "Select",
      mixin: {
        placeholder: "请选择",
        options: []
      }
    },
    {
      item: {
        label: "元数据描述",
        name: "description",
        ...formNextLayout
      },
      type: "TextArea",
      mixin: {
        placeholder: "请输入项目信息描述，字数在100字以内"
      }
    },
    {
      item: {
        name: "download",
        ...tailFormItemLayout
      },
      type: "Button",
      value: "下载模版"
    },
    {
      item: {
        name: "upload",
        ...tailFormItemLayout
      },
      type: "Upload",
      value: "上传元数据schema",
      config: {
        Br: true
      },
      mixin: {
        data: {
          datastoreObjectId: 1
        },
        action: "/dmp/api/v1/md/mddataschema/datastoreobject/1/import"
      }
    },
    {
      item: {
        name: "submit",
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 12,
            offset: 12
          }
        }
      },
      type: "Submit"
    }
  ]
};

export { tableFormData };
