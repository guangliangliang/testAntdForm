/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/*
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-18 16:24:25
 * @LastEditors: unicom
 * @LastEditTime: 2021-02-09 15:36:00
 */
import { Form } from "antd";
import React, { useImperativeHandle, forwardRef, useEffect } from "react";
import SingleFormItem from "./singleFormItem";
import "./index.less";
import PropTypes from "prop-types";
import { is } from "../utils";

const Index = (
  {
    formData,
    submit,
    buttonClick,
    setFieldsValue,
    uploadButtonClick,
    resetFormData,
    ifSetDefaultValue
  },
  ref
) => {
  const [form] = Form.useForm();

  const onGenderChange = (nameKey, value) => {
    form.setFieldsValue({ nameKey: value });
    is.Function(setFieldsValue) && setFieldsValue(nameKey, value);
  };

  const setFormDefaultValue = () => {
    const currentObj = form.getFieldsValue();
    const tempValue = {};
    formData.items.map((obj) => {
      const { item, mixin = {} } = obj;
      const { name } = item;
      if (!currentObj[name] && mixin.defaultValue) {
        tempValue[name] = mixin.defaultValue;
      }
    });
    form.setFieldsValue(tempValue);
  };

  useEffect(() => {
    setFormDefaultValue();
    return () => {};
  }, []);

  useEffect(() => {
    setFormDefaultValue();
  });

  const onSubmit = (values) => {
    if (ifSetDefaultValue) {
      formData.items.map((obj) => {
        const { item, mixin = {} } = obj;
        const { name } = item;
        if (!values[name] && values[name] !== 0) {
          values[name] = mixin.defaultValue;
        }
      });
    }
    submit(values);
  };

  const manualSubmit = () => {
    form.submit();
  };

  useImperativeHandle(ref, () => {
    return {
      getForm() {
        return form;
      },
      getItemsValue() {
        return form.getFieldsValue();
      },
      resetItemsValue() {
        form.resetFields(formData.items.map((item) => item.item.name));
        resetFormData && resetFormData();
      },
      updateSetValue() {
        setFormDefaultValue();
      }
    };
  });

  const { form: formObj, items } = formData;
  const FromItems = items.map((singleItem) => {
    const { item, type, mixin = {}, value, config = {} } = singleItem;
    const { name } = item;
    const { Br = false } = config;
    const BrDom = Br ? <br /> : null;
    return (
      <>
        <Form.Item key={name} {...item} className={`from_item_${name}`}>
          <SingleFormItem
            mixin={mixin}
            type={type}
            text={value}
            config={config}
            manualSubmit={manualSubmit}
            buttonClick={(text, obj) => {
              buttonClick(text, obj);
            }}
            uploadButtonClick={uploadButtonClick}
            onChange={(value) => {
              onGenderChange(name, value);
            }}
          />
        </Form.Item>
        {BrDom}
      </>
    );
  });
  return (
    <Form
      form={form}
      {...formObj}
      className={"base_antd_form"}
      onFinish={onSubmit}
    >
      {FromItems}
    </Form>
  );
};

// Index.propTypes = {
//   /**
//    *  展示的表单数据
//    */
//   formData: PropTypes.object,
//     /**
//    * 点击提交按钮时调用
//    */
//   submit: PropTypes.func,
//     /**
//    * 每次改变数据或者 按钮点击时调用
//    */
//   update: PropTypes.func,
//     /**
//    * 每次改变数据或者 按钮点击时调用
//    */
//   setFieldsValue: PropTypes.func,
//    /**
//    *  点击上传按钮的时候调用,用来判断能否弹出选择文件的框,不设置就是默认弹出
//    */
//   uploadButtonClick: PropTypes.func,
//   /**
//    *  是否要在提交的时候是否进行将没有设置值的内容设置成默认值
//    */
//   ifSetDefaultValue: PropTypes.bool,
// };

// Index.defaultProps = {
//   formData: {},
//   submit: () => {},
//   update: () => {},
//   setFieldsValue: () => {},
//   uploadButtonClick: () => {return true},
//   ifSetDefaultValue:true
// };

export default forwardRef(Index);
