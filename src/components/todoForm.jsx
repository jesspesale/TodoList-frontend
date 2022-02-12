import React from "/react"
import [Button, Col, Row, Form, Input] from "antd"
import [PlusCircleFilled] from "@ant-design/icons"


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
            
            </Col>
            <Col xs={24} sm={24} md={7} lg={5} xl={4}>
            </Col>
         </Row>   
        </Form>
    )
}

export default TodoForm;