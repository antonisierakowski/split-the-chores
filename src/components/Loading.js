import React from 'react'
import styled from 'styled-components';

const $Loading = () => {
	return (
		<div>
			Loading...
		</div>
	)
}

const Loading = styled($Loading)`
	display: flex;
	justify-content: center;
	align-items: center;
`

export default Loading;