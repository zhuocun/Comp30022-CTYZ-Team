import { MinusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col } from 'antd';
import React from 'react';
import classes from './addIngredients.module.css';

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
          <h1 className={classes.title}>Add Ingredients</h1>
          <Form.Item
            className={classes.defaultInput}
            rules={[
              {
                required: true,
                whitespace: true,
              },
          ]}>
            <Input.Group size="medium" >
              <Row gutter={13}>
                <Col span={11}>
                  <Input placeholder="Ingredient" className={classes.input}/>
                </Col>
                <Col span={11}>
                  <Input placeholder="Amount" className={classes.input} />
                </Col>
              </Row>
            </Input.Group>
          </Form.Item>
      
        <Form.List name="ingredients">
          {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field) => (
                    <Form.Item required={false} key={field.key}>

                      <>
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                  >
                          <Input.Group size="medium">
                            <Row gutter={13}>
                              <Col span={11}>
                                <Input placeholder="Ingredient" className={classes.input}/>
                              </Col>
                              <Col span={11}>
                                <Input placeholder="Amount" className={classes.input}/>
                              </Col>
                            </Row>
                          </Input.Group>
                          </Form.Item>
                  {/* </Form.Item> */}
                  <MinusCircleOutlined onClick={() => remove(field.name)} className={classes.deleteButton} />
                </>
                </Form.Item>
              ))}
              {/* <div className={classes.a}> */}
                <Form.Item>

                <Button
                  className={classes.addButton}
                  type="dashed"
                  onClick={() => add()}
                  style={{
                    width: '60%',
                  }}
                >
                    + ADD MORE INGREDIENTS
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
export default addIngredients;
