import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Col } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./index.module.css";

const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 20,
            offset: 3
        }
    }
};

const IngredientsAdder: React.FC<{
    setIngredient: Dispatch<SetStateAction<any>>
}> = () => {

    const onFinish = (values) => {
        console.log("Received values of form:", values);
    };

    return (
        <Form
            name="ingredients_form"
            {...formItemLayoutWithOutLabel}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item>
                <h1 className={styles.title}>Add Ingredients</h1>
                <Form.Item
                    className={styles.defaultInput}
                    rules={[
                        {
                            required: true,
                            whitespace: true
                        }
                    ]}>
                    <Input.Group size="default">
                        <Row gutter={13}>
                            <Col span={11}>
                                <Input
                                    placeholder="Ingredient"
                                    className={styles.input} />
                            </Col>
                            <Col span={11}>
                                <Input placeholder="Amount" className={styles.input} />
                            </Col>
                        </Row>
                    </Input.Group>
                </Form.Item>

                <Form.List name="ingredients">
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field) => (
                                <Form.Item required={false} key={field.key}>
                                    <Form.Item
                                        {...field}
                                        validateTrigger={["onChange", "onBlur"]}
                                    >
                                        <Input.Group size="default">
                                            <Row gutter={13}>
                                                <Col span={11}>
                                                    <Input
                                                        placeholder="Ingredient"
                                                        className={styles.input}
                                                    />
                                                </Col>
                                                <Col span={11}>
                                                    <Input placeholder="Amount" className={styles.input} />
                                                </Col>
                                                <Button htmlType="submit">ok</Button>
                                            </Row>
                                        </Input.Group>
                                    </Form.Item>
                                    {/* </Form.Item> */}
                                    <MinusCircleOutlined onClick={() => remove(field.name)}
                                                         className={styles.deleteButton} />
                                </Form.Item>
                            ))}
                            {/* <div className={styles.a}> */}
                            <Form.Item>
                                <Button
                                    className={styles.addButton}
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{
                                        width: "60%"
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
            <Form.Item>
                <Button htmlType="submit">Finish</Button>
            </Form.Item>
        </Form>
    );
};

export default IngredientsAdder;
