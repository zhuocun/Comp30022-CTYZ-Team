import { MinusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import classes from './addIngredients.module.css';

function addIngredients() {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="ingredients_list" onFinish={onFinish} layout="inline" autoComplete="off">
      <div className={classes.mainLayout}>
        <Form.Item>
          <h1 className={classes.title}>Add Ingredients</h1>
        
        <div className={classes.defaultLine}>
          <Form.Item
            className={classes.defaultInput}
            name="default_ingredient"
            rules={[
              {
                required: true,
                message: 'Missing Ingredient',
              },
            ]}
          >
            <Input placeholder="Ingredient" className={classes.input} />
          </Form.Item>
          <Form.Item
            name="default_amount"
            rules={[
              {
                required: true,
                message: 'Missing Amount',
              },
            ]}
            style={{
              display: 'inline-block',
            }}
            className={classes.defaultInput}
          >
            <Input placeholder="Amount" className={classes.input} />
          </Form.Item>
        </div>

        <Form.List name="ingredients">
          {(fields, { add, remove }) => (
            <div>
              {fields.map(({ key, name, ...restField }) => (
                <div className={classes.formlist}>
                  <Form.Item
                    {...restField}
                    name={[name, 'ingredient']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing Ingredient Name',
                      },
                    ]}
                    style={{
                      display: 'inline-block',
                    }}
                  >
                    <Input placeholder="Ingredient" className={classes.input} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'amount']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing Amount',
                      },
                    ]}
                    style={{
                      display: 'inline-block',
                    }}
                  >
                    <Input placeholder="Amount" className={classes.input} />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} className={classes.deleteButton} />
                </div>
              ))}
              <div className={classes.a}>
                <Form.Item>

                  <Button type="normal" onClick={() => add()} className={classes.addButton}>
                    + ADD MORE INGREDIENTS
                  </Button>

                </Form.Item>
              </div>
            </div>
          )}
        </Form.List>
        </Form.Item>
      </div>
    </Form>

  );
}
export default addIngredients;
