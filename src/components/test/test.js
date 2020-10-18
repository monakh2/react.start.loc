import React from 'react';
import './test.scss'
import {Box} from "@material-ui/core";

export default function Test() {
	return (
		<Box component={"span"} className={'box-wrapper'}>
		 <p className={'test-component'}>TEST COMPONENT</p>
		</Box>
	);
};