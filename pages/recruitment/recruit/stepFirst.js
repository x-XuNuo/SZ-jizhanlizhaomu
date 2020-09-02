const form = {
	"propsData": {
		"currentPage": 0,
		"pages": [{
				"pageInfo": {
					"tabBar": [{
						"buttonName": "下一步",
						"functionName": "nextPage",
						"validate": true
					}]
				},
				"columns": [{
					"elementList": [
						{
							"label": "计划编号",
							"elementCode": "planId",
							"prop": "planId",
							"elementType": "0102",							
							"labelWidth":"200",
							"elementInfo": {
							
							},
							"attributesData": {
								"propsData": {
									"type": "number",
									"inputAlign": "right",
									"placeholder": "请输入计划编号"
								},
								"data": {
									"ruleList": [{
											"required": true,
											"message": "请输入计划编号",
											"trigger": [
												"change",
												"blur"
											]
										},
										{
											"validator": true,
											"message": "计划编号格式不正确",
											"trigger": [
												"change",
												"blur"
											]
										}
									]
								},
								"operateData": {
							
								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "申请日期",
							"elementCode": "applyDate",
							"prop": "applyDate",
							"elementType": "04",						
							"labelWidth":"200",
							"elementInfo": {

							},
							"attributesData": {
								"propsData": {
									"placeholder": "请选择日期"
								},
								"data": {
									
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},{
							"label": "申请人姓名",
							"elementCode": "name",
							"prop": "name",
							"elementType": "0101",						
							"labelWidth":"200",
							"elementInfo": {
							},
							"attributesData": {
								"propsData": {
									"placeholder": "请输入姓名"
								},
								"data": {
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "申请人手机号",
							"elementCode": "phone",
							"prop": "phone",
							"elementType": "0102",						
							"labelWidth":"200",
							"elementInfo": {

							},
							"attributesData": {
								"propsData": {
									"type": "number",
									"inputAlign": "right",
									"placeholder": "请输入手机号"
								},
								"data": {
									"ruleList": [{
											"required": true,
											"message": "请输入手机号",
											"trigger": [
												"change",
												"blur"
											]
										},
										{
											"validator": true,
											"message": "手机号码不正确",
											"trigger": [
												"change",
												"blur"
											]
										}
									]
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},{
							"label": "申请事项主题",
							"elementCode": "theme",
							"prop": "theme",
							"elementType": "0101",						
							"labelWidth":"200",
							"elementInfo": {
							},
							"attributesData": {
								"propsData": {
									"placeholder": "请输入事项主题"
								},
								"data": {
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "机构",
							"elementCode": "mechanism",
							"prop": "mechanism",
							"elementType": "0202",						
							"labelWidth":"200",
							"elementInfo": {
								"leftIcon": "account",
								"required": true
							},
							"attributesData": {
								"propsData": {
									"placeholder": "请选择",
									"selectList": [{
											"value": 1,
											"label": "上海分公司",
											"children": [{
													"value": 2,
													"label": "浦东分公司",
													"children": [{
															"value": 3,
															"label": "浦东1号支公司"
														},
														{
															"value": 4,
															"label": "浦东2号支公司"
														}
													]
												},
												{
													"value": 5,
													"label": "黄浦分公司",
													"children": [{
															"value": 6,
															"label": "黄浦1号支公司"
														},
														{
															"value": 7,
															"label": "黄浦2号支公司"
														}
													]
												}
											]
										},
										{
											"value": 8,
											"label": "江苏分公司",
											"children": [{
												"value": 9,
												"label": "南京分公司",
												"children": [{
													"value": 10,
													"label": "溧水支公司"
												}]
											}]
										}
									]
								},
								"data": {
									"ruleList": [{
										"required": true,
										"message": "请选择机构",
										"trigger": "change"
									}]
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "拟聘职级",
							"elementCode": "rank",
							"prop": "rank",
							"elementType": "0201",						
							"labelWidth":"200",
							"elementInfo": {
								"leftIcon": "account",
								"required": true
							},
							"attributesData": {
								"propsData": {
									"placeholder": "请选择",
									"selectList": [{
											"value": "C01",
											"label": "C01"
										},
										{
											"value": "C02",
											"label": "C02"
										},
										{
											"value": "C03",
											"label": "C03"
										}
									]
								},
								"data": {
									"ruleList": [{
										"required": true,
										"message": "请选择拟聘职级",
										"trigger": "change"
									}]
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "申请内容",
							"elementCode": "content",
							"prop": "content",
							"elementType": "0104",						
							"labelWidth":"200",
							"elementInfo": {
								"leftIcon": "account",
								"required": true
							},
							"attributesData": {
								"propsData": {
									"placeholder": "请填写简介(200字以内)"
								},
								"data": {
									"ruleList": [{
											"required": true,
											"message": "请填写姓名"
										},
										{
											"min": 5,
											"message": "简介不能少于5个字",
											"trigger": "change"
										},
										{
											"pattern": /^[\u4e00-\u9fa5]+$/gi,
											"message": "内容只能为中文",
											"trigger": "change"
										}
									]
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						}
					]
				}]
			},

			{
				"pageInfo": {
					"tabBar": [{
						"buttonName": "上一页",
						"functionName": "previousPage",
						"validate": true
					}, {
						"buttonName": "下一页",
						"functionName": "nextPage",
						"validate": true
					}]
				},
				"columns": [{
					"elementList": [{
							"label": "姓名11",
							"elementCode": "name",
							"prop": "name1",
							"elementType": "0101",
							"elementInfo": {
								"leftIcon": "account",
								"required": true
							},
							"attributesData": {
								"propsData": {
									"placeholder": "请输入姓名"
								},
								"data": {
									"ruleList": [{
											"required": true,
											"message": "请输入姓名",
											"trigger": "blur"
										},
										{
											"min": 3,
											"max": 5,
											"message": "姓名长度在3到5个字符",
											"trigger": [
												"change",
												"blur"
											]
										},
										{
											"message": "姓名必须为中文",
											"trigger": [
												"change",
												"blur"
											]
										}
									]
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "简介",
							"elementCode": "intro",
							"prop": "intro1",
							"elementType": "0104",
							"elementInfo": {

							},
							"attributesData": {
								"propsData": {
									"placeholder": "请填写简介"
								},
								"data": {
									"ruleList": [{
											"required": true,
											"message": "请填写姓名"
										},
										{
											"min": 5,
											"message": "简介不能少于5个字",
											"trigger": "change"
										},
										{
											"pattern": /^[\u4e00-\u9fa5]+$/gi,
											"message": "简介只能为中文",
											"trigger": "change"
										}
									]
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "手机号",
							"elementCode": "phone",
							"prop": "phone1",
							"elementType": "0102",
							"elementInfo": {

							},
							"attributesData": {
								"propsData": {
									"type": "number",
									"inputAlign": "right",
									"placeholder": "请输入手机号"
								},
								"data": {
									"ruleList": [{
											"required": true,
											"message": "请输入手机号",
											"trigger": [
												"change",
												"blur"
											]
										},
										{
											"validator": true,
											"message": "手机号码不正确",
											"trigger": [
												"change",
												"blur"
											]
										}
									]
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "商品类型",
							"elementCode": "goodsType1",
							"prop": "goodsType1",
							"elementType": "0201",
							"elementInfo": {

							},
							"attributesData": {
								"propsData": {
									"placeholder": "请选择商品类型",
									"selectList": [{
											"value": "电子产品",
											"label": "电子产品"
										},
										{
											"value": "服装",
											"label": "服装"
										},
										{
											"value": "工艺品",
											"label": "工艺品"
										}
									]
								},
								"data": {
									"ruleList": [{
										"required": true,
										"message": "请选择商品类型",
										"trigger": "change"
									}]
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "所在区域",
							"elementCode": "area",
							"prop": "area1",
							"elementType": "0202",
							"elementInfo": {

							},
							"attributesData": {
								"propsData": {
									"placeholder": "请选择地区",
									"selectList": [{
											"value": 1,
											"label": "中国",
											"children": [{
													"value": 2,
													"label": "广东",
													"children": [{
															"value": 3,
															"label": "深圳"
														},
														{
															"value": 4,
															"label": "广州"
														}
													]
												},
												{
													"value": 5,
													"label": "广西",
													"children": [{
															"value": 6,
															"label": "南宁"
														},
														{
															"value": 7,
															"label": "桂林"
														}
													]
												}
											]
										},
										{
											"value": 8,
											"label": "美国",
											"children": [{
												"value": 9,
												"label": "纽约",
												"children": [{
													"value": 10,
													"label": "皇后街区"
												}]
											}]
										}
									]
								},
								"data": {
									"ruleList": [{
										"required": true,
										"message": "请选择地区",
										"trigger": "change"
									}]
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "计划编号",
							"elementCode": "plan1",
							"prop": "plan1",
							"elementType": "07",
							"elementOptionValue": "展示参数11",
							"elementInfo": {

							},
							"attributesData": {
								"propsData": {},
								"data": {},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						},
						{
							"label": "上传图片",
							"elementCode": "photo",
							"prop": "photo1",
							"elementType": "0902",
							"elementInfo": {

							},
							"attributesData": {
								"propsData": {
									
								},
								"data": {
									
								},
								"operateData": {

								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						}
					]
				}]
			},

			{
				"pageInfo": {
					"tabBar": [{
						"buttonName": "提交",
						"functionName": "submit",
						"validate": true
					}]
				},
				"columns": [{
					"elementList": [{
							"label": "拟聘人员",
							"elementCode": "recruiters",
							"prop": "recruiters",
							"elementType": "10",
							"elementInfo": {
								"leftIcon": "plus-circle",
								"leftIconColor": "#fd6703",
								"buttonName": "拟聘人员",
								"buttonClass":"defaultBtnClass",
								"functionName": "btnClick()",
								"isShowList":true
							},
							"attributesData": {
								"propsData": {
									"addRecruitersList": [{
											"title": "姓名",
											"subTitle": "年龄",
											"icon": "man",
											"iconColor": "#6ac1ff",
											"label": "标题下方的描述信息",
											"rightIcon": "minus-circle",
											"rightIconColor": "#fd6703"
										},
										{
											"title": "姓名2",
											"subTitle": "年龄2",
											"icon": "woman",
											"iconColor": "#ff7e7b",
											"label": "标题下方的描述信息2",
											"rightIcon": "minus-circle",
											"rightIconColor": "#fd6703"
										}
									]
								},
								"data": {
									"ruleList": []
								},
								"operateData": {
								
								},
								"requestData": {
									"remoteApi": "",
									"isEnable": "",
									"requestParam": "",
									"requestMode": "",
									"success": ""
								}
							}
						}

					]
				}]
			}

		]
	},
};

module.exports = {
	form: form
}
