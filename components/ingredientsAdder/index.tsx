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
    setIngredient: Dispatch<SetStateAction<string[]>>
}> = ({ setIngredient }) => {

    const onFinish = (values: string[]) => {
        setIngredient(values);
    };

    return (
        <Form
            name="ingredients_form"
            {...formItemLayoutWithOutLabel}
            onFinish={onFinish}
            autoComplete="off"
        >
            <h1 className={styles.title}>Ingredients</h1>
            {/*
            <Form.Item>
                <Form.Item
                    className={styles.defaultInput}
                    name="Ingredient 1"
                    rules={[
                        {
                            required: true,
                            message: "Insert at least one ingredient."
                        }
                    ]}
                >
                    <Input
                        required={true}
                        placeholder={"Ingredient 1"}
                        className={styles.input}
                    />
                </Form.Item>
            </Form.Item>
            */}

            <Form.List name="ingredients">
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item required={false} key={field.key}>
                                <Form.Item
                                    {...field}
                                    validateTrigger={["onChange", "onBlur"]}
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "Please insert an ingredient or delete this field."
                                        }
                                    ]}
                                >
                                    <Row gutter={13}>
                                        <Col span={20}>
                                            <Input
                                                placeholder={"Ingredient " + (index + 1)}
                                                className={styles.input}
                                            />
                                        </Col>
                                    </Row>
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
                                + ADD INGREDIENTS
                            </Button>
                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item>
                <Button htmlType="submit">Finish</Button>
            </Form.Item>
        </Form>
    );
};

export default IngredientsAdder;
