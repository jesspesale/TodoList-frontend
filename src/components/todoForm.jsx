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
            
        </Form>
    )
}

export default TodoForm;