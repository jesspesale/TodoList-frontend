import React from "react"
import {Button, Col, Row, Form, Input} from "antd"
import {PlusCircleFilled} from "@ant-design/icons"


const TodoForm = ({onFormSubmit}) => {
    // useForm hook
    const [form] = Form.useForm

    const onFinish = () => {
        onFormSubmit({
            title: form.getFieldValue('title'),
            completed: false
        })
        console.log(form.getFieldValue('title'))

        form.resetFields()
    }
    return(
        <Form 
            form={form}
            onFinish={onFinish}
            layout="horizontal"
            className="todo-form" >
         <Row gutter={20}>
            <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                <Button></Button>
            </Col>
            <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                <Form.Item
                    name={`title`}
                    rules={[{require: true, message: 'this field is required'}]}
                    >
                    <Input placeholder="What needs to be done?" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block>
                    <PlusCircleFilled/>
                </Button>
                
            </Col>
         </Row>   
        </Form>
    )
}

export default TodoForm;