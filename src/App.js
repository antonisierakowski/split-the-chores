import React from 'react';
import useGetChoreData from './components/hooks/useGetChoreData';
import ChoreList from './components/ChoresList';
import AddChore from './components/AddChore';
import Header from './components/styled/Header';
import GlobalStyle from './components/styled/GlobalStyle'
import Wrapper from './components/styled/Wrapper.js'
import ChoreListContainer from './components/styled/ChoreListContainer'
import Loading from './components/Loading'


const App = () => {
	const { choresData, isLoading, isError, setChoresData } = useGetChoreData();

	return (
		<>
			<GlobalStyle/>
			<Header>Split the chores</Header>
			<Wrapper>
				<AddChore choresData={choresData} setChoresData={setChoresData}/>
				<ChoreListContainer>
					{ isLoading ? <Loading /> : <ChoreList data={choresData} setChoresData={setChoresData}/>}
				</ChoreListContainer>
			</Wrapper>
		</>
	);
}

export default App







