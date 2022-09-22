import React from 'react';
import 'antd/dist/antd.css';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import classes from './addMethods.module.css';

const { TextArea } = Input;

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 3,
    },
  },
};



function AddMethod() {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form
      name="method_form"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      autoComplete="off"
    >
    <Form.Item>
      <h1 className={classes.title}>Add Method</h1>

        <Form.Item>
            <span className={classes.index}> 1 </span>
          <Form.Item
            className={classes.defaultInput}
            name="default_method"
            rules={[
              {
                required: true,
                message: 'Insert at least one step.',
              },
            ]}
          >

            <TextArea 
              className={classes.input}
              placeholder="Insert Step Here" 
              autoSize maxLength={200} 
              style={{ background: "#69643100"}} 
            />
            </Form.Item>
        </Form.Item>

        
        <Form.List
          className={classes.dynamicInput}
          name="methods"
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item required={false} key={field.key}>
                  <span className={classes.index}>
                    {index + 2 + ' '}
                  </span>
                  <div>
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: 'Please insert a step or delete this field.',
                      },
                    ]}
                  >
                  <TextArea 
                    className={classes.input}
                    placeholder="Insert Step Here" 
                    autoSize maxLength={200} 
                    style={{ background: "#69643100" }} 
                  />
                  </Form.Item>
                  {fields.length > 0 ? (
                    <MinusCircleOutlined
                      className={classes.deleteButton}
                      onClick={() => remove(field.name)}
                      
                    />
                  ) : null}
                  </div>
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  className={classes.addButton}
                  type="dashed"
                  onClick={() => add()}
                  style={{
                    width: '60%',
                  }}
                  
                >
                  + ADD MORE STEPS
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      
      </Form.Item>
    </Form>
  );
}

export default AddMethod;
