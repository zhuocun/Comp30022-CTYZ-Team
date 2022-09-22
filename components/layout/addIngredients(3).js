import React from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import {
  Button, Form, Input, Row, Col,
} from 'antd';
import classes from './addIngredients.module.css';

const { TextArea } = Input;

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

function addIngredients() {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form
      name="ingredients_form"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item>
        <h1 className={classes}>Add Ingredients</h1>

        <div>
          <Form.Item>
            <Input.Group size="medium">
              <Row gutter={8}>
                <Col span={11}>
                  <Input placeholder="Ingredient" />
                </Col>
                <Col span={11}>
                  <Input placeholder="Amount" />
                </Col>
              </Row>
            </Input.Group>
          </Form.Item>
          <div>
            <Form.List
              name="methods"
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item required={false} key={field.key}>

                      <>
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

                          <Input.Group size="medium">
                            <Row gutter={8}>
                              <Col span={11}>
                                <Input placeholder="Ingredient" />
                              </Col>
                              <Col span={11}>
                                <Input placeholder="Amount" />
                              </Col>
                            </Row>
                          </Input.Group>

                        </Form.Item>
                        <MinusCircleOutlined
                          onClick={() => remove(field.name)}
                        />
                      </>
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
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
          </div>
        </div>
      </Form.Item>
    </Form>
  );
}
export default addIngredients;
