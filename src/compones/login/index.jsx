import React from 'react';
/* redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/action';
import { withRouter } from 'react-router-dom';
/* antd */
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';

class Login extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (err) console.log(err);
			let { userName, password } = values;
			this.props.actions.login({
				isLogin: {
					userName,
					password
				}
			});
			window.history.back();
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="container">
				<div className="header">
					<h1>宜居</h1>
				</div>
				<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
					<Form.Item>
						{getFieldDecorator('userName', {
							rules: [ { required: true, message: 'Please input your username!' } ]
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username"
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [ { required: true, message: 'Please input your Password!' } ]
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="Password"
							/>
						)}
					</Form.Item>
					<Form.Item>
						<Button block type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
Login = Form.create({ name: 'normal_login' })(Login);
function mapStateToProps(state) {
	return {
		isLogin: state.isLogin_reduce
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
