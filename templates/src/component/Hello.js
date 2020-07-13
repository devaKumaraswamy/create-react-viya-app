/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
import React, { useContext, useEffect } from 'react';
import { AppContext } from './providers';
const Hello = (props) => {
	const appContext = useContext(AppContext);
	let { store } = appContext;
	let r = (
		<div>
			<h1> Welcome to viyademo developed create with create-react-viya-app </h1>
			

			<h2> </h2>
		</div>
	);
	return r;
};
