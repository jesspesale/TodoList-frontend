import React from "react"
import {Button, Col, Row, Form, Input} from "antd"
import {PlusCircleFilled} from "@ant-design/icons"

{/* <PlusCircleFilled />; */}

const TodoForm = ({onFormSubmit}) => {
    // useForm hook to create a form
    const [form] = Form.useForm();

    const onFinish = () => {
        onFormSubmit({
    // title and completed value being set by default on submit
            title: form.getFieldValue('title'),
            completed: false
        })
        console.log(form.getFieldValue('title'))

        form.resetFields()
    }
    return (
        <div>
      <Form
        form={form}
        onFinish={onFinish}
        layout="horizontal"
        className="todo-form" >
        <Row gutter={20}>
          <Col xs={24} sm={24} md={17} lg={19} xl={20}>

          </Col>
          <Col xs={24} sm={24} md={7} lg={5} xl={4}>
            <Form.Item
              name={`title`}
              rules={[{ require: true, message: "this field is required" }]}
            >
              <Input placeholder="What needs to be done?" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              <PlusCircleFilled />
            </Button>
          </Col>
        </Row>
      </Form>
      </div>
    );
}

export default TodoForm;